"use client";
import React from 'react';
import Demo from "./Demo";
import { motion } from "framer-motion";
import { RiStarSFill } from 'react-icons/ri';
import Showcase from './Showcase';


const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-black text-white px-4 md:px-6 lg:px-8 py-16 md:pt-24">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `radial-gradient(rgb(255 255 255 / 0.5) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
        <div className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 50% 0%, 
                rgba(244, 63, 94, 0.15) 0%, 
                rgba(244, 63, 94, 0.05) 30%, 
                transparent 70%
              ),
              radial-gradient(circle at 80% 20%, 
                rgba(244, 63, 94, 0.1) 0%, 
                transparent 35%
              )
            `
          }}
        />

        {/* Animated grain effect */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%" height="100%" filter="url(%23noise)" opacity="0.4"/%3E%3C/svg%3E")',
            backgroundRepeat: 'repeat',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto mb-20 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-6"
        >
          <span className="px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm">
            🚀 Now in Public Beta
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ lineHeight: '1.2' }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold mx-auto w-full sm:w-11/12 md:w-4/5 text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300"
        >
          Supercharge Your Coding Workflow with{' '}
          <span className="text-rose-600">CodeX</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="my-8 mx-auto text-lg sm:text-xl lg:text-2xl font-light text-gray-400 w-full sm:w-4/5 md:w-3/5 lg:w-1/2"
        >
          From smart code completion to instant bug detection, experience a new way to code faster and better.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-8 sm:mt-10"
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-rose-600 to-rose-500 text-white rounded-lg 
                           hover:from-rose-500 hover:to-rose-400 transition-all duration-300 text-lg font-medium
                           shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40">
            Try it for Free
          </button>
          <button className="w-full sm:w-auto px-8 py-4 rounded-lg border border-zinc-700/50 text-white 
                           hover:bg-zinc-800/50 transition-all duration-300 text-lg font-medium
                           backdrop-blur-sm hover:border-zinc-600">
            Get Early Access
          </button>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 flex flex-wrap justify-center items-center gap-6 text-gray-400"
        >
          <span className="flex items-center gap-2">
            <RiStarSFill color="yellow" />
            4.9/5 Rating
          </span>
          <span>|</span>
          <span>10k+ Active Users</span>
          <span>|</span>
          <span>Used by Fortune 500</span>
        </motion.div>
      </div>

      {/* Demo Section with Gradient */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="relative w-full max-w-7xl"
      >
        {/* Demo gradient background */}
        <div className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 50% 50%, 
                rgba(244, 63, 94, 0.2) 0%, 
                rgba(244, 63, 94, 0.1) 20%, 
                transparent 70%
              )
            `
          }}
        />

        {/* Glass effect container */}
        <div className="relative rounded-2xl overflow-hidden">
          <Demo />
        </div>
      </motion.div>
      <Showcase />
    </section>
  );
};

export default Hero;