'use client';

import React, { useState, useEffect } from 'react';

const page = () => {
  const [resource, setResource] = useState('posts');
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, [resourceUsage]);

  return (
    <>
      <div>
        <button
          onClick={() => setResource('posts')}
          className="m-4 bg-slate-500 hover:bg-red-200 rounded-xl p-3">
          Posts
        </button>
        <button
          onClick={() => setResource('users')}
          className="m-4 bg-slate-500 hover:bg-red-200 rounded-xl p-3">
          Users
        </button>
        <button
          onClick={() => setResource('comments')}
          className="m-4 bg-slate-500 hover:bg-red-200 rounded-xl p-3">
          Coments
        </button>
      </div>
      <div>
        <h1>{resource}</h1>
        {items.map((item) => {
          return <pre key={item.id}>{JSON.stringify(item, null, 2)}</pre>;
        })}
      </div>
    </>
  );
};

export default page;
