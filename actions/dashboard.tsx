"use server"

import { db } from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"
import { Account } from "@prisma/client";
import { revalidatePath } from "next/cache";

interface CreateAccountInput {
    name: string
    balance: string | number
    isDefault?: boolean
}

interface CreateAccountResponse {
    success: boolean
    data: SerializedAccount
}

type SerializedAccount = Omit<Account, 'balance'> & { balance: number }

const serializeTransaction = (obj: Account): SerializedAccount => {
    
    const serialized: SerializedAccount = {
        ...obj,
        balance: obj.balance.toNumber(),
    }

    return serialized
}


export async function createAccount(data: CreateAccountInput): Promise<CreateAccountResponse> {
    try {
        const { userId } = await auth()
        if (!userId) throw new Error("Unauthorized")

        const user = await db.user.findUnique({
            where: { clerkUserId: userId }
        })

        if (!user) {
            throw new Error("User not Found")
        }


        // Convert balance to float before saving
        const balanceFloat = parseFloat(data.balance as string)

        if (isNaN(balanceFloat)) {
            throw new Error("Invalid Balance Amount")
        }

        // Check if this is the user's first account
        const existingAccounts = await db.account.findMany({
            where: { userId: user.id }
        })

        const shouldBeDefault = existingAccounts.length === 0 ? true : data.isDefault

        if (shouldBeDefault) {
            await db.account.updateMany({
                where: { userId: user.id, isDefault: true }, // If user Id is default
                data: { isDefault: false }                   // Make other accounts as default false
            })
        }

        const account = await db.account.create({
            data: {
                ...data,
                type: "CURRENT",
                balance: balanceFloat,
                userId: user.id,
                isDefault: shouldBeDefault
            }
        })

        // Nextjs doesnot support decimal values
        // So convert the balance before returning
        const serializedAccount = serializeTransaction(account)

        revalidatePath("/dashboard")

        return {
            success: true,
            data: serializedAccount
        }

    }

    catch (error) {
        if (error instanceof Error) {
          throw new Error(error.message)
        }
        throw new Error("Something went wrong")
      }
      
}