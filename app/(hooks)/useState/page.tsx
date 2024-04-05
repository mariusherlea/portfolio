'use client';

import React, { useState } from 'react';

const Page = () => {
  const [state, setState] = useState({
    counter: 0,
    operation: '',
  });

  const addCounter = () => {
    setState((prevState) => {
      return {
        counter: prevState.counter + 1,
        operation: 'add',
      };
    });
  };

  const minusCounter = () => {
    setState((prevState) => {
      if (prevState.counter === 0) return { ...prevState };
      return {
        counter: prevState.counter - 1,
        operation: 'minus',
      };
    });
  };

  return (
    <div className="flex flex-auto flex-col-reverse justify-center items-center text-4xl">
      <button onClick={minusCounter}>-</button>
      <span>{state.counter}</span>
      <span>{state.operation}</span>
      <button onClick={addCounter}>+</button>
    </div>
  );
};

export default Page;
