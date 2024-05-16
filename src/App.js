import Button from './components/Button';
import React from 'react';
import './index.css';
import './assets/icon.png';

const App = (props) => {
  console.log('App props:', props);
  return (
    <div>
      <p className='name'>App</p>
      <img src='./assets/icon.png' alt='logo' />
      <Button />
    </div>
  );
};

export default App;
