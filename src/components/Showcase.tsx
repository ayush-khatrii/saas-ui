"use client";
import React from 'react';
import { InfiniteMovingCards } from "@/components/ui/infinite-cards";
import { DiAtom, DiChrome } from 'react-icons/di';
import { VscVscode } from 'react-icons/vsc';
import { SiCodesandbox, SiGithub, SiIntellijidea, SiJetbrains, SiSublimetext, SiWebstorm } from 'react-icons/si';
import { IoStarSharp } from 'react-icons/io5';
import { motion } from "framer-motion";

interface IDE {
  name: string;
  installs: string;
  icon: React.ReactNode;
}

const IDEs = [
  { name: 'Atom', installs: '400k+', icon: <DiAtom size={50} color="#66595C" /> },
  { name: 'VS Code', installs: '1m+', icon: <VscVscode size={50} color="#007ACC" /> },
  { name: 'WebStorm', installs: '700k+', icon: <SiWebstorm size={50} color="#00AEFF" /> },
  { name: 'JetBrains', installs: '1m+', icon: <SiJetbrains size={50} color="#007ACC" /> },
  { name: 'IntelliJ IDEA', installs: '100k+', icon: <SiIntellijidea size={50} color="#FF3366" /> },
  { name: 'Github', installs: '50k+', icon: <SiGithub size={50} color="#fff" /> },
  { name: 'Codesandbox', install: '70k+', icon: <SiCodesandbox size={50} color="#fff" /> },
];

export default function Showcase() {
  return (
    <div className="pt-20 bg-black">
      <div className="relative overflow-hidden flex flex-col justify-center items-center text-center gap-5">
        <p className="text-neutral-200 max-w-xs md:max-w-6xl mb-5 text-base font-light">
          Works seamlessly in local and cloud-based environments
        </p>
        <InfiniteMovingCards
          items={IDEs}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}