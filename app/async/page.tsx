'use client';
import React, { useState, useEffect } from 'react';
import fetchData from '@/components/fetchData';

const AsyncComponent: React.FC = () => {
  const [quote, setQuote] = useState({ content: '', author: '' });

  useEffect(() => {
    const fetchDataAndSetQuote = async () => {
      try {
        const quoteData = await fetchData();
        setQuote(quoteData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataAndSetQuote();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <blockquote className="text-2xl">{quote.content}</blockquote>
      <p>- {quote.author}</p>
    </div>
  );
};

export default AsyncComponent;
