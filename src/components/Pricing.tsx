import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button";
import { IoCheckmark } from "react-icons/io5";

const pricingData = [
  {

    title: "Free",
    price: "$0",
    billing: "Free Forever",
    btnText: "Install",
    features: [
      "Unlimited AI autocompletion",
      "Unlimited in-editor chats",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatem!",
      "Unlimited AI commands",
      "No non-permissive data training",
      "Basic context awareness",
      "Limited indexing",
      "Attribution filtering",
      "Secure data encryption",
      "Optional zero-day retention",
      "Discord community access"
    ]
  },
  {
    title: "Pro",
    price: "$10",
    billing: "per month",
    popular: true,
    btnText: "Start Free Trail",
    features: [
      "All Individual features",
      "Larger Codex models",
      "GPT-4o and Claude Sonnet access",
      "Supercomplete access",
      "Extended context length",
      "Advanced context awareness",
      "Higher indexing limits",
      "More custom/pinned contexts",
      "Faster autocompletion"
    ]
  },
  {
    title: "Premium",
    price: "$50",
    billing: "per seat / month",
    btnText: "Start Free Trail",
    features: [
      "All Pro features",
      "Team analytics",
      "Seat management",
      "Automated zero-data retention",
      "Remote and multi-repo indexing",
      "AI code review with Forge (beta)"
    ]
  },
];

const Pricing = () => {

  return (
    <section id="pricing" className="max-w-7xl px-5 py-24 mx-auto">
      <div className="flex flex-wrap gap-3 w-full mb-20 flex-col items-center text-center">
        <p className="lg:w-1/2 w-full leading-relaxed text-rose-600">Pricing</p>
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Get Started with Codex</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 items-strecth gap-5">
        {
          pricingData.map((item) => (
            <>
              <Card className={`${item.popular ? "border border-rose-700" : ""}`}>
                <div className="relative w-full">
                  {
                    item.popular &&
                    <div className="absolute right-0 top-0 rounded-tr-lg rounded-bl-lg bg-rose-600 text-white px-5 py-2 font-mono text-sm font-semibold text-primary">
                      Popular
                    </div>
                  }
                </div>
                <CardHeader>
                  <CardTitle className="text-base pb-4">{item.title}</CardTitle>
                  <h1 className="md:text-5xl text-2xl font-semibold">{item.price}</h1>
                  <CardDescription>
                    {item.title === "Enterprise" ? "" : <p className="text-sm font-light mt-3">/per month</p>}
                  </CardDescription>
                  {
                    item.popular ?
                      <Button variant="default">{item.btnText}</Button>
                      :
                      <Button variant="outline" className="text-base">{item.btnText}</Button>
                  }
                </CardHeader>
                <CardContent className="mt-5">
                  <ul className="flex font-extralight justify-center items-start gap-5 flex-col ">
                    {
                      item.features.map((feature) => (
                        <li className="px-3 flex justify-center items-center gap-2">
                          <span>
                            <IoCheckmark />
                          </span>
                          {feature}
                        </li>
                      ))
                    }
                  </ul>
                </CardContent>
              </Card >
            </>
          ))}
      </div>
    </section >
  )
}

export default Pricing