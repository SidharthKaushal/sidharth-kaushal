import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, FreeMode, A11y } from "swiper/modules";
import { PORTFOLIODATA } from "../data/projects";

export const ProjectsSlider = () => {
  const ref = useRef(null);
  useEffect(() => {
    const wrapper = ref.current?.querySelector(".swiper-wrapper");
    if (wrapper) {
      Object.assign(wrapper.style, {
        transitionTimingFunction: "linear",
        WebkitTransitionTimingFunction: "linear",
        OTransitionTimingFunction: "linear",
      });
    }
  }, []);

  return (
    <Swiper
      ref={ref}
      className="my-20 [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
      modules={[Autoplay, FreeMode, A11y]}
      spaceBetween={30}
      grabCursor={true}
      a11y={false}
      freeMode={true}
      speed={7000}
      loop={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      simulateTouch={false}
      touchRatio={0}
      breakpoints={{
        0: { slidesPerView: 1, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 20 },
        1020: { slidesPerView: 3, spaceBetween: 30 },
      }}
    >
      {PORTFOLIODATA.map((el, i) => (
        <SwiperSlide key={i} >
          <ProjectSlideCard {...el} key={`${el.id} - ${el.title}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const ProjectSlideCard = (el) => {
  return (
    <div className="rounded-2xl overflow-hidden relative  after:content-[''] after:absolute after:h-full after:w-full after:top-0 after:left-0 after:bg-gradient-to-t after:from-black/70 after:to-black/0">
      <img src={el.bannerImage} alt={el.banneAlt} loading="eager"/>
      <div className="p-6 absolute bottom-0 left-0 w-full z-10">
        <h2 className="text-2xl font-semibold text-light mt-4">{el.title}</h2>
        <ul className="flex flex-wrap gap-3 mt-2 text-lg text-light">
          {el.tags.slice(0, 3).map((tag, index) => (
            <li key={index} className="border border-gray-300 px-6 py-2 rounded-full text-md">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
