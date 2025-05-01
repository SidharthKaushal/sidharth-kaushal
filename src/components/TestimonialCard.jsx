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
                            ? "sender"
                            : "reciver"
                        }`}
                      >
                        {msg}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div
                    // className={}
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
