import React from 'react';
import about from '../../assets/img/about.jpg';

const About = () => {
  return (
    <>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col md:flex-row justify-center h-full space-x-5 py-10 md:pb-20 '>
          <div className='px-6 md:px-0 mx-auto md:mx-0 w-full max-w-sm  md:mr-10'>
            <img
              className='cover border-darkBeach border-8'
              src={about}
              alt='portrait of Jaycee'
            />
          </div>
          <div className='px-4 md:px-0 mb-8 md:mb-0 mt-10 md:mt-0 h-full w-fit md:max-w-md lg:max-w-lg xl:leading-7'>
            <div className='font-bold text-3xl md:text-4xl opacity-90 text-darkBrown'>
              About Me
            </div>
            <div className='text-xl font-semibold mb-3 mt-6'>
              Hello! I'm{' '}
              <span className='text-darkBrown'>Jaycee Barrameda</span>
            </div>
            <p className='text-md opacity-80 mb-4'>
              I'm a Software Developer with a passion for responsive website
              design and a believer in the mobile-first approach. Have relevant
              working experience with programming technologies such as C/C++,
              SQL, UNIX, and Software Quality Testing.{' '}
            </p>{' '}
            <p className='text-md opacity-80 mb-6'>
              Able to blend well into a team by communicating and sharing
              experience and knowledge. Flexible about learning and formulating
              solutions for complex problems in order to contribute in
              developing efficient and innovative products.
            </p>
            <ul className='flex mb-4 text-4xl text-darkBrown space-x-6'>
              <li>
                <i className='fab fa-github-square hover:cursor-pointer'></i>
              </li>
              <li>
                <i className='fab fa-linkedin hover:cursor-pointer'></i>
              </li>
              <li>
                <i className='fas fa-envelope-square hover:cursor-pointer'></i>
              </li>
            </ul>
            <button className='px-4 py-2 rounded text-darkBrown border-darkBrown border-2'>
              Download CV
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
