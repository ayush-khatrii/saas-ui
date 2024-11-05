"use client"
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Features", path: "#features" },
    { name: "Pricing", path: "#pricing" },
    { name: "Contact", path: "#contact" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        delay: 0.2,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.05,
        staggerDirection: 1,
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <>
      <nav className="px-4 md:px-8 lg:px-16 py-2 bg-transparent border-b border-gray-600/25 backdrop-blur-sm text-white fixed w-full z-[300]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold z-50">
            <span className="dark:text-white text-black hover:text-rose-800 rounded-md p-1 mr-2">CodeX</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.path} className="hover:text-rose-500 transition duration-300">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex space-x-4">
            <Button className="px-4 py-2 rounded-md text-xs bg-rose-800 text-white hover:bg-rose-900 transition duration-300 ease-out">
              Get CodeX
            </Button>
            <Button
              variant={"outline"}
              className="">
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex items-center justify-center relative">
              <span className={`transform transition-all duration-300 ease-out block absolute h-0.5 w-6 bg-current ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}></span>
              <span className={`transform transition-all duration-300 ease-out block absolute h-0.5 w-6 bg-current ${isMenuOpen ? 'opacity-0 translate-x-3' : 'opacity-100'}`}></span>
              <span className={`transform transition-all duration-300 ease-out block absolute h-0.5 w-6 bg-current ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-40 flex items-center text-left justify-center"
          >
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col justify-center items-center text-left gap-3"
            >
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={linkVariants}>
                  <Link
                    href={link.path}
                    className="text-4xl dark:text-white text-black my-4 text-left hover:text-rose-500 transition duration-300 ease-out"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={linkVariants} className="mt-8 space-y-4">
                <Button className="w-full">
                  Get CodeX
                </Button>
                <Button
                  className="w-full"
                  variant="outline"
                >
                  Login
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}