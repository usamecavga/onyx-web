"use client";

import { Button, Checkbox, Label, Select, TextInput } from "flowbite-react";

export default function Portfolio() {
  const theme_select = {
    field: {
      select: {
        colors: {
          white: "bg-white border-gray-300 text-black text-sm",
        },
      },
    },
  };
  const theme_input = {
    field: {
      input: {
        colors: {
          white:
            "bg-white border-gray-300 rounded w-full border-1 text-black text-sm",
        },
        base: "rounded-none",
      },
    },
  };

  const theme_label = {
    root: {
      base: "text-black font-title text-lg",
    },
  };

  return (
    <main className="flex flex-col items-center bg-white min-h-screen">
      <section className="h-24 bg-black w-full">
        <hr className="w-[1px] h-[1px]" />
      </section>
      <section className="container">
        <div className="">
          <h2 className="text-center font-title text-5xl md:mt-32 mt-16 text-black">
            Contact
          </h2>
          <p className="text-center mt-12 font-light text-black">
            123 Contracting L.L.C – O.P.C
          </p>
          <p className="text-center mt-2 font-light text-black">
            Al Uraibi st , Al Nakheel
          </p>
          <p className="text-center mt-2 font-light text-black">RAK, UAE</p>
          <p className="text-center mt-2 font-light text-black">
            admin@123contracting.ae
          </p>
          <p className="text-center mt-2 font-light text-black">
            +971 7 222 3122
          </p>
        </div>
        <div className="mt-12">
          <form className="md:grid md:grid-cols-2 gap-y-8 gap-x-8 px-4">
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="inquiry-category"
                  value="Inquiry Category"
                  theme={theme_label}
                />
              </div>
              <Select
                id="inquiry-category"
                color={"white"}
                required
                theme={theme_select}
              >
                <option>Service </option>
                <option>Human Resources</option>
                <option>Investor Relations</option>
                <option>General Inquries</option>
              </Select>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="company" value="Company" theme={theme_label} />
              </div>
              <TextInput
                id="company"
                required
                theme={theme_input}
                color={"white"}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="first-name"
                  value="First Name"
                  theme={theme_label}
                />
              </div>
              <TextInput
                id="first-name"
                required
                theme={theme_input}
                color={"white"}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="last-name"
                  value="Last Name"
                  theme={theme_label}
                />
              </div>
              <TextInput
                id="last-name"
                required
                theme={theme_input}
                color={"white"}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Email" theme={theme_label} />
              </div>
              <TextInput
                id="email"
                required
                theme={theme_input}
                color={"white"}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="phone" value="Phone" theme={theme_label} />
              </div>
              <TextInput
                id="phone"
                required
                theme={theme_input}
                color={"white"}
              />
            </div>
            <div className="col-span-2">
              <div className="mb-2 block">
                <Label htmlFor="message" value="Message" theme={theme_label} />
              </div>
              <textarea
                id="message"
                required
                className="w-full h-32 bg-white border-gray-300 text-black text-sm"
              ></textarea>
            </div>
            <div className="col-span-2 text-center">
              <a
                type="submit"
                className="col-span-2 w-48 bg-white text-black text-center hover:underline font-title text-3xl cursor-pointer"
              >
                Submit
              </a>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
