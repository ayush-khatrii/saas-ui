"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/Tabs";
import { IoIosSearch } from "react-icons/io";
import { IoSparklesSharp } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";

const Explore = () => {
  const tabs = [
    {
      title: "Code Assist",
      icon: <IoSparklesSharp />,
      value: "code-assist",
      content: (
        <div className="w-full overflow-hidden relative h-full border rounded-md p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-zinc-900 to-zinc-950">
          <p className="font-light text-base md:text-lg">Get smart, real-time code suggestions tailored to your needs.</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Error Detection",
      icon: <IoIosSearch />,
      value: "error-detection",
      content: (
        <div className="w-full overflow-hidden relative h-full border rounded-md p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-zinc-900 to-zinc-950">
          <p className="font-light text-base md:text-lg ">
            Codex pinpoints potential issues and suggests fixes, so you can write flawless code faster.
          </p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Refactoring Suggestions",
      value: "refactoring-suggestions",
      icon: <HiMiniWrenchScrewdriver />,
      content: (
        <div className="w-full overflow-hidden relative h-full border rounded-md p-10 font-bold text-white bg-gradient-to-br from-zinc-900 to-zinc-950">
          <p className="font-light text-base md:text-lg">
            Ccodex identifies areas for optimization and cleaner code, making refactoring effortless.
          </p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Multi-language Support",
      value: "multi-language-support",
      icon: <FaCode />,
      content: (
        <div className="w-full overflow-hidden relative h-full border rounded-md p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-zinc-900 to-zinc-950">
          <p className="font-light text-base md:text-lg">
            Codex’s multi-language support understands your context and delivers relevant suggestions for every file type.
          </p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <section className="h-screen max-w-7xl mx-auto my-32">
      <div className="flex flex-wrap gap-3 w-full flex-col items-center text-center px-5 mt-10">
        <p className="lg:w-1/2 w-full leading-relaxed text-rose-600">Coding in action</p>
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Explore the Power of Codex</h1>
      </div>
      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full  items-start justify-start mt-20 mb-5">
        <Tabs tabs={tabs} />
      </div>
    </section>
  );
}
export default Explore;

const DummyContent = () => {
  return (
    <Image
      src="/codex-ss.png"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%] pt-5  md:h-[90%] absolute -bottom-10 inset-x-0 w-[92%] rounded-xl mx-auto"
    />
  );
};
