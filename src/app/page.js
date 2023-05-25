export default function Home() {
  return (
    <main>
      <div className="landing grid grid-cols-10 min-h-screen">
        <div className="hero-img col-span-10 order-last lg:order-first lg:col-span-6 bg-hero-img bg-cover min-h-screen"></div>
        <div className="hero-section pb-20 grid grid-cols-10 col-span-10 lg:col-span-4 bg-ds-green">
          <img
            src="/img/logo.png"
            alt="Defenceless Souls Logo"
            className="col-span-4 col-start-4 mt-28"
          />
          <div className=" col-start-2 col-span-8 grid gap-5">
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
