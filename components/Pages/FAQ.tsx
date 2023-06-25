"use client"
import { useState } from "react"
import s from "../../styles/main.module.scss"

const DataAccordion = [
  {
    id: 1,
    title: "FAQ:",
    body: `<em>text.</em> It is hidden by default, until the collapse
  plugin adds the appropriate classes that we use to style each
  element. These classes control the overall appearance, as well
  as the showing and hiding via CSS transitions.`,
  },
  {
    id: 2,
    title: "Product Descriptions: ",
    body: `<em>text.</em> It is hidden by default, until the collapse
  plugin adds the appropriate classes that we use to style each
  element. These classes control the overall appearance, as well
  as the showing and hiding via CSS transitions.`,
  },
  {
    id: 3,
    title: "Workflow:",
    body: `<em>text.</em> It is hidden by default, until the collapse
  plugin adds the appropriate classes that we use to style each
  element. These classes control the overall appearance, as well
  as the showing and hiding via CSS transitions.`,
  },
  {
    id: 4,
    title: "Terms and Conditions: ",
    body: `<em>text.</em> It is hidden by default, until the collapse
  plugin adds the appropriate classes that we use to style each
  element. These classes control the overall appearance, as well
  as the showing and hiding via CSS transitions.`,
  },
  {
    id: 5,
    title: "Accordion 5",
    body: `<em>text.</em> It is hidden by default, until the collapse
  plugin adds the appropriate classes that we use to style each
  element. These classes control the overall appearance, as well
  as the showing and hiding via CSS transitions.`,
  },
  {
    id: 6,
    title: "Accordion 6",
    body: `<em>text.</em> It is hidden by default, until the collapse
  plugin adds the appropriate classes that we use to style each
  element. These classes control the overall appearance, as well
  as the showing and hiding via CSS transitions.`,
  },
  {
    id: 7,
    title: "Accordion 7",
    body: `<em>text.</em> It is hidden by default, until the collapse
  plugin adds the appropriate classes that we use to style each
  element. These classes control the overall appearance, as well
  as the showing and hiding via CSS transitions.`,
  },
  {
    id: 8,
    title: "Accordion 8",
    body: `<em>text.</em> It is hidden by default, until the collapse
  plugin adds the appropriate classes that we use to style each
  element. These classes control the overall appearance, as well
  as the showing and hiding via CSS transitions.`,
  },
]

const FAQ = () => {
  const [activeAccordion, setActiveAccordion] = useState<any>(null)

  return (
    <div className="grid px-[2%] md:grid-cols-2 dark:bg-gray-900 bg-white">
      <div
        className={`${s.answerWrapper} mt-[10%] mb-[20%] sm:order-2 md:order-1 `}
      >
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
                      className="text-gray-800 max-w-[30rem] dark:text-white"
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
