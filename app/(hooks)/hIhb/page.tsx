'use client';

import React, { useState, useEffect } from 'react';

const Page = () => {
  const [yourScore, setYourScore] = useState(100);
  const [myScore, setMyScore] = useState(100);
  const [isGameOver, setIsGameOver] = useState('');

  const randomNumber = () => {
    return Math.floor(Math.random() * 50) + 1;
  };

  const hit = () => {
    const yourNewScore = Math.floor(yourScore - randomNumber());
    const myNewScore = Math.floor(myScore - randomNumber());
    setYourScore(yourNewScore);
    setMyScore(myNewScore);
  };

  useEffect(() => {
    if (yourScore <= 0) return setIsGameOver('I win');
    else if (myScore <= 0) return setIsGameOver('You win');
  }, [yourScore, myScore]);

  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <p>I hit you, you hit me !</p>
        <p className="m-4 p-3 text-3xl">{yourScore}</p>
        <button onClick={hit} disabled={isGameOver !== ''}>
          Hit
        </button>
        <p className="m-4 p-3 text-3xl">{myScore}</p>
        <p className="m-4 p-3 text-3xl text-red-800">{isGameOver}</p>
      </div>
    </>
  );
};

export default Page;
