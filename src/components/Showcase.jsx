import React from 'react'
import { InfiniteMovingCards } from "@/components/ui/infinite-cards";
import { DiAtom, DiChrome } from 'react-icons/di';
import { VscVscode } from 'react-icons/vsc';
import { SiGithub, SiIntellijidea, SiJetbrains, SiSublimetext, SiWebstorm } from 'react-icons/si';
import { IoStarSharp } from 'react-icons/io5';
import * as motion from "framer-motion/client"

const allIdes = [
  { name: 'VS Code', installs: '1m+', icon: <VscVscode size={50} color="#007ACC" /> },
  { name: 'JetBrains', installs: '1m+', icon: <SiJetbrains size={50} color="#007ACC" /> },
  { name: 'Chrome', installs: '50k+', icon: <DiChrome size={50} /> },
  { name: 'Github', installs: '50k+', icon: <SiGithub size={50} color="#fff" /> },
];
const IDEs = [
  { name: 'Atom', installs: '400k+', icon: <DiAtom size={50} color="#66595C" /> },
  { name: 'VS Code', installs: '1m+', icon: <VscVscode size={50} color="#007ACC" /> },
  { name: 'WebStorm', installs: '700k+', icon: <SiWebstorm size={50} color="#00AEFF" /> },
  { name: 'JetBrains', installs: '1m+', icon: <SiJetbrains size={50} color="#007ACC" /> },
  { name: 'IntelliJ IDEA', installs: '100k+', icon: <SiIntellijidea size={50} color="#FF3366" /> },
  { name: 'Github', installs: '50k+', icon: <SiGithub size={50} color="#fff" /> },
];



export default function Showcase() {

  return (
    <div className='flex flex-col justify-center items-center text-center gap-5 my-10'>
      <h1 className='text-3xl text-center text-zinc-300 '>Loved by million developers around the world ❤️</h1>
      <div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 p-5'>
          {
            allIdes.map((ide, index) => (
              <motion.div
                key={ide.name}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  delay: ide * 0.2,
                  type: 'spring',
                  stiffness: 100,
                  damping: 10,
                }}
                className='flex justify-between cursor-pointer backdrop-blur-xl bg-zinc-900 border border-zinc-800 p-5 rounded items-center gap-10'>
                <h1 className='text-xl flex justify-center items-center text-center gap-5'>{ide.icon} {ide.name}</h1>
                <span className='flex  justify-center items-center text-center gap-2 text-xl'>
                  {ide.installs}
                  <IoStarSharp color='yellow' />
                </span>
              </motion.div>
            ))
          }
        </div>
      </div>
      <InfiniteMovingCards
        items={IDEs}
        direction="right"
        speed="slow"
      />
      <p className='text-neutral-600 font-light'>"Works seamlessly in local and cloud-based environments"</p>

    </div>
  )
}
