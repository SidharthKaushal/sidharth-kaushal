import { cn } from "../lib/utils";
import { useEffect, useRef, useState } from "react";
import { TESTIMONIALS } from "../data/testimonial";

export const TestimonialCard = ({
  direction = "right",
  speed = "normal",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const [hovered, setHovered] = useState(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [direction, speed]);

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };
  const renderTestimonials = () =>
    TESTIMONIALS.map((t, index) => (
      <li
        key={`testimonial-${index}`}
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "rounded-2xl px-5 pb-7 pt-3 h-[430px] w-96 relative transition-all duration-300 bg-light",
          hovered !== null && hovered !== index && "blur-[3px] scale-[0.95]"
        )}
     
      >
        {t.messages.map((message, msgIndex) => {
          const isMessageArray = Array.isArray(message.userMessage);
          const isReceiver = message.tag === "reciver";

          return (
            <div
              key={msgIndex}
              className={cn(
                "w-full flex flex-col",
                isReceiver ? "items-end text-end" : "items-start text-start"
              )}
            >
              <p className="mb-2 mt-4 capitalize font-primary">
                {message.userName}
              </p>

              {isMessageArray ? (
                <div
                  className={cn(
                    "flex flex-col gap-3",
                    isReceiver ? "items-end" : "items-start"
                  )}
                >
                  {message.userMessage.map((msg, msgIdx) => {
                    const isLast = msgIdx === message.userMessage.length - 1;
                    return (
                      <div
                        key={msgIdx}
                        className={cn(
                          "rounded-xl p-3 duration-300 max-w-[80%] bg-light-dark relative",
                          isLast && (isReceiver ? "chat-left" : "chat-right")
                        )}
                      >
                        {msg}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div
                  className={cn(
                    "rounded-xl p-3 duration-300 max-w-[80%] bg-light-dark relative",
                    isReceiver ? "chat-left" : "chat-right"
                  )}
                >
                  {message.userMessage}
                </div>
              )}
            </div>
          );
        })}
      </li>
    ));

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {renderTestimonials()}
        {renderTestimonials()}
      </ul>
    </div>
  );
};
