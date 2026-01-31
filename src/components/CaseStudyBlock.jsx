import { PORTFOLIODATA } from "../data/projects";
import { Link } from "react-router-dom";
export const CaseStudyBlock = ({ showProjects }) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pt-10 md:pt-30 gap-10 md:gap-18">
      {PORTFOLIODATA.slice(-showProjects)
        .reverse()
        .map((el, i) => (
          <CaseStudyCards
            key={i}
            index={i}
            id={el.id}
            bannerImage={el.bannerImage}
            title={el.title}
            tags={el.tags}
          />
        ))}
    </ul>
  );
};

const CaseStudyCards = ({ id, bannerImage, title, tags, index }) => {
  const isEven = (index + 1) % 2 === 0;
  return (
    <li
      className={isEven ? "translate-y-0 md:-translate-y-[120px]" : undefined}
    >
      <Link to={`/projects/${id}`}>
        <div className="group ">
          <div className="relative pb-[80%] md:pb-[100%] overflow-hidden transition-transform duration-400 group-hover:scale-[0.95]">
            <img
              src={bannerImage}
              alt={title}
              className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
            />
          </div>
          <div className="pt-2 md:pt-4">
            <h2 className="text-xl md:text-2xl font-medium text-black mt-4">
              {title}
            </h2>
            <ul className="flex flex-wrap gap-1 mt-2 text-sm md:text-lg text-gray-600">
              {tags.map((tag, index) => (
                <li key={index}>
                  {tag}
                  {index < tags.length - 1 && ","}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Link>
    </li>
  );
};
