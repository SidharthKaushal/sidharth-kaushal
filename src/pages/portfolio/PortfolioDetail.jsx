import { Link, useParams } from "react-router-dom";
import { PORTFOLIODATA } from "../../data/projects";

export const PortfolioDetail = () => {
  const { id } = useParams();
  const project = PORTFOLIODATA.find((p) => p.id === id);
  if (!project) return <div className="center">Project not found <Link to="/">Home Page</Link> </div>;

  return (
    <div className="max-w-5xl mx-auto p-8">
      <img src={project.bannerImage} alt={project.title} />
      <h1 className="text-3xl font-bold mt-6">{project.title}</h1>
      <div className="flex gap-2 mt-4">
        {project.tags.map((tag, i) => (
          <span key={i}>{tag}</span>
        ))}
      </div>
    </div>
  );
};
