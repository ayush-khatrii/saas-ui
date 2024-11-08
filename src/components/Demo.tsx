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
