import React from "react";
import { TESTIMONIALS } from "../data/testimonial";

export const TestimonialCard = () => {
  return (
    <>
      {TESTIMONIALS.map((t) => (
        <div key={t.id}>
          {t.messages.map((message, index) => {
            const isMessageArray = Array.isArray(message.userMessage);

            return (
              <div
                key={index}
                className={`${
                  message.tag === "sender" ? "items-end" : "items-start"
                }`}
              >
                <div className="">
                  {message.userName}
                </div>

                {isMessageArray ? (
                  <div className="">
                    {message.userMessage.map((msg, msgIndex) => (
                      <div
                        key={msgIndex}
                        className={`${
                          message.tag === "sender"
                            ? "bg-blue-500 text-white ml-auto"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {msg}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div
                    className={`${
                      message.tag === "sender"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {message.userMessage}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </>
  );
};
