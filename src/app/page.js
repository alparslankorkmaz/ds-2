export default function Home() {
  return (
    <main>
      <div className="landing grid grid-cols-10 min-h-screen">
        <div className="hero-img col-span-10 order-last md:order-first md:col-span-6 bg-hero-img bg-cover min-h-screen"></div>
        <div className="hero-section pb-20 grid grid-cols-10 col-span-10 md:col-span-4 bg-ds-green">
          <img
            src="/img/logo.png"
            alt="Defenceless Souls Logo"
            className="col-span-4 col-start-4 mt-28"
          />
          <div className=" col-start-2 col-span-8">
            <h1 className="text-5xl text-white mb-7">
              Our four-legged friends need your help
            </h1>
            <p className="text-2xl font-extralight text-white">
              Quest for Defenceless Souls Dog Rescue and Sanctuary
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
