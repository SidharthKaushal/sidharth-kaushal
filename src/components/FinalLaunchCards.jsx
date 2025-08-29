import { GoDotFill } from "react-icons/go";
export const FinalLaunchCards = (el) => {
  return (
    <li className="border-s-1 border-gray-300 border-opacity-50 px-4">
      <GoDotFill className="mb-2 text-[20px] text-main" />
      <h3 className="text-2xl w-1/2 text-black">{el.title}</h3>
      <p className="text-secondary mt-15 text-md">{el.decription}</p>
    </li>
  );
};
