"use client";
import { VscVscode } from "react-icons/vsc";
import { SiCodesandbox, SiIntellijidea, SiWebstorm, SiPycharm, SiVisualstudio, SiAndroidstudio } from "react-icons/si";
import OrbitingCircles from "@/components/ui/orbiting-circles";
import { DiAtom } from "react-icons/di";
import Ripple from "./ui/ripple";

export default function Ide() {
  const orbitingIcons = [
    { Icon: VscVscode, color: "#007ACC" },
    { Icon: SiIntellijidea, color: "#FF315D" },
    { Icon: SiWebstorm, color: "#00CDD7" },
    { Icon: SiPycharm, color: "#21D789" },
    { Icon: SiVisualstudio, color: "#5C2D91" },
    { Icon: DiAtom, color: "#66595C" },
    { Icon: SiAndroidstudio, color: "#3DDC84" },
    { Icon: SiCodesandbox, color: "#000" },
  ];

  const radius = 200;
  const duration = 40;
  const delayIncrement = duration / orbitingIcons.length;

  return (
    <section className="relative flex bg-black w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <div className="opacity-50">
        <Ripple />
      </div>
      <div className="w-full">
        <div className="relative flex h-[600px] w-full flex-col items-center justify-center rounded-lg">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-rose-600 bg-clip-text text-center text-3xl font-semibold leading-none text-transparent dark:from-rose-600 dark:to-rose-950">
            CodeX
          </span>
          <h1 className="text-zinc-300 font-normal md:text-xl text-xl my-3">
            Supported by All Major IDEs
          </h1>

          {/* Orbiting Icons */}
          {orbitingIcons.map(({ Icon, color }, index) => (
            <OrbitingCircles
              key={index}
              className="size-[50px] border-none bg-transparent"
              radius={radius}
              duration={duration}
              delay={index * delayIncrement} // Apply staggered delay for even spacing
            >
              <div className="flex items-center justify-center rounded-full bg-zinc-600/30 p-2.5 transition-colors hover:bg-white/10">
                <Icon size={32} color={color} />
              </div>
            </OrbitingCircles>
          ))}
        </div>
      </div>
    </section>
  );
}
