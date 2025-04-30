import { Link } from "react-router-dom";
import { FinalLaunchCards } from "../components/FinalLaunchCards";
import { LuPhone } from "react-icons/lu";
import { FINAL_LAUNCH } from "../data/finalLaunch";
export const FirstSketch = () => {
  return (
    <section className="py-16 h-[700px]">
      <div className="container h-full">
        <div className="bg-light-dark p-10 rounded-3xl h-full flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <h2 className="capitalize text-6xl leading-18 w-[40%] text-black">
              From First Sketch to Final Launch
            </h2>
            <Link
              to="*"
              className="group text-light bg-main rounded-full px-6 py-3 text-md flex items-center gap-2 hover:bg-main-hover  transition duration-300"
            >
              <LuPhone className="transition-transform duration-300 group-hover:rotate-45 " />
              Book A Call
            </Link>
          </div>
          <ul className="grid grid-cols-4 justify-between pt-10">
            {FINAL_LAUNCH.map((el) => (
              <FinalLaunchCards {...el} key={el.id}/>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
