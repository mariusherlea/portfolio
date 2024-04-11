'use client';
import { useState } from 'react';
import ThemeSwitch from './ThemeSwitch';
import Logo from './Logo';
import { usePathname } from 'next/navigation';

const links = {
  home: {
    href: '/',
    title: 'Home',
  },
  about: {
    href: '/about',
    title: 'About',
  },
  asyn: {
    href: '/async',
    title: 'Async',
  },
  firstGame: {
    href: '/game',
    title: 'Game',
  },
  shop: {
    href: '/shoppingCart',
    title: 'ShoppinCart',
  },
  contact: {
    href: '/contact',
    title: 'Contact',
  },
};
const NavBar = () => {
  const [isClick, setisClick] = useState(false);
  const pathname = usePathname();

  const toggleNavBar = (): void => {
    setisClick(!isClick);
  };

  return (
    <div>
      <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="#">
                  <Logo />
                </a>
              </div>
            </div>

            <div className="hover:scale-105 transition-transform duration-300 cursor-pointer">
              <ThemeSwitch />
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {Object.keys(links).map((key) => {
                  const linkKey = key as keyof typeof links;
                  const { href, title } = links[linkKey];
                  return (
                    <a
                      key={key}
                      href={href}
                      className={pathname === href ? 'text-gray-400' : ''}>
                      {title}
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
                onClick={toggleNavBar}>
                {!isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
              {Object.keys(links).map((key) => {
                const linkKey = key as keyof typeof links;
                const { href, title } = links[linkKey];
                return (
                  <a
                    key={key}
                    href={href}
                    className={pathname === href ? 'text-gray-400' : ''}>
                    {title}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
