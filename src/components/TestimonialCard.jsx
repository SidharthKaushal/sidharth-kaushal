import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { TESTIMONIALS } from "../data/testimonial";

export const TestimonialCard = () => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        loop={true}
        // autoplay={{
        //   delay: 3000, // delay in ms between slides
        //   disableOnInteraction: false,
        // }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {TESTIMONIALS.map((t) => (
          <SwiperSlide key={t.id}>
            <div className="bg-light rounded-2xl px-5 pb-7 pt-3 h-96 group hover:bg-main-light duration-300">
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
                              message.tag === "sender" && "group-hover:bg-[#fecfc0]"
                            }`}
                          >
                            {msg}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="bg-light-dark rounded-xl p-3 group-hover:bg-light ">
                        {message.userMessage}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
