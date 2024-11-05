"use client";
import React from 'react';
import { InfiniteMovingCards } from "@/components/ui/infinite-cards";
import { DiAtom, DiChrome } from 'react-icons/di';
import { VscVscode } from 'react-icons/vsc';
import { SiCodesandbox, SiGithub, SiIntellijidea, SiJetbrains, SiNetflix, SiOnlyfans, SiSublimetext, SiWebstorm } from 'react-icons/si';
import { IoStarSharp } from 'react-icons/io5';
import { motion } from "framer-motion";
import { BsGoogle, BsMicrosoft, BsYoutube } from 'react-icons/bs';

interface IDE {
  name: string;
  installs: string;
  icon: React.ReactNode;
}

const IDEs = [
  { name: 'Atom', installs: '400k+', icon: <BsGoogle size={50} /> },
  { name: 'VS Code', installs: '1m+', icon: <BsMicrosoft size={50} /> },
  { name: 'WebStorm', installs: '700k+', icon: <SiOnlyfans size={50} /> },
  { name: 'JetBrains', installs: '1m+', icon: <SiNetflix size={50} /> },
  { name: 'Codesandbox', install: '70k+', icon: <BsYoutube size={50} /> },
];

export default function Showcase() {
  return (
    <section className="pt-20 bg-transparent">
      <div className="relative overflow-hidden flex flex-col justify-center items-center text-center gap-5">
        <p className="text-neutral-200 max-w-xs md:max-w-6xl mb-5 text-base font-light">
          Trusted by top companies
        </p>
        <InfiniteMovingCards
          items={IDEs}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
}