'use client';

import React, { useState } from 'react';

const Page = () => {
  const [shoppingCart, setShoppingCart] = useState<any[]>([]);

  // Initialize items with initial quantities
  const [items, setItems] = useState([
    {
      name: 'A',
      price: 100,
      quantity: 10, // Initial quantity
    },
    {
      name: 'B',
      price: 200,
      quantity: 5, // Initial quantity
    },
  ]);

  const addItemsToShoppingCart = (item: any) => {
    const existingItem = shoppingCart.find(
      (cartItem) => cartItem.name === item.name
    );

    if (existingItem) {
      // If the item already exists in the shopping cart, increment its quantity
      setShoppingCart((prevShoppingCart) =>
        prevShoppingCart.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      // If the item is not in the shopping cart, add it with quantity 1
      setShoppingCart((prevShoppingCart) => [
        ...prevShoppingCart,
        { ...item, quantity: 1 },
      ]);
    }

    // Update the initial quantity of the item
    const itemIndex = items.findIndex((i) => i.name === item.name);
    if (itemIndex !== -1) {
      const updatedItems = [...items];
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        quantity: updatedItems[itemIndex].quantity - 1,
      };
      setItems(updatedItems);
    }
  };

  const removeItemFromCart = (index: number) => {
    setShoppingCart((prevShoppingCart) => {
      // Copy the previous shopping cart array
      const updatedCart = [...prevShoppingCart];
      // Remove the item at the specified index
      const removedItem = updatedCart.splice(index, 1)[0];

      // Return the quantity of the removed item to the items array
      const itemIndex = items.findIndex(
        (item) => item.name === removedItem.name
      );
      if (itemIndex !== -1) {
        const updatedItems = [...items];
        updatedItems[itemIndex] = {
          ...updatedItems[itemIndex],
          quantity: updatedItems[itemIndex].quantity + removedItem.quantity,
        };
        setItems(updatedItems);
      }

      // Return the updated shopping cart array
      return updatedCart;
    });
  };

  // Calculate total cost dynamically
  const totalCost = shoppingCart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col justify-center items-center ">
      {items.map((item, index) => (
        <div key={item.name} className="m-4 p-3 text-3xl">
          <p className="text-red-600">{item.name}</p>
          <p>{item.price}</p>
          <p>Quantity: {item.quantity}</p> {/* Display item quantity */}
          <button
            onClick={() => addItemsToShoppingCart(item)}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
              item.quantity === 0 && 'opacity-50 cursor-not-allowed'
            }`}
            disabled={item.quantity === 0} // Disable button if item quantity is 0
          >
            ADD to cart
          </button>
        </div>
      ))}

      <h2>Shopping Cart:</h2>
      <ul>
        {shoppingCart.map((cartItem, index) => (
          <li key={index}>
            <p>{cartItem.name}</p>
            <p>Quantity: {cartItem.quantity}</p>
            <p>Price: {cartItem.price}</p>
            <button onClick={() => removeItemFromCart(index)}>
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
