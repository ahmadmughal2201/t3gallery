"use client"
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'
import { useRouter } from 'next/navigation';
import { UploadButton } from '~/utils/uploadthing';



export default function TopNavBar() {
    const router = useRouter();
    return (
        <header className="bg-gray-800 border-b bg-transparent text-white text-xl font-semibold p-4 flex justify-between items-center">
            {/* Navigation links */}
            <nav className="flex space-x-4">
                <a href="/" className="hover:text-gray-400">Home</a>
                <a href="/about" className="hover:text-gray-400">About</a>
            </nav>

            {/* Conditionally render Clerk components */}
            <div>
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
        </header>
    );
}