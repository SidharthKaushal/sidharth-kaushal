import { cn } from "../lib/utils";
import { useEffect, useRef, useState } from "react";
import { TESTIMONIALS } from "../data/testimonial";
import { TestimonialItem } from "./TeestimonialItem";

export const TestimonialSlider = ({
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
        {TESTIMONIALS.map((t, index) => (
          <TestimonialItem
            key={index}
            testimonial={t}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
          />
        ))}
        {TESTIMONIALS.map((t, index) => (
          <TestimonialItem
            key={`${index}`}
            testimonial={t}
            index={index + TESTIMONIALS.length}
            hovered={hovered}
            setHovered={setHovered}
          />
        ))}
      </ul>
    </div>
  );
};
