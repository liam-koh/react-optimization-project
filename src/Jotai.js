import React, { useEffect } from 'react';
import { atom, useAtom } from 'jotai';

const counterAtom = atom(0);

const Jotai = () => {
  const [count, setCount] = useAtom(counterAtom);

  useEffect(() => {
    console.log('Jotai rendered 111111');
  }, [counterAtom])

  return (
    <div>
      <h1>Jotai</h1>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  )
}

export default Jotai;