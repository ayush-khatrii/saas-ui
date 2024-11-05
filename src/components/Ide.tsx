"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import FlickeringGrid from "./ui/flickering-grid";
import { BiAtom } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";
import { DiAtom, DiChrome } from "react-icons/di";
import { RxTriangleRight } from "react-icons/rx";
import { RxTriangleLeft } from "react-icons/rx";

import { SiCodesandbox, SiIntellijidea, SiSublimetext, SiWebstorm } from "react-icons/si";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full  bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export default function Ide() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-background p-10 md:shadow-xl"
        ref={containerRef}
      >
        <FlickeringGrid
          className="z-0 absolute inset-0 size-full"
          squareSize={6}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.2}
          flickerChance={0.1}
        />
        <div className="flex pt-20 size-full flex-col max-w-lg items-stretch justify-between gap-10">
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div1Ref}>
              <DiAtom color="black" size={60} />
            </Circle>
            <Circle ref={div5Ref}>
              <VscVscode color="#0078D4" size={60} />
            </Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div2Ref}>
              <SiSublimetext color="#FF9800" size={60} />
            </Circle>
            <Circle ref={div4Ref} className="size-16">
              <span className="text-rose-600 font-bold">CodeX</span>
            </Circle>
            <Circle ref={div6Ref}>
              <SiWebstorm color="#000" size={60} />
            </Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div3Ref}>
              <SiIntellijidea color="#C32F29" size={60} />
            </Circle>
            <Circle ref={div7Ref}>
              <SiCodesandbox color="#000" size={60} />
            </Circle>
          </div>
        </div>

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div4Ref}
          endYOffset={-10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div4Ref}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div3Ref}
          toRef={div4Ref}
          endYOffset={10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div5Ref}
          toRef={div4Ref}
          endYOffset={-10}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div6Ref}
          toRef={div4Ref}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div7Ref}
          toRef={div4Ref}
          endYOffset={10}
          reverse
        />
      </div>
    </div>
  );
}