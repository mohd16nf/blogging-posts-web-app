// Comment Schema
// components/Navbar.jsx
'use client'

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

const Navbar = () => {
  const { data: session } = useSession();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <nav className="bg-blue-100 shadow-md p-4 fixed w-full xl:pl-24 xl:pr-28 z-10">
      <div className="container flex justify-between items-center">
        <div className="text-3xl font-bold">
          <Link href="/" className="text-green-800">
            RanDomStuff
          </Link>
        </div>

        <div className="hidden lg:flex space-x-6">
          <Link href="/" className="text-green-800 font-bold hover:text-orange-900">
            Home
          </Link>
          <Link href="/browse-posts" className="text-green-800 font-bold hover:text-orange-900">
            Create a Post
          </Link>
          <Link href="/addnote" className="text-green-800 font-bold hover:text-orange-900">
            JokeUs
          </Link>
          {
            session ? (
              <button onClick={handleSignOut} className="text-green-800 font-bold hover:text-orange-900">
                Sign Out
              </button>
            ) : (
              <Link href="/api/auth/signin" className="text-green-800 font-bold hover:text-orange-900">
                Sign In
              </Link>
            )
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
