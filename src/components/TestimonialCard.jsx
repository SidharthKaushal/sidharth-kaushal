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
        autoplay={{
          delay: 3000, // delay in ms between slides
          disableOnInteraction: false,
        }}
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
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {TESTIMONIALS.map((t) => (
          <SwiperSlide key={t.id}>
            {t.messages.map((message, index) => {
              const isMessageArray = Array.isArray(message.userMessage);

              return (
                <div
                  key={index}
                  className={`${
                    message.tag === "sender" ? "items-end" : "items-start"
                  }`}
                >
                  <div>{message.userName}</div>

                  {isMessageArray ? (
                    <div>
                      {message.userMessage.map((msg, msgIndex) => (
                        <div
                          key={msgIndex}
                          className={`${
                            message.tag === "sender" ? "sender" : "reciver"
                          }`}
                        >
                          {msg}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div>{message.userMessage}</div>
                  )}
                </div>
              );
            })}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
