import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    name: "Ava",
    username: "@ava_codeguru",
    body: "This AI Code Assistant has transformed the way I work. It’s like having an expert by my side at all times. My productivity has doubled!",
    img: "https://avatar.vercel.sh/ava",
  },
  {
    name: "Liam",
    username: "@liam_dev",
    body: "Debugging has never been this easy. The assistant quickly points out issues in my code and suggests improvements that actually make a difference.",
    img: "https://avatar.vercel.sh/liam",
  },
  {
    name: "Sophia",
    username: "@sophia_coder",
    body: "Absolutely love the accuracy of the suggestions. The tool understands my code and helps me make it cleaner and more efficient. Can’t imagine coding without it!",
    img: "https://avatar.vercel.sh/sophia",
  },
  {
    name: "Noah",
    username: "@noah_aienthusiast",
    body: "As someone who's new to programming, this AI Assistant is a game-changer. It explains complex concepts in a way that’s easy to understand. Highly recommend it!",
    img: "https://avatar.vercel.sh/noah",
  },
  {
    name: "Olivia",
    username: "@olivia_devjourney",
    body: "The AI suggestions are always on point, whether I’m stuck with logic issues or just looking to optimize my code. It’s like having a senior developer at hand.",
    img: "https://avatar.vercel.sh/olivia",
  },
  {
    name: "Ethan",
    username: "@ethan_buildingblocks",
    body: "This is a must-have tool for developers. It’s saved me hours by catching bugs early and suggesting clean solutions. Worth every penny!",
    img: "https://avatar.vercel.sh/ethan",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-zinc-500/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function Testimonial() {
  return (
    <section className="">
      <div className="flex flex-wrap gap-3 w-full mb-5 flex-col items-center text-center py-20">
        <p className="lg:w-1/2 w-full leading-relaxed text-rose-600">Testimonials</p>
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">What our customers are saying</h1>
      </div>
      <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden rounded-lg  bg-background md:shadow-xl">
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse vertical pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse vertical pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
      </div>
    </section>
  );
}
