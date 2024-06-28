import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import React from "react"

const NavBar = () => {
  const router = useRouter();

  useEffect(() => {
    const toggleMenuButton = document.getElementById('toggleMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    if (toggleMenuButton && mobileMenu) {
      toggleMenuButton.addEventListener('click', () => {
        mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
      });
    }
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-20 w-full border-b border-gray-200 bg-white py-2.5 px-6 sm:px-4">
      <div className="container mx-auto flex max-w-6xl flex-wrap items-center justify-between">
        <Link href="/" legacyBehavior>
          <a className="flex items-center">
            <Image src="/assets/logo2.png" alt="Logo" width={48} height={48} className="mr-3 text-blue-500 sm:h-100" />
            <span className="self-center whitespace-nowrap text-xl font-semibold">Cosplay.in</span>
          </a>
        </Link>
        <div className="mt-2 sm:mt-0 sm:flex md:order-2">
          <Link href="/login" legacyBehavior>
            <a className="rounde mr-3 hidden border border-blue-700 py-1.5 px-6 text-center text-sm font-medium text-blue-700 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-blue-300 md:inline-block rounded-lg">Login</a>
          </Link>
          <Link href="/register" legacyBehavior>
            <a className="rounde mr-3 hidden bg-blue-700 py-1.5 px-6 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 md:mr-0 md:inline-block rounded-lg">Register</a>
          </Link>
        </div>
        <div className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto" id="mobileMenu">
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium">
            <li>
              <Link href="/" legacyBehavior>
                <a className={`block rounded py-2 pl-3 pr-4 md:p-0 ${router.pathname === '/' ? 'text-blue-700' : 'text-gray-700'} md:hover:text-blue-700 hover:bg-gray-100 md:hover:bg-transparent`}>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about" legacyBehavior>
                <a className={`block rounded py-2 pl-3 pr-4 md:p-0 ${router.pathname === '/about' ? 'text-blue-700' : 'text-gray-700'} md:hover:text-blue-700 hover:bg-gray-100 md:hover:bg-transparent`}>About</a>
              </Link>
            </li>
            <li>
              <Link href="/contact" legacyBehavior>
                <a className={`block rounded py-2 pl-3 pr-4 md:p-0 ${router.pathname === '/contact' ? 'text-blue-700' : 'text-gray-700'} md:hover:text-blue-700 hover:bg-gray-100 md:hover:bg-transparent`}>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
