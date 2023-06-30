"use client"
import { useState } from "react"
import s from "../../styles/main.module.scss"

const DataAccordion = [
  {
    id: 1,
    title: "What is included in the cost of web development?",
    body: `Answer: The cost of web development includes the design and development of the website, testing, search engine optimization (SEO), and basic support after launch. Additional services such as advanced SEO, content management, and social media promotion are typically billed separately.`,
  },
  {
    id: 2,
    title: "How long will it take to develop my website?",
    body: `Answer: The timeline for website development can vary depending on the complexity of the project. Typically, developing a basic website for a small business takes between 4 to 6 weeks, including time for project discussion, design, development, testing, and launch.`,
  },
  {
    id: 3,
    title: "Can I update my website myself after it's launched?",
    body: `Answer: Yes, we provide a content management system that allows you to easily add, edit, and delete content on your website. We will also provide training on how to use this system.`,
  },
  {
    id: 4,
    title: "What type of support do you provide after the website launch?",
    body: `Answer: We provide basic technical support for 30 days after the launch of your website at no additional cost. This includes fixing any bugs that may arise and assistance in using the content management system. Additional support and maintenance are available for an extra fee.`,
  },
  {
    id: 5,
    title: "Do you have a portfolio of work that I can view?",
    body: `Answer: Yes, you can view our previous work in the "Portfolio" section of our website. We proudly showcase the variety of projects that we have executed for our clients.`,
  },
  {
    id: 6,
    title: "Do I need to provide the content for my website?",
    body: `Answer: While we highly encourage clients to provide their own content as it adds authenticity, we also have content creation services available if needed. This includes writing, editing, and sourcing images or videos.`,
  },
  {
    id: 7,
    title: "Can you help with improving the visibility of my website on search engines?",
    body: `Answer: Yes, we provide search engine optimization (SEO) services to improve your website's visibility on search engines like Google. This includes keyword research, on-page optimization, link building, and more.`,
  },
  {
    id: 8,
    title: "Do you provide web hosting services?",
    body: `Answer: While we primarily focus on web design and development, we do offer hosting services as an additional option. We can also work with your preferred hosting provider if you already have one.`,
  },
  {
    id: 9,
    title: "What is a responsive design and will my website be responsive?",
    body: `Answer: Responsive design ensures your website adapts to the screen size and device it is being viewed on, providing a great user experience whether on a desktop, tablet, or smartphone. Yes, all our websites are designed to be responsive.`,
  },
  {
    id: 10,
    title: "What happens if my website encounters an issue or goes down?",
    body: `Answer: We provide ongoing support packages that include website monitoring and immediate response to any issues. While website downtimes are rare, we understand the importance of a quick response and will prioritize resolving any issues that arise.`,
  },
]

const FAQ = () => {
  const [activeAccordion, setActiveAccordion] = useState<any>(null)

  return (
    <div className="grid px-[2%] md:grid-cols-2">
      <div className="container mt-[10%] mb-[20%] lg:mb-20">
        {DataAccordion?.map((accord) => {
          return (
            <div
              key={accord.id}
              className="hs-accordion-group text-center mx-[10%]  "
            >
              <div
                className="hs-accordion "
                id={`hs-basic-heading-${accord.id}`}
              >
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-blue-600
                group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left
            text-black transition hover:text-gray-500 
            dark:hs-accordion-active:text-black
            dark:text-white dark:hover:text-gray-400"
                  aria-controls={`hs-basic-collapse-${accord.id}`}
                  onClick={() =>
                    setActiveAccordion(
                      accord.id === activeAccordion ? null : accord.id,
                    )
                  }
                >
                  <ElementSvg />
                  {accord.title}
                </button>
                <div
                  id={`hs-basic-collapse-${accord.id}`}
                  className={`${
                    activeAccordion === accord.id ? "" : "hidden"
                  } hs-accordion-content  overflow-hidden transition-[height] duration-300`}
                  aria-labelledby={`hs-basic-heading-${accord.id}`}
                >
                  <div>
                    <p
                      className="dark:text-gray-100 text-left"
                      dangerouslySetInnerHTML={{ __html: accord.body }}
                    ></p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className={`${s.answerImg}   `} />
    </div>
  )
}

export default FAQ

const ElementSvg = () => {
  return (
    <>
      <svg
        className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.62421 7.86L13.6242 7.85999"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M8.12421 13.36V2.35999"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <svg
        className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.62421 7.86L13.6242 7.85999"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </>
  )
}
