import {
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
  FaInstagram,
} from "react-icons/fa6";
import { LinkPreview } from "../components/ui/link-preview";
export const Footer = () => {
  const socialIcons = [
    { name: "GitHub", url: "https://github.com/SidharthKaushal", icons: <FaGithub /> },
    { name: "LinkedIn", url: "https://in.linkedin.com/in/sidharth-kaushal-frontend-devloper", icons: <FaLinkedinIn /> },
    // { name: "Twitter", url: "", icons: <FaTwitter /> },
    // { name: "Instagram", url: "", icons: <FaInstagram /> },
  ];
  return (
    <section className="py-16 bg-main">
      <div className="container">
        <div className="border-b-1 pb-5 text-center ">
          <h2 className="font-bold text-light text-5xl relative">
            <a href="mailto:sidharthkaushal369@gmail.com">sidharthkaushal369@gmail.com</a>
          </h2>
          <p className="text-secondary mt-3 text-md md:max-w-xl m-auto">
            Let’s connect and craft digital experiences that are not only
            meaningful, but also modern, user-focused, and built to make a
            lasting impact.
          </p>
          <ul className="flex align-center justify-center gap-4 text-xl mt-5">
            {socialIcons.map((link) => (
              <SocialLinks {...link} />
            ))}
          </ul>
        </div>
        <CopyRight />
      </div>
    </section>
  );
};
export const SocialLinks = (link) => {
  return (
    <li key={link.name}>
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-light h-10 w-10 flex items-center justify-center rounded-md bg-hover hover:bg-light hover:text-main transition-all duration-300"
      >
        {link.icons}
      </a>
    </li>
  );
};

export const CopyRight = () => {
  return (
    <p className="text-center mt-5 mb-10 text-md">
      © 2025 Designed & Developed by{" "}
      <LinkPreview
        url="https://in.linkedin.com/in/sidharth-kaushal-frontend-devloper"
        className="font-bold text-light"
      >
        {" "}
        Sidharth Kaushal.
      </LinkPreview>{" "}
      All Rights Reserved.
    </p>
  );
};
