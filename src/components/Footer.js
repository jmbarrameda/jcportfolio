import React from 'react';

const Footer = (props) => {
  return (
    <footer
      className='mx-auto h-12 text-darkBrown'
      style={{ backgroundColor: `${props.bgColor}` }}
    >
      <div className='flex justify-center items-center h-full'>
        <div>Copyright © 2022. All Rights Reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
