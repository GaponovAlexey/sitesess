import Image from "next/image"

const Step = () => {
  return (
    <div>
      <section className="text-gray-400 pb-32  px-[2%] md:px-0  bg-[#FFFAFA] lg:pt-10  md:pb-20  dark:bg-gray-900 ">
        <div className="container mx-auto pt-10 flex flex-wrap ">
          <h1 className="text-center text-2xl pb-20 text-black">
            Our app design incorporates both user experience (UX) and user
            interface (UI). From color scheme to font selection to the types of
            widgets and buttons, we cover it all.
          </h1>
          <div className="flex justify-center flex-wrap ">
            <div className=" dark:text-white text-black">
              <div className="flex relative pb-12 ">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm   mb-1 tracking-wider">
                    STEP 1
                  </h2>
                  <h2 className="font-medium title-font text-sm   mb-1 tracking-wider">
                    DEFINE
                  </h2>
                  <p className="leading-relaxed">
                    At our company, we start by thoroughly understanding your
                    needs. We conduct interviews, surveys, and utilize our
                    extensive market research to gain a deep understanding of
                    the specific problem that your website needs to solve. This
                    user-centered approach allows us to align our goals with
                    yours and target the right audience effectively.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-600 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm  mb-1 tracking-wider">
                    STEP 2
                  </h2>
                  <h2 className="font-medium title-font text-sm  mb-1 tracking-wider">
                    IDEATE
                  </h2>
                  <p className="leading-relaxed">
                    Once we&apos;ve defined the problem, our creative team
                    starts brainstorming potential solutions. This process is
                    about thinking outside the box and generating a wide range
                    of ideas. We use various techniques, like mind mapping and
                    sketching, to ensure we explore all possible angles and
                    innovative solutions.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm  mb-1 tracking-wider">
                    STEP 3
                  </h2>
                  <h2 className="font-medium title-font text-sm  mb-1 tracking-wider">
                    DESIGN
                  </h2>
                  <p className="leading-relaxed">
                    After ideating potential solutions, our design team gets to
                    work transforming these ideas into tangible designs. We
                    consider all aspects of user interface (UI), user experience
                    (UX), color schemes, typography, and imagery to create
                    designs that not only look good but also provide an
                    intuitive and seamless experience for your users.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-700 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm  mb-1 tracking-wider">
                    STEP 4
                  </h2>
                  <h2 className="font-medium title-font text-sm  mb-1 tracking-wider">
                    PROTOTYPE
                  </h2>
                  <p className="leading-relaxed">
                    Next, we build a working prototype of your website. This is
                    a crucial step where the ideas and designs come to life. Our
                    prototypes are interactive, allowing you to see and feel
                    what your final website will look like. This tangible model
                    enables us to gather feedback and make necessary adjustments
                    before finalizing the design.
                  </p>
                </div>
              </div>
              <div className="flex relative">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-700 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm  mb-1 tracking-wider">
                    FINISH
                  </h2>
                  <h2 className="font-medium title-font text-sm  mb-1 tracking-wider">
                    TESTING
                  </h2>
                  <p className="leading-relaxed">
                    Lastly, we conduct extensive testing on the prototype to
                    ensure it performs as expected. This stage involves
                    usability testing, A/B testing, and gathering user feedback
                    to identify any potential issues or areas for improvement.
                    We&apos;re committed to refining our work until it meets
                    both our standards and your satisfaction
                  </p>
                </div>
              </div>
            </div>
            {/* <Image
              height={1200}
              width={1200}
              // className="object-contain flex-row justify-center h-[40%] w-[40%] md:h-[70%] md:w-[60%]"
              className="object-contain md:hide lg:visible flex-row justify-center h-[40%] w-[40%] md:h-[70%] "
              src="/assets/step.png"
              alt="step"
            /> */}
          </div>
            <div className="pt-10 text-black text-xl text-center flex justify-center flex-wrap" >
              At our company, we believe in a collaborative and iterative
              approach. We&apos;re dedicated to improving and refining each
              stage of the process as needed to deliver a final product that
              truly meets your needs and exceeds your expectations.
            </div>
        </div>
      </section>
    </div>
  )
}

export default Step
