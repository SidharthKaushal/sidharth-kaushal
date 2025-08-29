import webshk1 from '../assets/images/experience/webshark-project-1.jpg'
import webshk2 from '../assets/images/experience/webshark-project-2.jpg'
import webshk3 from '../assets/images/experience/webshark-project-3.jpg'
import webshk4 from '../assets/images/experience/webshark-project-4.jpg'
import rackrn1 from '../assets/images/experience/rackron-project-1.jpg'
import rackrn3 from '../assets/images/experience/rackron-project-3.jpg'
import rackrn2 from '../assets/images/experience/rackron-project-2.jpg'
import rackrn4 from '../assets/images/experience/rackron-project-4.jpg'
export const EXPERIENCE = [
  {
    companyName: "Rackron Technologies Pvt. Ltd.",
    designation: "Web/App Designer",
    startDate: "January 2020",
    endDate: "May 2024",
    location: "Chandigarh",
    country: "IN",
    content: (el) => (
      <div>
        <p className="mb-4 font-normal leading-6 text-secondary">
          As a dedicated Front-End Web/App Designer at{" "}
          <strong>{el.companyName}</strong> in <strong>{el.location}</strong>, I
          designed and developed visually stunning, user-centric web and app
          interfaces that elevated brand presence and user engagement.
          Leveraging <strong> HTML5, CSS3, Tailwind CSS, WordPress, Figma, Canva, and SEO </strong>
          best practices. 
        </p>
        <ul className="list-disc mb-8 ms-3 font-normal md:text-smleading-6 text-secondary">
          <li>
            Designed intuitive UI/UX with Figma and Canva, enhancing user satisfaction.
          </li>
          <li>Built responsive websites using HTML5, CSS3, and Tailwind CSS.</li>
          <li>Worked on WordPress themes, improving site flexibility by 25%.</li>
          <li>Optimized SEO, boosting organic traffic by 15%.</li>
        </ul>
        <div className="grid grid-cols-2 gap-4">
          <img
            src={rackrn1}
            alt="project rackrn 1"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src={rackrn2}
            alt="project rackrn 2"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src={rackrn3}
            alt="project rackrn 3"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src={rackrn4}
            alt="project rackrn 4"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    companyName: "Webshark Web Services",
    designation: "Web Developer",
    startDate: "August 2024",
    endDate: "March 2025",
    location: "Bengaluru",
    country: "IN",
    content: (
      <div>
        <p className="mb-4 text-xs font-normal md:text-sm leading-6 text-secondary">
          As a <strong>Web Developer</strong> at Webshark in Bengaluru, I
          collaborate with cross-functional teams to design, develop, and deploy{" "}
          <strong>Dynamic web applications</strong> that drive business success.
          Leveraging modern technologies such as{" "}
          <strong>React.js, JavaScript, HTML5, CSS3, and WordPress.</strong> I
          build responsive, user-friendly interfaces and robust systems,
          delivering projects 25% faster through optimized workflows.
        </p>
        <ul className="list-disc mb-8 ms-3 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 leading-6 text-secondary">
          <li>
            Manage full development lifecycle, from analysis to deployment.
          </li>
          <li>Ensure cross-browser compatibility and web standards.</li>
          <li>Develop scalable websites with 30% faster load times.</li>
        </ul>
        <div className="grid grid-cols-2 gap-4">
          <img
            src={webshk1}
            alt="project webshk 1"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src={webshk2}
            alt="project webshk 2"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src={webshk3}
            alt="project webshk 3"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src={webshk4}
            alt="project webshk 4"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
];
