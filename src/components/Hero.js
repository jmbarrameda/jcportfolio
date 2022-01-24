import React from 'react';
import lass from '../assets/img/Lass_SI.png';
import me from '../assets/img/dp-no-bg-compressed.png';
import beach4 from '../assets/img/beach4.jpg';

const Hero = () => {
  return (
    <div
      className='h-screen relative overflow-hidden after:bg-aqua after:bg-opacity-50'
      style={{
        backgroundImage: `url(${beach4})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
      }}
    >
      <div className='relative z-20 container mx-auto h-full'>
        <div className='flex flex-col sm:flex-row items-center justify-center sm:justify-start h-full flex-wrap'>
          <div className='bg-aqua sm:bg-transparent  w-5/6 md:w-1/2 rounded-lg  bg-opacity-30 p-4'>
            <p className='pl-1 text-lightBeach md:text-darkBrown text-lg sm:text-xl font-semibold'>
              Hi I'm
            </p>
            <h1 className='text-4xl sm:text-5xl md:text-6xl text-lightBeach md:text-darkBrown font-bold'>
              Jaycee Barrameda
            </h1>
            <p className='text-lightBeach text-lg sm:text-xl mt-2 max-w-xl'>
              Passionate Software Developer with a high motivation for building
              state-of-the-art, optimized, and user friendly applications and
              websites through React.js.
            </p>
            <button className='text-lightBeach border-2 rounded px-4 py-2 mt-6 font-bold hover:bg-aqua'>
              View My Work
            </button>
          </div>
          <div className='hidden sm:block'></div>
        </div>
      </div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 70'
        className='absolute z-10 bottom-0'
        preserveAspectRatio='none'
      >
        <path
          fill='#fffefc'
          // fill='blue'
          fill-rule='evenodd'
          // d='M0 115.91c158.5 0 117.37-78.52 473.1-26.18C765.4 122.55 943 8.08 1067.2.69c156-9.28 188.5 75.15 372.8 75.22v41H0a6.68 6.68 0 0 1 0-1z'
          // d='M0,76L26.7,85.5C53.3,95,107,114,160,117.2C213.3,120,267,108,320,85.5C373.3,63,427,32,480,25.3C533.3,19,587,38,640,66.5C693.3,95,747,133,800,145.7C853.3,158,907,146,960,129.8C1013.3,114,1067,95,1120,98.2C1173.3,101,1227,127,1280,139.3C1333.3,152,1387,152,1440,148.8C1493.3,146,1547,139,1600,142.5C1653.3,146,1707,158,1760,158.3C1813.3,158,1867,146,1920,139.3C1973.3,133,2027,133,2080,114C2133.3,95,2187,57,2240,53.8C2293.3,51,2347,82,2400,104.5C2453.3,127,2507,139,2560,120.3C2613.3,101,2667,51,2720,47.5C2773.3,44,2827,89,2880,101.3C2933.3,114,2987,95,3040,79.2C3093.3,63,3147,51,3200,50.7C3253.3,51,3307,63,3360,85.5C3413.3,108,3467,139,3520,148.8C3573.3,158,3627,146,3680,129.8C3733.3,114,3787,95,3813,85.5L3840,76L3840,190L3813.3,190C3786.7,190,3733,190,3680,190C3626.7,190,3573,190,3520,190C3466.7,190,3413,190,3360,190C3306.7,190,3253,190,3200,190C3146.7,190,3093,190,3040,190C2986.7,190,2933,190,2880,190C2826.7,190,2773,190,2720,190C2666.7,190,2613,190,2560,190C2506.7,190,2453,190,2400,190C2346.7,190,2293,190,2240,190C2186.7,190,2133,190,2080,190C2026.7,190,1973,190,1920,190C1866.7,190,1813,190,1760,190C1706.7,190,1653,190,1600,190C1546.7,190,1493,190,1440,190C1386.7,190,1333,190,1280,190C1226.7,190,1173,190,1120,190C1066.7,190,1013,190,960,190C906.7,190,853,190,800,190C746.7,190,693,190,640,190C586.7,190,533,190,480,190C426.7,190,373,190,320,190C266.7,190,213,190,160,190C106.7,190,53,190,27,190L0,190Z'
          d='M0,60L18.5,55C36.9,50,74,40,111,45C147.7,50,185,70,222,70C258.5,70,295,50,332,41.7C369.2,33,406,37,443,31.7C480,27,517,13,554,8.3C590.8,3,628,7,665,20C701.5,33,738,57,775,63.3C812.3,70,849,60,886,53.3C923.1,47,960,43,997,35C1033.8,27,1071,13,1108,20C1144.6,27,1182,53,1218,61.7C1255.4,70,1292,60,1329,50C1366.2,40,1403,30,1440,30C1476.9,30,1514,40,1551,38.3C1587.7,37,1625,23,1662,16.7C1698.5,10,1735,10,1772,18.3C1809.2,27,1846,43,1883,55C1920,67,1957,73,1994,65C2030.8,57,2068,33,2105,21.7C2141.5,10,2178,10,2215,13.3C2252.3,17,2289,23,2326,23.3C2363.1,23,2400,17,2437,20C2473.8,23,2511,37,2548,36.7C2584.6,37,2622,23,2640,16.7L2658.5,10L2658.5,100L2640,100C2621.5,100,2585,100,2548,100C2510.8,100,2474,100,2437,100C2400,100,2363,100,2326,100C2289.2,100,2252,100,2215,100C2178.5,100,2142,100,2105,100C2067.7,100,2031,100,1994,100C1956.9,100,1920,100,1883,100C1846.2,100,1809,100,1772,100C1735.4,100,1698,100,1662,100C1624.6,100,1588,100,1551,100C1513.8,100,1477,100,1440,100C1403.1,100,1366,100,1329,100C1292.3,100,1255,100,1218,100C1181.5,100,1145,100,1108,100C1070.8,100,1034,100,997,100C960,100,923,100,886,100C849.2,100,812,100,775,100C738.5,100,702,100,665,100C627.7,100,591,100,554,100C516.9,100,480,100,443,100C406.2,100,369,100,332,100C295.4,100,258,100,222,100C184.6,100,148,100,111,100C73.8,100,37,100,18,100L0,100Z'
        ></path>
      </svg>
      <div className='absolute -right-36 sm:-right-20 md:right-0 bottom-0 h-full'>
        <img className='cover h-full max-w-fit ' src={me} alt='' />
      </div>

      {/* <svg
        id='wave'
        style='transform:rotate(0deg); transition: 0.3s'
        viewBox='0 0 1440 100'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
      >
        <defs>
          <linearGradient id='sw-gradient-0' x1='0' x2='0' y1='1' y2='0'>
            <stop stop-color='rgba(243, 106, 62, 1)' offset='0%'></stop>
            <stop stop-color='rgba(255, 179, 11, 1)' offset='100%'></stop>
          </linearGradient>
        </defs>
        <path
          style='transform:translate(0, 0px); opacity:1'
          fill='url(#sw-gradient-0)'
          d='M0,60L18.5,55C36.9,50,74,40,111,45C147.7,50,185,70,222,70C258.5,70,295,50,332,41.7C369.2,33,406,37,443,31.7C480,27,517,13,554,8.3C590.8,3,628,7,665,20C701.5,33,738,57,775,63.3C812.3,70,849,60,886,53.3C923.1,47,960,43,997,35C1033.8,27,1071,13,1108,20C1144.6,27,1182,53,1218,61.7C1255.4,70,1292,60,1329,50C1366.2,40,1403,30,1440,30C1476.9,30,1514,40,1551,38.3C1587.7,37,1625,23,1662,16.7C1698.5,10,1735,10,1772,18.3C1809.2,27,1846,43,1883,55C1920,67,1957,73,1994,65C2030.8,57,2068,33,2105,21.7C2141.5,10,2178,10,2215,13.3C2252.3,17,2289,23,2326,23.3C2363.1,23,2400,17,2437,20C2473.8,23,2511,37,2548,36.7C2584.6,37,2622,23,2640,16.7L2658.5,10L2658.5,100L2640,100C2621.5,100,2585,100,2548,100C2510.8,100,2474,100,2437,100C2400,100,2363,100,2326,100C2289.2,100,2252,100,2215,100C2178.5,100,2142,100,2105,100C2067.7,100,2031,100,1994,100C1956.9,100,1920,100,1883,100C1846.2,100,1809,100,1772,100C1735.4,100,1698,100,1662,100C1624.6,100,1588,100,1551,100C1513.8,100,1477,100,1440,100C1403.1,100,1366,100,1329,100C1292.3,100,1255,100,1218,100C1181.5,100,1145,100,1108,100C1070.8,100,1034,100,997,100C960,100,923,100,886,100C849.2,100,812,100,775,100C738.5,100,702,100,665,100C627.7,100,591,100,554,100C516.9,100,480,100,443,100C406.2,100,369,100,332,100C295.4,100,258,100,222,100C184.6,100,148,100,111,100C73.8,100,37,100,18,100L0,100Z'
        ></path>
      </svg> */}
    </div>
  );
};

export default Hero;
