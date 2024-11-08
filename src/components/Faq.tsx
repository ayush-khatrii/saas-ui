import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    question: "What is the AI Code Assistant?",
    answer: "The AI Code Assistant is a tool designed to help developers write, debug, and optimize code faster. It leverages AI to provide smart code suggestions, error fixes, and best practices."
  },
  {
    question: "Is my code data safe?",
    answer: "Yes, we prioritize security and privacy. All code data remains confidential and is encrypted during transmission and storage."
  },
  {
    question: "Can I integrate this with my IDE?",
    answer: "Absolutely! Our assistant supports major IDEs like VS Code, IntelliJ, and WebStorm. Setup guides are available for seamless integration."
  },
  {
    question: "Does the AI learn from my code?",
    answer: "The assistant uses generalized AI models and does not retain or learn from individual code submissions, ensuring privacy and compliance."
  },
  {
    question: "Is the AI Code Assistant free?",
    answer: "We offer a free trial for new users, with premium plans available for advanced features and more usage."
  }
];

const Faq = () => {
  return (
    <section className="max-w-7xl px-5 md:px-8 mx-auto flex flex-col justify-center items-center text-left py-10">
      <div className="flex flex-wrap gap-3 w-full mb-10 flex-col items-center text-center">
        <p className=" w-full leading-relaxed text-rose-600">FAQ</p>
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Frequently Asked Questions</h1>
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <Accordion type="single" collapsible className="w-full mt-2">
          {faqItems.map((item, index) => (
            <AccordionItem className="border px-3 rounded mt-2" key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-zinc-300 font-light text-lg">{item.question}</AccordionTrigger>
              <AccordionContent className="text-zinc-300 text-base font-extralight">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <span className="text-foreground text-sm md:text-base font-extralight tracking-wide text-center my-5 w-full">Still have questions? Email us at support@codex.ai</span>
    </section>
  )
}

export default Faq