import React from "react";

export default function about() {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="about-text col-span-2 md:col-span-1 bg-ds-green p-5 min-h-screen flex flex-col justify-center items-center">
          <h1 className="text-7xl text-white my-10">
            Meet Timur,{" "}
            <span className="text-ds-light-green">
              {" "}
              a man on a mission to save Turkish strays.
            </span>
          </h1>
          <p className="text-ds-light-green text-lg">
            For 17 years, Timur Yilmaz has selflessly dedicated his life to
            saving Turkish street dogs. He is the fearless leader behind our
            mission—a man whose unwavering dedication knows no bounds. When
            others turn away, Timur steps forward, a beacon of compassion in a
            country that often overlooks these innocent souls.{" "}
          </p>
        </div>
        <div className="about-img col-span-2 md:col-span-1 bg-ds-purple flex justify-center items-center">
          <img
            src="/img/about-img.jpg"
            alt="Timur holding a puppy"
            className="rounded-full w-10/12"
          />
        </div>
      </div>
    </>
  );
}
