import React from "react";

export default function about() {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="about-text col-span-2 lg:col-span-1 bg-ds-green p-5 min-h-screen flex flex-col justify-center items-center">
          <div className="px-5">
            <div className="grid grid-cols-4 gap-5 mb-10">
              <h1 className="text-3xl col-span-2 lg:text-4xl text-white lg:my-10 ">
                Meet Timur,{" "}
                <span className="text-ds-light-green">
                  {" "}
                  a man on a mission to save Turkish strays.
                </span>
              </h1>
              <img
                src="/img/about-img.jpg"
                alt="Timur holding a puppy"
                className="rounded-b-full col-span-4 lg:col-span-2 order-first lg:order-last mt-20 lg:mt-0"
              />
            </div>
            <p className="text-ds-light-green text-lg mb-10 lg:mb-0">
              For 17 years, Timur Yilmaz has selflessly dedicated his life to
              saving Turkish street dogs. He is the fearless leader behind our
              mission—a man whose unwavering dedication knows no bounds. When
              others turn away, Timur steps forward, a beacon of compassion in a
              country that often overlooks these innocent souls.{" "}
            </p>
          </div>
        </div>
        <div className="about-img min-h-screen bg-golyazi bg-cover col-span-2 lg:col-span-1 flex flex-col justify-center items-center">
          <h2 className="text-3xl lg:text-5xl text-white p-10">
            Welcome to Gölyazı
          </h2>
          <p className=" bg-ds-purple text-white bg-opacity-70 px-5 py-2 text-center">
            <u>Where:</u> Defenceless Souls operates just down the road from the
            small fishing town of Gölyazı. This Western, Turkish oasis is 2
            hours from Istanbul. Once a tourist hotspot, Gölyazı is now a quiet
            retreat on Lake Uluabat where Pelicans nest, this little town is
            quite unique. <br /> <u>The day-to-day:</u> Up at the rescue, come
            rain or shine, Timur works an average of 18 hours each day, 7 days
            per week. He cares for over 700 strays everyday, almost
            singlehandedly, doing twice daily feeds, health checks, and of
            course, giving the dogs lots of cuddles! When our small team of
            volunteers visit each weekend, Timur still doesn't take a break.
            Instead, he takes any sick or injured dogs an hour away to the
            nearest municipality vet clinic.
          </p>
        </div>
      </div>
    </>
  );
}
