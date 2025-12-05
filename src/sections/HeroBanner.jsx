import { LuPhone } from "react-icons/lu";
import { Link } from "react-router-dom";
import { LinkPreview } from "../components/ui/link-preview";
import { ProjectsSlider } from "../components/ProjectsSlider";
export const HeroBanner = () => {
  return (
    <section className="py-16 pt-30 bg-[url(./assets/images/banner-img.svg)] bg-no-repeat bg-[70%] bg-top bg-main">
      <div className="container">
        <div className="flex flex-col justify-between items-center text-center">
          <h2 className="text-light text-xl mb-3 ps-4 relative before:content-[''] before:h-[8px] before:w-[8px] before:bg-light before:absolute before:rounded-full before:left-0 before:top-[10px]">
            Crafting clean, functional, and modern web experiences.
          </h2>
          <h3 className="capitalize text-[90px] text-light font-semibold leading-26 max-w-7xl my-5">
            Hi, I’m Sidharth - Front End Web Developer
          </h3>
          <div className="leading-8 text-xl text-light-dark/50 w-3/4">
            To craft seamless, user-focused web experiences using cutting-edge
            front-end technologies, delivering innovative, responsive designs
            that enhance digital presence and user satisfaction. I aim to create
            visually stunning,{" "}
            <LinkPreview
              url="https://www.renton-eu.com/"
              className="font-bold text-light"
            >
              High-Performance Websites,
            </LinkPreview>{" "}
            blending creativity with expertise for accessibility and an
            exceptional journey across all devices.
          </div>
          {/* <Link
            to="#"
            className="group mt-10 text-main bg-light rounded-full px-10 py-5 text-md flex items-center gap-2 hover:bg-light-dark  transition duration-300"
          >
            <LuPhone className="transition-transform duration-300 group-hover:rotate-45 " />
            Contact Me
          </Link> */}
        </div>
        <ProjectsSlider />
      </div>
    </section>
  );
};
