import { PORTFOLIODATA } from "../data/projects";
import { Link } from "react-router-dom";
export const CaseStudyBlock = () => {
  return (
    <ul className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 pt-30 gap-18">
      {PORTFOLIODATA.slice(-4).reverse().map((el, i) => (
        <CaseStudyCards {...el} key={i} index={i}/>
      ))}
    </ul>
  );
};

const CaseStudyCards = ({ bannerImage, title, tags, index }) => {
  const isEven = (index + 1) % 2 === 0;
  const style = isEven ? { transform: "translateY(-120px)" } : {};
  return (
    <li style={style}>
      <Link to="#">
        <div className="group ">
          <div className="relative pb-[100%] overflow-hidden transition-transform duration-400 group-hover:scale-[0.95]">
            <img
              src={bannerImage}
              alt={title}
              className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
            />
          </div>
          <div className="pt-6 md:pt-4">
            <h2 className="text-2xl font-medium text-black mt-4">{title}</h2>
            <ul className="flex flex-wrap gap-1 mt-2 text-lg text-gray-600">
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

