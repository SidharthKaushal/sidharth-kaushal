export const SectionHeadingPrimary = ({
  primaryHeading,
  secondaryHeading,
  description,
}) => {
  return (
    <div className={`grid md:grid-cols-2 md:justify-between items-center md:mb-10`}>
      <div className={`flex flex-col items-center md:items-start md:w-2/3`}>
        <h2 className="text-black text-lg mb-3 ps-4 relative before:content-[''] before:h-[8px] before:w-[8px] before:bg-main before:absolute before:rounded-full before:left-0 before:top-[10px]">
          {primaryHeading}
        </h2>
        <h3 className="capitalize text-3xl md:text-5xl md:leading-14 text-black">
          {secondaryHeading}
        </h3>
      </div>
      <div className="md:w-3/4 ms-auto text-center md:text-start mt-2 md:mt-0">
        <p className="leading-6">{description}</p>
      </div>
    </div>
  );
};
