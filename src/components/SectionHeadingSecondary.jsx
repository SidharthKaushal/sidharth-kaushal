import { cn } from "../lib/utils";

export const SectionHeadingSecondary = ({
  primaryHeading,
  secondaryHeading,
  description,
}) => {
  return (
    <div
      className={cn(
        "grid-cols-2 items-center mb-10",
        description ? "justify-between" : "justify-center",
        description ? "grid" : "flex text-center"
      )}
    >
      <div className="w-1/2">
        <h2 className="inline-block text-black text-lg mb-3 ps-4 relative before:content-[''] before:h-[8px] before:w-[8px] before:bg-main before:absolute before:rounded-full before:left-0 before:top-[10px]">
          {primaryHeading}
        </h2>
        <h3 className="capitalize text-5xl leading-14 text-black">
          {secondaryHeading}
        </h3>
      </div>
      {description && (
        <div className="w-3/4 ms-auto">
          <p className="leading-6">{description}</p>
        </div>
      )}
    </div>
  );
};
