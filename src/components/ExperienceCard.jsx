import React from "react";

export const ExperienceCard = (e) => {
  return (
    <li className="grid grid-cols-3 justify-between items-center gap-4 py-5 border-b-1 border-gray-300 border-opacity-50">
      <div>
        <h3 className="text-xl">
          {e.designation}, <span> {e.location}</span>
        </h3>
        <p className="text-secondary mt-2 flex items-center gap-2 relative before:content-[''] before:h-[4px] before:w-[4px] before:bg-secondary before:absolute before:rounded-full before:left-0 before:top-[7px] ps-3">
          <span>{e.startDate}</span> - <span>{e.endDate}</span>
        </p>
      </div>
      <p className="text-left text-secondary text-sm leading-6 w-2/3">
        {e.description}
      </p>
      <div className="flex gap-3 items-center justify-end w-2/2">
        {e.tags.map((t, i) => (
          <span
            key={i}
            className="text-sm text-primary/70 bg-primary/10 px-3 py-1 rounded-full border border-primary/10"
          >
            {t}
          </span>
        ))}
      </div>
    </li>
  );
};
