"use client"
import { useState } from "react"
import CustomBut from "../Utils/CustomBut"

const AppliMap = () => {
  // const usersColRef = collection(db, "users")
  const [name, setName] = useState<string>("")
  const [company, setCompany] = useState<string>("")
  const [number, setNumber] = useState<any | null>(0)
  const [email, setEmail] = useState<string>("")
  const [message, setMessage] = useState<string>("")

  const add = async (e: any) => {
    e.preventDefault()
    
    setName("")
    setCompany("")
    setNumber(null)
    setEmail("")
    setMessage("")
  }
  return (
    <div className="relative z-4">
      <section id="application" className="text-gray-600 body-font ">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d20588.168242971704!2d-97.094436!3d49.8326668!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea76508470dde5%3A0x5c70e599990bc52e!2s206%20Sterling%20Ave%2C%20Winnipeg%2C%20MB%20R2M%202R7!5e0!3m2!1sru!2sca!4v1668665016949!5m2!1sru!2sca"
          ></iframe>
        </div>
        <div className="container min-w-[18rem] sm:px-0 px-8 py-4 mx-auto flex ">
          <form
            onSubmit={add}
            className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto  mt-10 sm:mt-0 relative z-10 shadow-md"
          >
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Fll out the form and we will contact you
            </h2>

            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">Name *</label>
              <input
                type="name"
                value={name}
                onInput={(e: any) => setName(e.currentTarget.value)}
                required
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <label className="leading-7 text-sm text-gray-600">Company</label>
              <input
                type="name"
                value={company}
                onInput={(e: any) => setCompany(e.currentTarget.value)}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <label className="leading-7 text-sm text-gray-600">
                Number *
              </label>
              <input
                type="tel"
                required
                value={number}
                onInput={(e: any) => setNumber(e.currentTarget.value)}
                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <label className="leading-7 text-sm text-gray-600">Email *</label>
              <input
                type="email"
                required
                value={email}
                onInput={(e: any) => setEmail(e.currentTarget.value)}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative ">
              <label className="leading-7 text-sm text-gray-600">Message</label>
              <textarea
                value={message}
                onInput={(e: any) => setMessage(e.currentTarget.value)}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="inline-block">
              <CustomBut name="Connect us" />
            </button>
            <p className="text-xs text-gray-500 mt-3">
              We will contact you shortly
            </p>
          </form>
        </div>
      </section>
    </div>
  )
}

export default AppliMap
