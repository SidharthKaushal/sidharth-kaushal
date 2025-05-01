import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { TESTIMONIALS } from "../data/testimonial";

export const TestimonialCard = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
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
