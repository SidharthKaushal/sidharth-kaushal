import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "../hooks/use-outside-click";
import { EXPERIENCE } from "../data/experience";

export const ExperienceCard = ({ e }) => {
  // Destructure 'e' prop correctly
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.companyName}-${id}`} // Use companyName instead of title
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.companyName}-${id}`} // Use companyName for unique ID
              ref={ref}
              className="w-full max-w-[920px]  h-full md:h-fit md:max-h-[90%]  flex  bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.companyName}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.image} // Ensure this is correctly set in the active object
                  alt={active.companyName}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.companyName}-${id}`} // Use companyName instead of title
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.companyName} {/* Use companyName */}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.companyName}-${id}`} // Use companyName for unique ID
                    href={active.link}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    Learn More
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.highlights === "function"
                      ? active.highlights()
                      : active.highlights?.map((highlight, index) => (
                          <p key={index}>{highlight}</p>
                        ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* Map over the experience data correctly */}
      <ul className="flex flex-col gap-4">
      {EXPERIENCE.slice()
              .reverse()
              .map((card, i) => (
          <motion.div
            layoutId={`card-${card.companyName}-${id}`} // Use companyName for unique ID
            key={`card-${card.companyName}-${id}`} // Use companyName for unique ID
            onClick={() => setActive(card)} // Set active experience data
            className=" hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <li className="grid grid-cols-3 w-full justify-between items-center gap-4 py-5 border-b-1 border-gray-300 border-opacity-50">
              <div>
                <h3 className="text-xl">
                  {card.designation}, <span> {card.location}</span>
                </h3>
                <p className="text-secondary mt-2 flex items-center gap-2 relative before:content-[''] before:h-[4px] before:w-[4px] before:bg-secondary before:absolute before:rounded-full before:left-0 before:top-[7px] ps-3">
                  <span>{card.startDate}</span> - <span>{card.endDate}</span>
                </p>
              </div>
              <p className="text-left text-secondary text-sm leading-6 w-2/3">
                {card.description}
              </p>
              <div className="flex gap-3 items-center justify-end w-2/2">
                {card.tags.map((t, i) => (
                  <span
                    key={i}
                    className="text-sm text-primary/70 bg-primary/10 px-3 py-1 rounded-full border border-primary/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </li>
          </motion.div>
        ))}
      </ul>
    </>
  );
};

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
