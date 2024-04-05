'use client';

import React, { useState, useEffect } from 'react';

const Page = () => {
  const [yourScore, setYourScore] = useState(100);
  const [myScore, setMyScore] = useState(100);
  const [isGameOver, setIsGameOver] = useState('');

  const randomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  const hit = () => {
    setYourScore(yourScore - randomNumber());
    setMyScore(myScore - randomNumber());
  };
  useEffect(() => {
    if (yourScore <= 0) return setIsGameOver('I win');
    else if (myScore <= 0) return setIsGameOver('You win');
  }, [yourScore, myScore]);

  return (
    <>
      <div></div>
      <div>
        <p>{yourScore}</p>
        <button onClick={hit}>Hit</button>
        <p>{myScore}</p>
        <p>{isGameOver}</p>
      </div>
    </>
  );
};

export default Page;
