'use client';

import React, { useState, useEffect } from 'react';

const Page = () => {
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  return (
    <>
      <div>
        <button
          onClick={() => setResourceType('posts')}
          className="m-4 bg-slate-500 hover:bg-red-200 rounded-xl p-3">
          Posts
        </button>
        <button
          onClick={() => setResourceType('users')}
          className="m-4 bg-slate-500 hover:bg-red-200 rounded-xl p-3">
          Users
        </button>
        <button
          onClick={() => setResourceType('comments')}
          className="m-4 bg-slate-500 hover:bg-red-200 rounded-xl p-3">
          Coments
        </button>
      </div>
      <div>
        <h1>{resourceType}</h1>
        {items.map((item) => {
          return <pre>{JSON.stringify(item, null, 2)}</pre>;
        })}
      </div>
    </>
  );
};

export default Page;
