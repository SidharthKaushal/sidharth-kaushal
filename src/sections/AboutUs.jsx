import aboutImg from "../assets/images/about-img.jpg";
export const AboutUs = () => {
  return (
    <section
      className="py-28 -mt-20 bg-ternary rounded-t-[70px] rounded-r-[70px]"
      id="aboutme"
    >
      <div className="container">
        <div class="grid grid-cols-2 md:gap-10 items-start">
          <div className="sticky top-20">
            <h2 className="text-black text-lg mb-3 ps-4 relative before:content-[''] before:h-[8px] before:w-[8px] before:bg-main before:absolute before:rounded-full before:left-0 before:top-[10px]">
              About Me
            </h2>
            <h3 className="capitalize text-5xl leading-14 text-black">
              My Professional Identity
            </h3>
            <p className="leading-8 text-lg mt-4">
              I’m <strong> Sidharth Kaushal </strong>, a passionate{" "}
              <strong> Front-End Developer </strong>
              dedicated to building clean, responsive, and user-focused
              websites. With expertise in React.js, JavaScript, and modern UI
              frameworks, I blend creativity with technical precision to craft
              digital experiences that are engaging and accessible. My mission
              is to deliver high-performance solutions that elevate brand
              presence and create lasting value across all devices.
            </p>
          </div>
          <AboutData>
            <AboutImage />
          </AboutData>
        </div>
      </div>
    </section>
  );
};
const AboutData = ({ children }) => {
  return (
    <div className="flex flex-col gap-6 md:gap-8  md:max-w-xl ms-auto">
      {children}
    </div>
  );
};

export const AboutImage = () => {
  return (
    <img
      src={aboutImg}
      alt="Sidharth Kaushal - Frontend Developer"
      className="w-full h-auto rounded-2xl shadow-lg"
    />
  );
};
