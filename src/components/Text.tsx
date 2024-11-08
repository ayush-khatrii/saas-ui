import TextRevealByWord from "./ui/text-reveal"

const Text = () => {
  return (
    <section>
      <div className="z-10 flex h-screen items-center justify-center rounded-lg border bg-white dark:bg-black">
        <TextRevealByWord text="Magic UI will change the way you design." />
      </div>
    </section>
  )
}

export default Text