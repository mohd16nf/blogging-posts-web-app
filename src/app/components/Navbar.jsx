'use client';

import { useState } from 'react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

const Navbar = () => {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-100 shadow-md p-4 fixed w-full xl:pl-24 xl:pr-28 z-10">
      <div className="container flex justify-between items-center">
        {/* Left side: Logo */}
        <div className="text-3xl font-bold">
          <Link href="/" className="text-green-800">
            RanDomStuff
          </Link>
        </div>

        {/* Right side: Navigation links (Desktop) */}
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
          {session ? (
            <button
              onClick={handleSignOut}
              className="text-green-800 font-bold hover:text-orange-900"
            >
              Sign Out
            </button>
          ) : (
            <Link href="/api/auth/signin" className="text-green-800 font-bold hover:text-orange-900">
              Sign In
            </Link>
          )}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-3xl focus:outline-none text-green-800"
          >
            &#9776;
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} text-center mt-5`}
      >
        <Link href="/" className="block p-4 text-green-800 font-bold hover:text-orange-900">
          Home
        </Link>
        <Link
          href="/browse-posts"
          className="block p-4 text-green-800 font-bold hover:text-orange-900"
        >
          Create a Post
        </Link>
        <Link href="/addnote" className="block p-4 text-green-800 font-bold hover:text-orange-900">
          JokeUs
        </Link>
        {session ? (
          <button
            onClick={handleSignOut}
            className="block p-4 text-green-800 font-bold hover:text-orange-900 text-center"
          >
            Sign Out
          </button>
        ) : (
          <Link
            href="/api/auth/signin"
            className="block p-4 text-green-800 font-bold hover:text-orange-900 text-center"
          >
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
