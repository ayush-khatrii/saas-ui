"use client";
import React from 'react';
import { InfiniteMovingCards } from "@/components/ui/infinite-cards";
import { SiNetflix, SiOnlyfans } from 'react-icons/si';
import { BsGoogle, BsMicrosoft, BsYoutube } from 'react-icons/bs';

interface IDE {
  name: string;
  installs: string;
  icon: React.ReactNode;
}

const IDEs = [
  { icon: <BsGoogle size={50} /> },
  { icon: <BsMicrosoft size={50} /> },
  { icon: <SiOnlyfans size={50} /> },
  { icon: <SiNetflix size={50} /> },
  { icon: <BsYoutube size={50} /> },
];

export default function Showcase() {
  return (
    <section className="pt-20 bg-transparent">
      <div className="relative overflow-hidden flex flex-col justify-center items-center text-center gap-5">
        <p className="text-zinc-200 max-w-xs md:max-w-6xl mb-5 text-base font-light">
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