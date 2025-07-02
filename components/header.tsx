import React from 'react';
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { LayoutDashboard, PenBox } from 'lucide-react';

const Header = () => {
  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src={"/Logo.png"}
            alt="Logo"
            width={927}
            height={258}
            className='h-12 w-auto object-contain'
          />
        </Link>

        <div className='flex items-center gap-4'>
          <SignedIn>

            <Link href={"/dashboard"} >
              <Button variant="outline" className='border-[#004930] text-[#004930] hover:bg-[#cb9827] hover:text-white flex items-center gap-2'>
                <LayoutDashboard size={18} />
                <span className="hidden md:inline">
                  Dashboard
                </span>
              </Button>
            </Link>

            <Link href={"/transaction/create"}>
              <Button className='bg-[#004930] text-white hover:bg-[#cb9827] flex items-center gap-2'>
                <PenBox size={18} />
                <span className="hidden md:inline">
                  Add Transaction
                </span>
              </Button>
            </Link>

          </SignedIn>


          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                }
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </div>
  );
};

export default Header;
