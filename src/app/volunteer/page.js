import React from "react";
import Link from "next/link";

export default function volunteer() {
  return (
    <>
      <div className="bg-ds-purple py-20 px-10 lg:p-20 lg:min-h-screen">
        <div className="flex justify-between mt-10 flex-wrap gap-5">
          <h1 className="text-5xl font-semibold tracking-wide">
            Volunteering with us
          </h1>
          <Link
            href="/volunteer/volunteer-form"
            className="border-4 text-2xl rounded-2xl flex justify-center items-center py-2 px-5 font-semibold text-white hover:text-black hover:border-black"
          >
            Apply Here 🐾
          </Link>
        </div>

        <div className="grid grid-cols-3 mt-20 gap-28 lg:gap-10">
          <div className="daily-feeds gap-5 flex flex-col items-center col-span-3 lg:col-span-1">
            <p className="font-semibold border-2 border- p-2 rounded-2xl">
              Daily support
            </p>
            <img src="/img/dog-icon.png" alt="Dog Icon" className="w-20" />
            <h2 className="font-semibold text-xl text-center">
              Daily feeds and health checks
            </h2>
            <p className="text-center">
              The dogs need to be fed twice a day and their water buckets must
              be refilled once a day. This includes keeping an eye on our
              littlest friends, who may get pushed out by the bigger dogs.
            </p>
          </div>
          <div className="supplies gap-5 flex flex-col items-center col-span-3 lg:col-span-1">
            <p className="font-semibold border-2 border- p-2 rounded-2xl">
              Daily support
            </p>
            <img src="/img/paw-icon.png" alt="Paw Icon" className="w-20" />
            <h2 className="font-semibold text-xl text-center">
              Moving and organising supplies/tidying{" "}
            </h2>
            <p className="text-center">
              There's often a lot of food bags and supplies that need to be
              processed at the rescue. Timur also prepares (controlled) fires to
              keep the dogs warm at night, as the rescue is entirely outside, so
              help to prepare these is vital.{" "}
            </p>
          </div>
          <div className="fences gap-5 flex flex-col items-center col-span-3 lg:col-span-1">
            <p className="font-semibold border-2 border-ds-green p-2 rounded-2xl">
              Our current mission!
            </p>
            <img src="/img/house-icon.png" alt="House Icon" className="w-20" />
            <h2 className="font-semibold text-xl text-center">
              Building fences, dog houses and dedicated spaces for puppies and
              mothers.{" "}
            </h2>
            <p className="text-center">
              We are currently in need of external fences and dedicated nursery
              spaces for our puppies and their mothers. So if you're prepared to
              get stuck in with hammer, this will really help and save countless
              lives!{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
