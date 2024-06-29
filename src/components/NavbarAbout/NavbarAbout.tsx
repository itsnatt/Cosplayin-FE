import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
        <nav id="navbar" className={`fixed top-0 left-0 z-20 w-full border-b border-gray-200 bg-white py-2.5 px-6 sm:px-4 ${visible ? '' : 'hidden'}`}>
            <div className="container mx-auto flex max-w-6xl flex-wrap items-center justify-between">
                <Link href="/" legacyBehavior>
                    <a className="flex items-center">
                        <img src="/img-use/logo2.png" className="mr-3 h-12 text-blue-500 sm:h-100" />
                        <span className="self-center whitespace-nowrap text-xl font-semibold">Cosplay.in</span>
                    </a>
                </Link>
                <div className="mt-2 sm:mt-0 sm:flex md:order-2">
                    <Link href="/login" legacyBehavior>
                        <button type="button" className="mr-3 hidden border border-blue-700 py-1.5 px-6 text-center text-sm font-medium text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 md:inline-block rounded-lg">Login</button>
                    </Link>
                    <Link href="/register" legacyBehavior>
                        <button type="button" className="mr-3 hidden bg-blue-700 py-1.5 px-6 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 md:mr-0 md:inline-block rounded-lg">Register</button>
                    </Link>
                    <button type="button" className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden" id="toggleMenuButton">
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto" id="mobileMenu">
                    <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium">
                        <li>
                            <Link href="/" legacyBehavior>
                                <a className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700">Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" legacyBehavior>
                                <a className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:text-blue-700" aria-current="page">About</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" legacyBehavior>
                                <a className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700">FAQ</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
