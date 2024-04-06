'use client';

import React, { useState } from 'react';

const Page = () => {
  const [shoppingCart, setShoppingCart] = useState<any[]>([]);

  const addItemsToShoppingCart = (item: any) => {
    setShoppingCart((prevShoppingCart) => [...prevShoppingCart, item]);
  };

  const removeItemFromCart = (index: number) => {
    setShoppingCart((prevShoppingCart) => {
      const updatedCart = [...prevShoppingCart];
      updatedCart.splice(index, 1); // Remove the item at the specified index
      return updatedCart;
    });
  };

  // Calculate total cost dynamically
  const totalCost = shoppingCart.reduce((total, item) => total + item.price, 0);

  const items = [
    {
      name: 'A',
      price: 100,
      description: 'A description',
    },
    {
      name: 'B',
      price: 200,
      description: 'B description',
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center ">
      {items.map((item) => (
        <div key={item.name} className="m-4 p-3 text-3xl">
          <p className="text-red-600">{item.name}</p>
          <p>{item.price}</p>
          <p>{item.description}</p>
          <button
            onClick={() => addItemsToShoppingCart(item)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            ADD to cart
          </button>
        </div>
      ))}

      <h2>Shopping Cart:</h2>
      <ul>
        {shoppingCart.map((cartItem, index) => (
          <li key={index}>
            <p>{cartItem.name}</p>
            <p>{cartItem.price}</p>
            <p>{cartItem.description}</p>
            <button
              onClick={() => removeItemFromCart(index)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Remove from cart
            </button>
          </li>
        ))}
      </ul>
      <p>Total Cost: {totalCost}</p>
    </div>
  );
};

export default Page;
