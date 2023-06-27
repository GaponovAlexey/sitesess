"use client"

import { useState } from "react"
import CustomBut from "../../Utils/CustomBut"
import GoogleMapComponent from "./GoogleMap"

const ApplyMap = () => {
  // const usersColRef = collection(db, "users")
  const [name, setName] = useState<string>("")
  const [company, setCompany] = useState<string>("")
  const [number, setNumber] = useState<any | null>(null)
  const [email, setEmail] = useState<string>("")
  const [message, setMessage] = useState<string>("")

  const add = async (e: any) => {
    e.preventDefault()
    // Send data
    setName("")
    setCompany("")
    setNumber(null)
    setEmail("")
    setMessage("")
  }

  return (
    <div className="relative dark:text-gray-900 z-4">
      <section id="application">
        <GoogleMapComponent />
        <div className="absolute top-0 left-0 container px-4 md:px-12 left-19 py-4 ">
          <form
            className="lg:w-1/3 md:w-1/2 bg-white     rounded-lg p-8 flex flex-col md:ml-auto  mt-20 sm:mt-0 relative z-10 shadow-md"
            onSubmit={add}
          >
            <h2 className="text-lg mb-1 font-medium title-font text-center">
              Complete the form, we&apos;ll be in touch.
            </h2>

            <div className="relative mb-4 ">
              <label className="leading-7 text-sm  ">Name</label>
              <input
                type="name"
                value={name}
                onInput={(e: any) => setName(e.currentTarget.value)}
                required
                className="w-full bg-white dark:bg-[#9E9E9E] rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <label className="leading-7 text-sm ">you need</label>
              <input
                type="name"
                value={company}
                onInput={(e: any) => setCompany(e.currentTarget.value)}
                className="w-full dark:bg-[#9E9E9E] bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
             
              <label className="leading-7 text-sm ">Number (optional)</label>
              <input
                type="tel"
                value={number}
                onInput={(e: any) => setNumber(e.currentTarget.value)}
                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                className="w-full bg-white dark:bg-[#9E9E9E] rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200  outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <label className="leading-7 text-sm ">Email *</label>
              <input
                type="email"
                required
                value={email}
                onInput={(e: any) => setEmail(e.currentTarget.value)}
                className="w-full bg-white dark:bg-[#9E9E9E] rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative ">
              <label className="leading-7 text-sm text-gray-600">Message</label>
              <textarea
                value={message}
                onInput={(e: any) => setMessage(e.currentTarget.value)}
                className="w-full bg-white dark:bg-[#9E9E9E] rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="inline-block">
              <CustomBut name="Connect us" />
            </button>
            <p className="text-xs text-center  mt-3">
              We will contact you shortly
            </p>
          </form>
        </div>
      </section>
    </div>
  )
}

export default ApplyMap
