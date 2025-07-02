"use client"
import React, { useEffect, useRef } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'

const HeroSection = () => {
    const imageRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const imageElement = imageRef.current;

        const handleScroll = () => {
            const scrollPosition = window.scrollY
            const scrollThreshold = 100

            if (scrollPosition > scrollThreshold) {
                imageElement?.classList.add("scrolled")
            }
            else {
                imageElement?.classList.remove("scrolled")
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className='pb-20 px-4 text-center mx-auto container'>
            <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
                Smarter Financial Decisions <br /> Powered by AI
            </h1>


            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Automate budgeting, control expenses, unlock real-time financial insights and stay on top of your financial goals — effortlessly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <Link href="/dashboard">
                    <Button size="lg" className='bg-[#004930] text-white hover:bg-[#cb9827] px-8'>
                        Get Started
                    </Button>
                </Link>

                <Link href="https://github.com/coderraj07">
                    <Button size="lg" variant="outline" className='px-8 hover:bg-[#cb9827] hover:text-white'>
                        Watch Demo
                    </Button>
                </Link>
            </div>
            <div className='hero-image-wrapper'>
                <div ref={imageRef} className='hero-image'>
                    <Image src="/Banner_.png" width={1280} height={720} alt="Dashboard Preview" className='rounded-lg shadow-2xl mx-auto' />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
