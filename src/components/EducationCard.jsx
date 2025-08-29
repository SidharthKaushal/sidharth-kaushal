export const EducationCard = (card) => {
  

  return (
    <li className="hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl">
      <div className="group grid grid-cols-3 w-full justify-between items-center gap-4 py-5 px-3 border-b-1 border-gray-300 border-opacity-50 hover:bg-light-dark duration-300">
        <div>
          <h3 className="text-xl text-black">
            {card.title}, <span>{card.location}</span>
          </h3>
          <p className="text-secondary mt-2 flex items-center gap-2 relative before:content-[''] before:h-[4px] before:w-[4px] before:bg-secondary before:absolute before:rounded-full before:left-0 before:top-[7px] ps-3">
            {card.type} - {card.value}
          </p>
        </div>
        <p className="text-left text-secondary text-sm leading-6 w-2/3">
          {card.description}
        </p>
        <div className="flex gap-3 items-center justify-end w-2/2">
          <span className="text-sm text-primary/70 bg-primary/10 px-3 py-1 rounded-full border border-primary/10">
            <span>{card.startDate}</span> - <span>{card.endDate}</span>
          </span>
        </div>
      </div>
    </li>
  );
};
