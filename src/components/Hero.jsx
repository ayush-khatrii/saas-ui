import React from 'react';
import Demo from './Demo';

const Hero = () => {
  const alternativePatternStyle = {
    zIndex: -1,
    backgroundColor: 'transparent',
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%236b6b6b' fill-opacity='0.15'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
    maskImage: 'radial-gradient(circle, white 10%, transparent 90%)',
    WebkitMaskImage: 'radial-gradient(circle, white 10%, transparent 90%)'
  };

  return (
    <>
      <section className="flex min-h-screen flex-col items-center text-center px-4 md:px-6 lg:px-8 overflow-x-hidden">
        <div className="mt-20 sm:mt-24 md:mt-32 lg:mt-40 w-full">
          <div className="absolute inset-0 h-full w-full" style={alternativePatternStyle} />

          <div className="relative z-10 mx-auto max-w-7xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-snug mx-auto w-full sm:w-11/12 md:w-4/5 lg:w-3/4">
              Supercharge Your Coding Workflow with{' '}
              <span className="text-rose-500">CodeX</span>
            </h1>

            <p className="my-4 sm:my-5 mx-auto text-lg sm:text-xl lg:text-2xl font-light opacity-50 w-full sm:w-4/5 md:w-3/5 lg:w-1/2">
              From smart code completion to instant bug detection, experience a new way to code faster and better.
            </p>

            {/* Buttons container with responsive spacing */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-5 mt-6 sm:mt-8">
              <button className="w-full sm:w-auto px-6 py-3 bg-rose-800 text-white rounded-md hover:bg-rose-700 
                               transition-colors text-base sm:text-lg">
                Try it for Free
              </button>
              <button className="w-full sm:w-auto px-6 py-3 rounded-md border border-zinc-800 text-white 
                               hover:bg-zinc-800/30 transition-colors text-base sm:text-lg">
                Get Early Access
              </button>
            </div>
          </div>
        </div>
        <div className='my-10'>
          <Demo />
        </div>
      </section>
    </>
  );
};

export default Hero;