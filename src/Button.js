import React, { useEffect, useCallback, Suspense } from 'react';
import Jotai from './Jotai';
import RQuery from './RQuery';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({});

export default ({ text = 'Home Button', onClick, inputValue }) => {
  const onClickHandler = useCallback(() => {
    console.log(`Button.js: "${text}" clicked!`);
    onClick?.();
  }, [text, onClick]);

  useEffect(() => {
    console.log('Button.js: mounted.');
    return () => console.log('Button.js: unmounted.');
  }, []);

  console.log('Button.js: rendered.');

  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
        <Jotai />
        <QueryClientProvider client={queryClient}>
          <RQuery />
        </QueryClientProvider>
        <button onClick={onClickHandler}>{text}</button>
        <div>input: {inputValue}</div>
      </Suspense>
    </>
  );
};
