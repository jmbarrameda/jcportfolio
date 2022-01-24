import React, { useState } from 'react';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <header className='z-50 fixed w-full text-lightBeach bg-aqua md:bg-lightBeach md:text-darkBrown md:bg-opacity-70 bg-opacity-90 shadow'>
      <div className='container text-lg flex justify-between mx-auto md:flex-wrap items-center py-4 px-4'>
        <div className='sm:block text-lg md:text-xl font-bold flex-shrink-0'>
          Jaycee Barrameda
        </div>
        {/* <div className='block sm:hidden font-bold flex-shrink-0'>Jaycee B.</div> */}
        <div className='hidden sm:flex'>
          <ul className='flex sm:text-sm md:text-md lg:text-lg space-x-6 md:space-x-12 items-center px-4'>
            <li className='hover:cursor-pointer font-bold'>
              <p>Home</p>
            </li>
            <li className='hover:cursor-pointer'>About</li>
            <li className='hover:cursor-pointer'>Work</li>
            <li>
              <div className='border-2 border-darkBrown px-4 py-2 rounded content-center hover:bg-darkBrown hover:text-lightBeach hover:cursor-pointer'>
                Contact Me!
              </div>
            </li>
          </ul>
        </div>
        <button className='sm:hidden ml-4' onClick={handleToggle}>
          <svg
            className='fill-lightBeach'
            viewBox='0 0 100 80'
            width='20'
            height='30'
          >
            <rect width='100' height='20'></rect>
            <rect y='30' width='100' height='20'></rect>
            <rect y='60' width='100' height='20'></rect>
          </svg>
        </button>
      </div>
      <div
        className={`sm:hidden sm:pl-8 ${
          navbarOpen ? '' : 'hidden'
        } transition-all ease-out duration-700`}
      >
        <ul className='bg-blue flex flex-col text-md text-lightBeach px-4 space-y-4 pb-4'>
          <li className='hover:cursor-pointer hover:text-blue-700'>
            <p>Home</p>
          </li>
          <li className='hover:cursor-pointer hover:text-blue-700'>About</li>
          <li className='hover:cursor-pointer hover:text-blue-700'>Work</li>
          <li className='hover:cursor-pointer hover:text-blue-700 font-bold shrink-0'>
            Contact Me!
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
