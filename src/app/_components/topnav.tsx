import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'


export default function TopNavBar() {
    return (
        <header className="bg-gray-800 text-white px-4 py-2 flex justify-between items-center">
            {/* Navigation links */}
            <nav className="flex space-x-4">
                <a href="/" className="hover:text-gray-400">Home</a>
                <a href="/about" className="hover:text-gray-400">About</a>
            </nav>

            {/* Conditionally render Clerk components */}
            <div><SignedIn>
                <UserButton />
            </SignedIn>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
            </div>
        </header>
    );
}