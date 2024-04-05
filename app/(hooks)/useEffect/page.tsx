'use client';

import React, { useState, useEffect } from 'react';
import fetchData from '@/components/fetchData';

interface ItemType {
  id: number;
  title?: string;
  body?: string;
  name?: string;
  username?: string;
  email?: string;
}

const Page = () => {
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState<ItemType[]>([]);
  useEffect(() => {
    const fetchDataAndSetResourceType = async () => {
      try {
        const response = await fetchData(
          `https://jsonplaceholder.typicode.com/${resourceType}`
        );

        setItems(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchDataAndSetResourceType();
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
          return <pre key={item.id}>{JSON.stringify(item, null, 2)}</pre>;
        })}
      </div>
    </>
  );
};

export default Page;
