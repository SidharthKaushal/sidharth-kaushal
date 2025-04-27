export const SectionHeadingPrimary = ({
  primaryHeading,
  secondaryHeading,
  description,
}) => {
  return (
    <div className="grid grid-cols-2 justify-between items-center mb-10">
      <div className="w-2/2">
        <h2 className="text-lg mb-3 ps-4 relative before:content-[''] before:h-[8px] before:w-[8px] before:bg-primary before:absolute before:rounded-full before:left-0 before:top-[10px]">
          {primaryHeading}
        </h2>
        <h3 className="capitalize text-5xl leading-14">{secondaryHeading}</h3>
      </div>
      <div className="w-3/4 ms-auto">
          <p className="leading-6">{description}</p>
      </div>
    </div>
  );
};
