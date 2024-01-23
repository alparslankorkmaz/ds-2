export default function Home() {
  return (
    <main>
      <div className="landing grid grid-cols-10 min-h-screen">
        <div className="hero-img col-span-10 order-last lg:order-first lg:col-span-6 bg-hero-img bg-cover min-h-screen"></div>
        <div className="hero-section grid grid-cols-10 col-span-10 lg:col-span-4 bg-ds-green gap-10 lg:gap-5 min-h-screen">
          <img
            src="/img/logo.png"
            alt="Defenceless Souls Logo"
            className="col-span-4 col-start-4 mt-24"
          />
          <div className=" md:col-start-2 col-span-10 md:col-span-8 grid gap-5 pb-10">
            <h1 className="text-5xl text-white">
              Our four-legged friends need your help
            </h1>
            <p className="text-2xl font-extralight text-white">
              Quest for Defenceless Souls Dog Rescue and Sanctuary
            </p>
            <a
              href="https://www.gofundme.com/f/protect-turkish-strays-building-secure-fences"
              target="_blank"
              className="text-2xl md:text-3xl text-ds-light-green"
            >
              → Donate
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
