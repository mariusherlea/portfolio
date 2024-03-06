'use client';
import { useState } from 'react';
import ThemeSwitch from './ThemeSwitch';

const links = {
  home: {
    href: '#',
    title: 'Home',
  },
  about: {
    href: '#',
    title: 'About',
  },
  contact: {
    href: '#',
    title: 'Contact',
  },
};
const NavBar = () => {
  const [isClick, setisClick] = useState(false);

  const toggleNavBar = (): void => {
    setisClick(!isClick);
  };
  return (
    <>
      <nav className="bg-black ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="#" className="text-white">
                  Logo
                </a>
              </div>
            </div>

            <ThemeSwitch />

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {Object.keys(links).map((key) => {
                  const { href, title } = links[key];
                  return (
                    <a key={key} href={href} className="text-white">
                      {title}
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
                const { href, title } = links[key];
                return (
                  <a key={key} href={href} className="text-white">
                    {title}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
