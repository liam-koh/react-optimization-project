import Button from './Button';
import React from 'react';

const App = (props) => {
  console.log('App props:', props);
  return (
    <div>
      <h1>App</h1>
      <Button />
    </div>
  );
};

export default App;
