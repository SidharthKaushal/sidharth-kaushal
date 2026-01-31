import { CaseStudyBlock } from "../../components/CaseStudyBlock";

export const PortfolioList = () => {
  return (
    <section className="py-28">
      <div className="container">
        <div className="mb-30">
          <h1 className="text-[84px] text-black font-medium w-5/6 leading-23">Take a look at what I’ve built till now in my career<span className="h-4 w-4 bg-[#fc712b] rounded-full inline-block translate-y-[10%]"></span></h1>
        </div>
        <CaseStudyBlock />
      </div>
    </section>
  );
};
