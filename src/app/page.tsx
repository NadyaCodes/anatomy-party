import DeckLinks from "./DeckLinks";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Anatomy <span className="text-[hsl(280,100%,70%)]">&</span> Physiology
        </h1>
        <div className="flex flex-wrap gap-4 md:gap-8">
          <DeckLinks />
          {/* <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="/locations"
          >
            <h3 className="text-2xl font-bold">Locations</h3>
            <div className="text-lg">Location terminology</div>
          </Link> */}

          {/* <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="https://create.t3.gg/en/introduction"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Documentation →</h3>
            <div className="text-lg">
              Learn more about Create T3 App, the libraries it uses, and how to
              deploy it.
            </div>
          </Link> */}
        </div>
      </div>
    </main>
  );
}
