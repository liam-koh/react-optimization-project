import Button from './components/Button';
import React from 'react';
import './index.css';

const VendorApp = (props) => {
  console.log('VendorApp props:', props);
  return (
    <div>
      <p className='name'>VendorApp</p>
      <Button />
    </div>
  );
};

export default VendorApp;
