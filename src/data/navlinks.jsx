import Favicon from "/home-logo.png";
import { LuUser, LuFileDown } from "react-icons/lu";
import { PiSuitcase, PiGraduationCap, PiBrainLight } from "react-icons/pi";
import { IoGridOutline } from "react-icons/io5";

export const LINKS = [
  {
    title: "About Me",
    icon: (
      <LuUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#aboutme",
  },
  {
    title: "Experience",
    icon: (
      <PiSuitcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#experience",
  },
  {
    title: "Education",
    icon: (
      <PiGraduationCap className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#education",
  },
  {
    title: "Home",
    icon: <img src={Favicon} width={60} height={60} alt="Aceternity Logo" />,
    href: "/",
  },
  {
    title: "Skills",
    icon: (
      <PiBrainLight className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#skills",
  },
  {
    title: "Projects",
    icon: (
      <IoGridOutline className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#projects",
  },

  {
    title: "Resume",
    icon: (
      <LuFileDown className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "./assets/pdf-test.pdf",
    downlodable: true,
  },
];
