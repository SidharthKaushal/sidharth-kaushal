import React from "react";
export const FinalLaunchCards = (el) => {
  return (
   
        <li
          key={el.id}
          className="border-s-1 border-gray-300 border-opacity-50 px-4"
        >
          <i className="fa-solid fa-circle mb-2 text-[10px] text-main"></i>
          <h3 className="text-2xl w-1/2 text-black">{el.title}</h3>
          <p className="text-secondary mt-15 text-md">{el.decription}</p>
        </li>

  );
};
