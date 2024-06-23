import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'


export default function TopNavBar() {
    return (
        <header className="bg-gray-800 border-b bg-transparent text-white text-xl font-semibold p-4 flex justify-between items-center">
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