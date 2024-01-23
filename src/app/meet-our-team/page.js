import React from "react";

export default function meetOurTeam() {
  return (
    <>
      <div className="min-h-screen bg-ds-light-green grid grid-cols-2 justify-center items-center p-5 md:gap-20">
        <h1 className="col-span-2 md:col-span-1 font-extralight text-6xl md:p-20">
          Meet Our Rescue Leaders
          <span className="text-lg block">(work in progress)</span>
        </h1>
        <div className="team flex flex-col flex-wrap gap-5 mt-5 p-10">
          <div className="team-member flex items-center gap-5">
            <img
              src="/img/paw-icon.png"
              alt="team member photo"
              className="w-20 rounded-full"
            />
            <h2 className="font-semibold text-lg">Timur</h2>
          </div>
          <div className="team-member flex items-center gap-3">
            <img
              src="/img/paw-icon.png"
              alt="team member photo"
              className="w-20 rounded-full"
            />
            <h2 className="font-semibold text-lg">Meltem</h2>
          </div>
          <div className="team-member flex items-center gap-3">
            <img
              src="/img/paw-icon.png"
              alt="team member photo"
              className="w-20 rounded-full"
            />
            <h2 className="font-semibold text-lg">Selami</h2>
          </div>
          <div className="team-member flex items-center gap-3">
            <img
              src="/img/paw-icon.png"
              alt="team member photo"
              className="w-20 rounded-full"
            />
            <h2 className="font-semibold text-lg">Hülya</h2>
          </div>
          <div className="team-member flex items-center gap-3">
            <img
              src="/img/paw-icon.png"
              alt="team member photo"
              className="w-20 rounded-full"
            />
            <h2 className="font-semibold text-lg">Meltem C</h2>
          </div>
          <div className="team-member flex items-center gap-3">
            <img
              src="/img/paw-icon.png"
              alt="team member photo"
              className="w-20 rounded-full"
            />
            <h2 className="font-semibold text-lg">Martha</h2>
          </div>
        </div>
      </div>
    </>
  );
}
