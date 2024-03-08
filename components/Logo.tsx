'use client';
import React from 'react';
import { Special_Elite } from 'next/font/google';
import Link from 'next/link';

const special = Special_Elite({ weight: ['400'], subsets: ['latin'] });

const Logo = () => {
  return (
    <div>
      <Link href={'/'} legacyBehavior>
        <div className="flex">
          <div className={special.className}>
            <span className="text-xl border-2 p-1">MH</span>
            <span className="text-xl bg-white text-black border-2 p-1">
              .dev
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
