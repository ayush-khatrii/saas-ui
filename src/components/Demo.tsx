// "use client";
// import { useEffect, useState } from 'react';

// export default function Demo() {
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoaded(true), 300);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className='relative flex justify-center items-center'>
//       {/* Video */}
//       <video
//         src='/codex.mp4'
//         autoPlay
//         loop
//         muted
//         className='w-auto md:max-w-4xl border border-zinc-800 rounded'
//         onLoadedData={() => setLoaded(true)}
//       />
//     </div>
//   );
// }

import HeroVideoDialog from "@/components/ui/hero-video-dialog";

export default function Demo() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="/codex.mp4"
        thumbnailSrc="/codex-ss.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="/codex.mp4"
        thumbnailSrc="/codex-ss.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
