import React from "react";
import Link from "next/link";

export default function support() {
  return (
    <>
      <div className="bg-ds-green min-h-screen grid grid-cols-2 p-20 gap-20 md:gap-0">
        <div className="grid gap-5 grid-cols-2 text col-span-2 md:col-span-1 text-white">
          <h1 className="col-span-2 lg:col-span-1 text-5xl mt-10">
            How You Can Help
          </h1>
          <div className="col-span-2 grid gap-5 text-lg font-light md:pe-20">
            <p>
              Help protect precious dogs in our rescue sanctuary by donating,
              volunteering or becoming and patron. Without you support our work
              is simply not possible.
            </p>
            <p>
              Your support will ensure hundreds of dogs' health, safety and
              happiness whilst encouraging adoptions through improving the
              rescue.
            </p>
            <p>
              If you are unable to donate, volunteer or join, please share our
              mission to make a difference. Join us in providing a safe haven
              for these dogs and ensuring their journey to safety and happiness.
            </p>
          </div>
        </div>
        <div className="links col-span-2 md:col-span-1 text-ds-light-green flex flex-col justify-center md:ms-20 gap-20">
          <a
            href="https://www.gofundme.com/f/protect-turkish-strays-building-secure-fences"
            target="_blank"
            className="text-4xl"
          >
            → Donate
          </a>
          <Link
            href="/volunteer/volunteer-form"
            target="_blank"
            className="text-4xl"
          >
            → Volunteer Application
          </Link>
          <p className="text-4xl">→ Join (details coming soon!)</p>
          <a
            href="https://www.instagram.com/defencelesssouls/"
            target="_blank"
            className="text-4xl"
          >
            → Share
          </a>
        </div>
      </div>
    </>
  );
}
