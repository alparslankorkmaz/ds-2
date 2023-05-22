"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function form() {
  const [state, handleSubmit] = useForm(process.env.formKey);
  if (state.succeeded) {
    return (
      <>
        <div
          id="volunteer-form"
          className="py-20 bg-gradient-to-br from-ds-purple to-ds-light-green font-semibold"
        >
          <h3 className="shadow-xl py-5 uppercase text-5xl lg:text-7xl font-bold text-center tracking-wide">
            volunteer form
          </h3>
          <div className="doodle flex justify-center">
            <img
              src="/img/doodle.png"
              alt="bone doodle"
              className="w-32 mt-7"
            />
          </div>

          <div className="min-h-screen">
            <p className="text-3xl lg:text-5xl tracking-wide text-center font-bold uppercase bg-green-300 p-5 rounded-xl text-white my-20 leading-loose">
              application sent succesfully! ✅ 🐶
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <div
      id="volunteer-form"
      className="py-20 bg-gradient-to-br from-ds-purple to-ds-light-green font-semibold"
    >
      <h3 className="shadow-xl py-5 text-5xl lg:text-7xl font-bold text-center tracking-wide">
        Volunteer Form
      </h3>
      <div className="doodle flex justify-center">
        <img src="/img/doodle.png" alt="doodle" className="w-32 mt-7" />
      </div>

      <div className="form-container grid lg:grid-cols-6 lg:my-20 mx-6 lg:mx-0">
        <div className="col-span-4 col-start-2">
          <form onSubmit={handleSubmit} className="flex flex-col" method="POST">
            <div className="grid lg:grid-cols-12 gap-3">
              <div className="col-span-6">
                <label htmlFor="name" className="text-xl">
                  <p className="py-5 text-base">First and last name</p>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="p-4  rounded-xl border w-full text-xl"
                  required
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div className="col-span-6">
                <label htmlFor="age" className="text-xl">
                  <p className="py-5 text-base">Age</p>
                </label>
                <input
                  type="text"
                  name="message"
                  id="age"
                  className="p-4  rounded-xl border w-full text-xl"
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="msg"
                  errors={state.errors}
                />
              </div>
            </div>
            <div className="grid lg:grid-cols-12 gap-3">
              <div className="col-span-6">
                <label htmlFor="email" className="text-xl">
                  <p className="py-5 text-base">Email Address</p>
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="p-4  rounded-xl border w-full text-xl"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="col-span-6">
                <label htmlFor="phone" className="text-xl">
                  <p className="py-5 text-base">Contact Number</p>
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="p-4  rounded-xl border w-full text-xl"
                  required
                />
                <ValidationError
                  prefix="Phone"
                  field="phone"
                  errors={state.errors}
                />
              </div>
            </div>
            <p className="py-5 text-2xl">
              Details -{" "}
              <span className="font-bold">
                {" "}
                Answer the questions below, please 🐶
              </span>
            </p>

            <label htmlFor="message" className="text-xl">
              <p className="py-5 text-base">Will you need accommodation?</p>
            </label>
            <textarea
              id="message"
              name="message"
              className="p-4  rounded-xl border w-full text-xl"
              rows={2}
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <label htmlFor="message" className="text-xl">
              <p className="py-5 text-base">
                Do you have any medical conditions? If yes, please specify.
              </p>
            </label>
            <textarea
              id="message"
              name="message"
              className="p-4  rounded-xl border w-full text-xl"
              rows={2}
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <label htmlFor="message" className="text-xl">
              <p className="py-5 text-base">Occupation </p>
            </label>
            <textarea
              id="message"
              name="message"
              className="p-4  rounded-xl border w-full text-xl"
              rows={2}
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <label htmlFor="message" className="text-xl">
              <p className="py-5 text-base">
                We need help this September when we enclose the sanctuary with
                fences. Are you available during this month? If so, tell us
                exactly when. (DD/MM/YYYY) Other availability welcome
              </p>
            </label>
            <textarea
              id="message"
              name="message"
              className="p-4  rounded-xl border w-full text-xl"
              rows={2}
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <label htmlFor="message" className="text-xl">
              <p className="py-5 text-base">
                Please tell us about any experience you have with dogs, please
                specify breeds and durations. If you do not have any experience
                but are passionate about volunteering with us, this is also
                fine!
              </p>
            </label>
            <textarea
              id="message"
              name="message"
              className="p-4  rounded-xl border w-full text-xl"
              rows={2}
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <label htmlFor="message" className="text-xl">
              <p className="py-5 text-base">
                Let us know <i> why </i> you would like to volunteer with
                Defenceless Souls
              </p>
            </label>
            <textarea
              id="message"
              name="message"
              className="p-4  rounded-xl border w-full text-xl"
              rows={2}
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <p className="text-xl font-bold mt-10 border-2 bg-slate-100 border-yellow-400 p-7 rounded-lg">
              We would like to highlight that you will be fully responsible for
              any accidents or medical emergencies that may occur during your
              time volunteering with Defenceless Souls Dog Rescue. So we need
              you to confirm you are happy with this. <br /> <br />{" "}
              <i className="font-normal">
                {" "}
                I hereby agree to take full responsibility of all and any
                accidents or medical emergencies that occur at Defenceless Souls
                Dog Rescue (Savunmasiz Canlar).
              </i>
            </p>
            <div className="flex justify-center items-center">
              <label htmlFor="waiver" className="text-3xl font-bold my-5">
                Confirm
              </label>
              <input
                type="checkbox"
                className=" mx-10 p-4 bg-green-100 border-green-300 text-green-500 focus:ring-green-200"
                name="_optin"
                id="_optin"
                required
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={state.submitting}
                className="p-6 my-6 max-h-3 text-3xl w-40 tracking-wider rounded-md bg-ds-green uppercase text-white font-semibold flex flex-col items-center justify-center"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
