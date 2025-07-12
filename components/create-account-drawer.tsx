'use client'

import React, { useState, ReactNode } from 'react'
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

interface CreateAccountDrawerProps {
    children: ReactNode
}

const CreateAccountDrawer = ({ children }: CreateAccountDrawerProps) => {
    const [open, setOpen] = useState(false)

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger>{children}</DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                    <DrawerDescription>This action cannot be undone.</DrawerDescription>
                </DrawerHeader>
            </DrawerContent>
        </Drawer>
    )
}

export default CreateAccountDrawer
