import { HiSparkles } from "react-icons/hi";
import { IoCodeWorkingSharp } from "react-icons/io5";

const Features = () => {
  return (
    <section className="max-w-7xl mx-auto pb-20">
      <div className="text-zinc-500">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-wrap gap-3 w-full mb-20 flex-col items-center text-center">
            <p className="lg:w-1/2 w-full leading-relaxed text-rose-600">Features</p>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">CodeX - Your Intelligent Coding Partner</h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="">
                <div className="w-10 h-10 inline-flex items-center justify-center p-2.5 rounded-full bg-zinc-800 text-rose-600 mb-4">
                  <IoCodeWorkingSharp size={50} />
                </div>
                <h2 className="text-lg text-white font-medium title-font mb-2">Intelligent Code Completion</h2>
                <p className="leading-relaxed text-lg font-light">
                  Harness the power of AI to generate, code suggestions, saving you time and reducing errors. codeX's advanced language models analyze your code to provide  completions that improve your coding speed and accuracy.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-zinc-800 text-rose-600 mb-4">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-white font-medium title-font mb-2">Smart Code Refactoring</h2>
                <p className="leading-relaxed text-lg font-light">
                  Automatically identify and optimize inefficient code, improving readability and maintainability.CodeX uses code analysis techniques to detect areas for improvement.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-zinc-800 text-rose-600 mb-4">
                  <HiSparkles size={20} />
                </div>
                <h2 className="text-lg text-white font-medium title-font mb-2">Real-Time Error Detection</h2>
                <p className="leading-relaxed text-lg font-light">
                  Catch bugs and issues early in the development process with codeX's advanced linting and error-checking capabilities. By continuously monitoring your code
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features