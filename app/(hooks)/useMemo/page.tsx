'use client';

import React, { useState, useMemo } from 'react';

const Page = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const theme = {
    color: dark ? 'red' : 'blue',
  };

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <button
        onClick={() => {
          setDark((prevDark) => !prevDark);
        }}>
        Change color
      </button>
      <div style={theme}>{doubleNumber}</div>
    </>
  );
};

function slowFunction(number: number) {
  for (let i = 0; i < 1000000000; i++) {}
  return number * 2;
}

export default Page;
