"use client"
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'
import { useRouter } from 'next/navigation';
import { UploadButton } from '~/utils/uploadthing';
import { useState } from 'react';

export default function TopNavBar() {
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-transparent text-white text-xl font-semibold p-4 flex justify-between items-center border-b">
            <div className="flex justify-between items-center w-full">
                {/* Hamburger menu button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

               {/* Navigation links */}
               <nav className={`md:flex md:items-center md:space-x-4 ${menuOpen ? 'flex flex-col' : 'hidden'}`}>
                    <a href="/" className="block px-2 py-1 hover:text-gray-400">Home</a>
                    <a href="/about" className="block px-2 py-1 hover:text-gray-400">About</a>
                </nav>

                {/* Conditionally render Clerk components */}
                <div className=" md:flex gap-4">
                    <SignedIn>
                        <div className='flex gap-4'>
                            <UploadButton endpoint='imageUploader' onClientUploadComplete={() => {
                                router.refresh();
                            }} />
                            <UserButton />
                        </div>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                </div>
            </div>
        </header>
    );
}
