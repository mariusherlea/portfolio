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
    },
    {
      name: 'B',
      price: 200,
    },
  ];

  return (
    <>
      {items.map((item) => (
        <div key={item.name}>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <button onClick={() => addItemsToShoppingCart(item)}>
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
            <button onClick={() => removeItemFromCart(index)}>
              Remove from cart
            </button>
          </li>
        ))}
      </ul>
      <p>Total Cost: {totalCost}</p>
    </>
  );
};

export default Page;
