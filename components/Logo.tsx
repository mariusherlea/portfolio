import React from 'react';
import { Special_Elite } from 'next/font/google';

const special = Special_Elite({ weight: ['400'], subsets: ['latin'] });

const Logo = () => {
  return (
    <div className={special.className}>
      <div className="flex">
        <span className="text-xl  border-2 p-1">MH</span>
        <span className="text-xl bg-white text-black border-2 p-1">.dev</span>
      </div>
    </div>
  );
};

export default Logo;
