import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { TESTIMONIALS } from "../data/testimonial";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const TestimonialCard = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Swiper
      navigation={true}
      modules={[Navigation, Autoplay]}
      className="mySwiper"
      loop={true}
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 10 },
        640: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 20 },
        1280: { slidesPerView: 4, spaceBetween: 0 },
      }}
    >
      {TESTIMONIALS.map((t, idx) => (
        <SwiperSlide key={t.id} className="py-4">
          <div
            className="relative group p-3 h-96"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 bg-neutral-200 dark:bg-slate-800/[0.8] rounded-2xl z-0"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                />
              )}
            </AnimatePresence>

            <div className="relative z-10 bg-light rounded-2xl h-full group-hover:bg-main-light duration-300 p-4 overflow-hidden">
              {t.messages.map((message, index) => {
                const isMessageArray = Array.isArray(message.userMessage);
                return (
                  <div
                    key={index}
                    className={`${
                      message.tag === "reciver" ? "text-end" : "text-start"
                    }`}
                  >
                    <p className="mb-2 mt-4 capitalize font-primary">
                      {message.userName}
                    </p>
                    {isMessageArray ? (
                      <div className="flex flex-col gap-3 items-end">
                        {message.userMessage.map((msg, msgIndex) => (
                          <div
                            key={msgIndex}
                            className={`bg-light-dark rounded-xl p-3 duration-300 ${
                              message.tag === "sender" && "group-hover:bg-[#ffb8a3] group-hover:text-light"
                            }`}
                          >
                            {msg}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="bg-light-dark rounded-xl p-3 group-hover:bg-light duration-300">
                        {message.userMessage}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
