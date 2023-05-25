import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white fixed top-0 w-full opacity-80 font-bold">
      <div className="relative z-20 border-b bg-white">
        <div className="px-6 md:px-12 lg:container lg:mx-auto lg:px-6 lg:py-4">
          <div className="flex">
            <div className="relative z-20"></div>

            <div className="flex items-center justify-end border-l lg:border-l-0">
              <input
                type="checkbox"
                name="hamburger"
                id="hamburger"
                className="peer hidden"
                hidden
              ></input>
              <label
                htmlFor="hamburger"
                className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
              >
                <div
                  aria-hidden="true"
                  className="m-auto h-0.5 w-6 rounded bg-ds-green transition duration-300"
                ></div>
                <div
                  aria-hidden="true"
                  className="m-auto mt-2 h-0.5 w-6 rounded bg-ds-green transition duration-300"
                ></div>
              </label>

              <div className="peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] bg-white border-r shadow-xl transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0">
                <div className="flex flex-col h-full justify-between lg:items-center lg:flex-row">
                  <ul className="px-6 pt-32 space-y-8 md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0">
                    <li>
                      <Link
                        href="/"
                        className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:bg-ds-light-green"
                      >
                        <span className="relative text-ds-green">Home</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/volunteer"
                        className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-ds-light-green before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
                      >
                        <span className="relative group-hover:text-ds-green">
                          Volunteer
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/donate"
                        className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-ds-light-green before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
                      >
                        <span className="relative group-hover:text-ds-green">
                          Donate
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/meet-our-team"
                        className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-ds-light-green before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
                      >
                        <span className="relative group-hover:text-ds-green">
                          Meet our team
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about"
                        className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-ds-light-green before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
                      >
                        <span className="relative group-hover:text-ds-green">
                          About
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
