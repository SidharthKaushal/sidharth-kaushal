import matsbitbnr from "../assets/images/projects/masthbite.webp";
import txprt4ubnr from "../assets/images/projects/taxpert4you.webp";
import oniosomebnr from "../assets/images/projects/oniosome.webp";
import leanwisdombnr from "../assets/images/projects/leanwisdom.webp";
import rentonbnr from "../assets/images/projects/renton-eu.webp";
import vidyavikasbnr from "../assets/images/projects/vidyavikas.webp";
export const PORTFOLIODATA = [
  {
    id: 0,
    title: "Mathsbite – India’s Best Tutoring Platform",
    tags: ["EdTech", "Education", "Tutoring", "Web Application"],
    bannerImage: matsbitbnr,
    banneAlt: "Mathsbite banner image",
    images: [
      {
        src: "path/to/mathsbite-homepage-visual1.jpg",
        alt: "Mathsbite platform showing a student and tutor interaction",
      },
      {
        src: "path/to/mathsbite-homepage-visual2.jpg",
        alt: "Infographic of Mathsbite key statistics",
      },
    ],
    url: "https://www.mathsbite.com",
    detailedCaseStudy: {
      header: {
        description:
          "A premier online and home tutoring platform designed for students and tutors across India.",
        downloadLinks: [
          {
            platform: "Website",
            url: "https://www.mathsbite.com",
          },
        ],
      },
      story: {
        title: "The Story of Mathsbite",
        content:
          "Mathsbite was created to be India’s premier platform for top-notch tutoring services, offering both home and online tuitions. The goal was to build a user-friendly and reliable platform that connects students with highly qualified and experienced teachers to foster academic success.",
        images: [
          {
            src: "path/to/mathsbite-story-image1.jpg",
            alt: "A visual representation of the Mathsbite platform's growth",
          },
        ],
      },
      challenge: {
        title: "The Challenge to Mathsbite",
        content:
          "The challenge was to create a comprehensive platform that could cater to a diverse audience, including students from 8th to 12th grade across different education boards (CBSE, ICSE, IB) and individuals preparing for competitive exams. This required building a robust system for class management, tutor verification, and seamless communication to ensure a high-quality learning experience for everyone.",
        images: [
          {
            src: "path/to/mathsbite-challenge-image1.jpg",
            alt: "Illustration of the diverse student base and their needs",
          },
        ],
      },
      solution: {
        title: "What We Have Done for Mathsbite",
        content:
          "We developed a full-featured platform with an intuitive interface for both students and tutors. Key functionalities include a detailed course catalog, a streamlined process for students to request tuition, and an easy-to-use system for tutors to manage their classes and applications. This solution not only streamlined the tutoring process but also built trust through features like free demo classes and tutor replacement.",
        images: [
          {
            src: "path/to/mathsbite-solution-image1.jpg",
            alt: "User interface showcase of the Mathsbite platform",
          },
          {
            src: "path/to/mathsbite-solution-image2.jpg",
            alt: "Visual of the class management dashboard for a tutor",
          },
        ],
      },
      keyFeatures: {
        title: "Key Features of Mathsbite",
        features: [
          "One-on-One Personalized Classes",
          "Doubt Clearing & Problem Solving",
          "Exam Preparation & Syllabus Completion",
          "Online & Offline Tuition Options",
          "Free & Instant Tutor Replacement",
          "100% Customized Class Schedules",
          "Instant updates and notifications for seamless communication",
        ],
        images: [
          {
            src: "path/to/mathsbite-features-image1.jpg",
            alt: "Screenshot of key features on the Mathsbite app",
          },
        ],
      },
      results: {
        title: "The Result for Mathsbite",
        content:
          "Mathsbite has successfully established itself as a trusted platform in the Indian education sector. With over 700 happy customers, 200,000+ hours of tutoring delivered, and a network of 400+ specialist teachers, the platform has proven its value in providing high-quality, customized educational services.",
        stats: [
          {
            value: "700+",
            label: "Happy Customers",
          },
          {
            value: "2,00,000+",
            label: "Hours",
          },
          {
            value: "400+",
            label: "Specialist Teachers",
          },
          {
            value: "200+",
            label: "Subjects Covered",
          },
        ],
      },
    },
  },
  {
    id: 2,
    title: "Taxpert4you – Service Request Management",
    tags: ["FinTech", "Taxation", "Dashboard", "Service Management"],
    bannerImage: txprt4ubnr,
    banneAlt: "Taxpert4you banner image",
    images: [
      {
        src: "path/to/taxpert4you-service-table.jpg",
        alt: "Table of service requests",
      },
      {
        src: "path/to/taxpert4you-dashboard.jpg",
        alt: "Service request management dashboard",
      },
    ],
    url: "/service-requests",
    header: {
      description:
        "A feature within the Taxpert4you platform that allows users to create, view, and manage their tax compliance and dispute resolution requests.",
      downloadLinks: [],
    },
    story: {
      title: "The Story of the Service Request Feature",
      content:
        "To complement the tax compliance and dispute management services, a dedicated service request system was developed. This feature provides a centralized hub where clients can initiate new service requests, track their progress, and communicate with tax professionals. The goal was to provide transparency and a single point of contact for all client needs.",
      images: [
        {
          src: "path/to/taxpert4you-story-service-image.jpg",
          alt: "Illustration of a streamlined service request process",
        },
      ],
    },
    challenge: {
      title: "The Challenge",
      content:
        "The challenge was to build an intuitive and efficient system that could manage a high volume of complex tax-related requests. Each request required specific details, documentation, and a clear timeline. The platform needed to ensure that requests were categorized correctly, assigned to the right experts, and that users had a clear view of the status and deadlines.",
      images: [
        {
          src: "path/to/taxpert4you-challenge-service-image.jpg",
          alt: "Graphic depicting the complexity of managing tax requests",
        },
      ],
    },
    solution: {
      title: "What We Have Done",
      content:
        "We implemented a dynamic service request table with key columns: 'Request Title,' 'Category,' 'Sub Category,' 'Comments,' 'Deadline,' 'Status,' and 'Actions.' This design enables users to quickly scan and understand the state of their requests. The system supports detailed request creation, including a comments section for remarks and the ability to track the status (e.g., 'Active'). Pagination was included to handle a large number of entries efficiently.",
      images: [
        {
          src: "path/to/taxpert4you-solution-service-image1.jpg",
          alt: "Mockup of the service request creation form",
        },
        {
          src: "path/to/taxpert4you-solution-service-image2.jpg",
          alt: "A close-up view of the service request table",
        },
      ],
    },
    keyFeatures: {
      title: "Key Features of the Service Request Module",
      features: [
        "Centralized dashboard for all service requests",
        "Detailed request categorization (e.g., Tax Compliance, GST Notice)",
        "Clear status tracking ('Active')",
        "Comment/Remarks section for detailed communication",
        "Defined deadlines for each request",
        "Pagination for easy navigation through multiple requests",
      ],
      images: [
        {
          src: "path/to/taxpert4you-features-service-image.jpg",
          alt: "Service request table with clear headers and data",
        },
      ],
    },
    results: {
      title: "The Result",
      content:
        "The service request management feature has significantly improved the user experience on Taxpert4you. It provides a transparent, organized, and stress-free way for clients to manage their tax compliance and dispute needs. By centralizing all communication and documentation, it ensures that no request is lost and that all deadlines are met effectively.",
      stats: [],
    },
  },
  {
    id: 3,
    title: "Oniosome Healthcare – Innovation in Novel Drug Delivery Systems",
    tags: ["Healthcare", "Pharma", "Biotech", "CRO"],
    bannerImage: oniosomebnr,
    banneAlt: "Oniosome Healthcare banner image",
    images: [
      {
        src: "path/to/oniosome-main-image1.jpg",
        alt: "Oniosome Healthcare main visual",
      },
      {
        src: "path/to/oniosome-main-image2.jpg",
        alt: "Oniosome research and development graphic",
      },
    ],
    url: "/case-studies/oniosome",
    detailedCaseStudy: {
      header: {
        description:
          "Oniosome Healthcare Pvt. Ltd. is a contract research organization (CRO) and innovation service provider, driving new drug delivery systems and healthcare solutions.",
        downloadLinks: [
          {
            platform: "Website",
            url: "https://www.oniosome.com",
          },
        ],
      },
      story: {
        title: "The Story of Oniosome",
        content: `
        Oniosome Healthcare was founded with the mission to bring scientifically proven, innovative healthcare products to market. 
        With a focus on Novel Drug Delivery Systems (NDDS) and advanced formulation strategies, Oniosome has established itself as a trusted partner in pharmaceutical research, product development, and commercialization.
      `,
        images: [
          {
            src: "path/to/oniosome-story-image1.jpg",
            alt: "Oniosome Healthcare research facility",
          },
        ],
      },
      challenge: {
        title: "Challenges in Pharma & Biotech",
        content: `
        The pharmaceutical and biotech industries face rising R&D costs, low productivity, and patent expirations, 
        while also being pressured to reduce healthcare costs. 
        Companies need reliable partners to support discovery, development, scale-up, and regulatory compliance 
        while staying cost-effective and innovative.
      `,
        images: [
          {
            src: "path/to/oniosome-challenge-image1.jpg",
            alt: "Pharma challenges illustration",
          },
        ],
      },
      solution: {
        title: "Oniosome’s Approach",
        content: `
        Oniosome provides end-to-end solutions in pharmaceutical and biotech R&D. 
        With expertise in contract research, manufacturing, regulatory support, and innovation services, 
        Oniosome enables companies to scale efficiently while ensuring quality and compliance. 
        The company collaborates with academia, hospitals, and industry leaders to accelerate innovation 
        and bring new healthcare solutions to the market.
      `,
        images: [
          {
            src: "path/to/oniosome-solution-image1.jpg",
            alt: "Oniosome drug development process",
          },
          {
            src: "path/to/oniosome-solution-image2.jpg",
            alt: "Oniosome research collaboration",
          },
        ],
      },
      keyFeatures: {
        title: "Key Services & Capabilities",
        features: [
          "Novel Drug Delivery Systems (NDDS) development",
          "Pharmaceutical & Biological process development and scale-up",
          "Analytical testing services",
          "Regulatory & Intellectual Property Rights support",
          "Contract research, manufacturing, and marketing",
          "Collaboration & out-licensing opportunities",
          "Access to highly potent compounds and nanoparticle research",
        ],
        images: [
          {
            src: "path/to/oniosome-features-image1.jpg",
            alt: "Oniosome R&D laboratory",
          },
        ],
      },
      results: {
        title: "Impact of Oniosome Healthcare",
        content: `
        Oniosome has successfully delivered innovative drug formulations and healthcare products, 
        trained over 2000 students, completed 1500+ projects, and supported 1200+ clients. 
        Its strong R&D capabilities, integrated business model, and focus on innovation 
        continue to make it a partner of choice for global pharmaceutical and biotech companies.
      `,
      },
    },
  },
  {
    id: 4,
    title: "LeanWisdom – Future-Forward Learning for Career Growth",
    tags: ["EdTech", "Agile", "SAFe", "Certifications", "AI"],
    bannerImage: leanwisdombnr,
    banneAlt: "LeanWisdom banner image",
    images: [
      {
        src: "path/to/leanwisdom-main1.jpg",
        alt: "LeanWisdom training session",
      },
      {
        src: "path/to/leanwisdom-main2.jpg",
        alt: "LeanWisdom learners and trainers",
      },
    ],
    url: "/case-studies/leanwisdom",
    detailedCaseStudy: {
      header: {
        description:
          "LeanWisdom is a global leader in Agile and SAFe certification training, helping professionals transform their careers with future-forward learning.",
        downloadLinks: [
          {
            platform: "Website",
            url: "https://www.leanwisdom.com",
          },
        ],
      },
      story: {
        title: "The Story of LeanWisdom",
        content: `
        LeanWisdom was founded with the mission of empowering professionals and organizations with industry-recognized Agile and SAFe certifications.
        With 400+ courses across domains like AI, DevOps, Project Management, and Agile frameworks, LeanWisdom has trained over 50,000 learners from 3,800+ companies globally.
        
        By offering flexible learning formats and hands-on, practical training, LeanWisdom has become the go-to platform for career-driven professionals seeking to master Agile practices.
      `,
        images: [
          {
            src: "path/to/leanwisdom-story.jpg",
            alt: "LeanWisdom learners and alumni network",
          },
        ],
      },
      challenge: {
        title: "Challenges in Learning & Career Growth",
        content: `
        Many professionals struggle to keep up with evolving technologies and Agile methodologies. 
        Traditional training approaches often lack flexibility, real-world application, and mentorship beyond certification.
        
        Organizations too face difficulty aligning teams to Agile best practices, scaling transformations, and finding certified experts who can deliver results in dynamic markets.
      `,
        images: [
          {
            src: "path/to/leanwisdom-challenge.jpg",
            alt: "Learning challenges illustration",
          },
        ],
      },
      solution: {
        title: "LeanWisdom’s Approach",
        content: `
        LeanWisdom bridges the gap with immersive, flexible, and career-focused training programs. 
        Courses are led by active industry practitioners with decades of experience in Agile and SAFe transformations at Fortune 500 companies.
        
        Learners benefit from hands-on projects, case studies, post-training support, and access to a global alumni network. 
        With a 98% certification success rate, LeanWisdom ensures learners are not just certified, but also industry-ready.
      `,
        images: [
          {
            src: "path/to/leanwisdom-solution1.jpg",
            alt: "LeanWisdom Agile coaching",
          },
          {
            src: "path/to/leanwisdom-solution2.jpg",
            alt: "Interactive LeanWisdom training session",
          },
        ],
      },
      keyFeatures: {
        title: "Key Features of LeanWisdom",
        features: [
          "400+ courses across Agile, SAFe, AI, DevOps, and Project Management",
          "98% certification success rate",
          "50,000+ learner reviews with 5.0 average rating",
          "Flexible learning options (weekend, weekday, self-paced)",
          "6 months post-training mentorship and alumni network",
          "100% money-back guarantee within 30 days",
          "Trainers are active practitioners from top Fortune 500 companies",
          "Trusted by 3,800+ companies like IBM, Siemens, Intel, Bosch, and Honeywell",
        ],
        images: [
          {
            src: "path/to/leanwisdom-features.jpg",
            alt: "LeanWisdom key training features",
          },
        ],
      },
      results: {
        title: "The Impact of LeanWisdom",
        content: `
        LeanWisdom has transformed the careers of over 50,000 professionals worldwide. 
        With partnerships across 3,800+ organizations including Siemens, Intel, IBM, Cisco, Bosch, and Honeywell, 
        LeanWisdom has become a trusted name in Agile and SAFe training.
        
        Learners consistently rate their experience 5.0, praising the trainers’ real-world expertise, 
        interactive sessions, and long-term career impact. 
        Today, LeanWisdom stands as one of the fastest-growing EdTech companies in Agile and certification training.
      `,
      },
    },
  },
  {
    id: 5,
    title: "Renton Technologies – Driving Digital Transformation",
    tags: [
      "Software Development",
      "E-commerce",
      "Web Apps",
      "Custom Solutions",
    ],
    bannerImage: rentonbnr,
    banneAlt: "Renton Technologies banner image",
    images: [
      {
        src: "path/to/renton-main1.jpg",
        alt: "Renton Technologies team working on projects",
      },
      {
        src: "path/to/renton-main2.jpg",
        alt: "Custom software development by Renton",
      },
    ],
    url: "/case-studies/renton-technologies",
    detailedCaseStudy: {
      header: {
        description:
          "Renton Technologies SRL is a certified European software development company delivering IT-enabled solutions, eCommerce platforms, and custom applications for global clients.",
        downloadLinks: [
          {
            platform: "Website",
            url: "https://www.renton-eu.com",
          },
        ],
      },
      story: {
        title: "The Story of Renton Technologies",
        content: `
        Since its establishment, Renton Technologies has been helping businesses solve complex problems through technology. 
        With expertise across eCommerce, web applications, mobile development, API integrations, and enterprise-grade systems, 
        Renton has become a trusted digital partner for organizations of all sizes.
        
        Renton is also an official Adobe Marketplace seller, providing certified Magento 2 extensions with complete customization, 
        security, and support plans.
      `,
        images: [
          {
            src: "path/to/renton-story.jpg",
            alt: "Renton headquarters and development team",
          },
        ],
      },
      challenge: {
        title: "Challenges in Digital Transformation",
        content: `
        Businesses today face challenges like scaling legacy systems, ensuring platform security, integrating APIs, 
        and delivering seamless user experiences across web and mobile.
        
        Many companies also struggle with time-to-market pressures and lack in-house expertise to develop custom, 
        scalable, and secure applications while keeping costs in check.
      `,
        images: [
          {
            src: "path/to/renton-challenge.jpg",
            alt: "Digital transformation challenges",
          },
        ],
      },
      solution: {
        title: "Renton’s Approach",
        content: `
        Renton combines strategic technology consulting with full-cycle software development services. 
        By leveraging modern frameworks, cloud technologies, and agile methodologies, Renton delivers 
        scalable, secure, and user-centric solutions.
        
        Their portfolio spans eCommerce platforms, enterprise apps, PWAs, custom software, 
        and Magento-certified extensions. Renton ensures reduced development time, high-quality standards, 
        and long-term client partnerships.
      `,
        images: [
          {
            src: "path/to/renton-solution1.jpg",
            alt: "Renton eCommerce development process",
          },
          {
            src: "path/to/renton-solution2.jpg",
            alt: "Renton software architecture and integration",
          },
        ],
      },
      keyFeatures: {
        title: "Key Services & Capabilities",
        features: [
          "E-commerce Development (Magento, Shopify, custom frameworks)",
          "Web & Mobile Application Development",
          "Progressive Web Apps (PWA)",
          "API Integration and Automation",
          "Enterprise Application Modernization",
          "White Label Software Development",
          "Custom Software Solutions",
          "Digital Marketing & IT Services Management",
          "Prototyping & Strategy",
          "Certified Adobe Magento Extensions",
        ],
        images: [
          {
            src: "path/to/renton-features.jpg",
            alt: "Renton technology stack and services",
          },
        ],
      },
      results: {
        title: "The Impact of Renton Technologies",
        content: `
        Renton has delivered scalable solutions to global clients, empowering distributors, 
        IT service providers, and eCommerce leaders with custom-built platforms. 
        Their successful projects include advanced repricing tools, warranty systems, invoicing platforms, 
        and global IT distribution solutions.
        
        With expertise in 20+ technologies including React, Angular, Java, .NET, Flutter, Python, and Azure, 
        Renton continues to help businesses reduce time-to-market, modernize legacy systems, and unlock new digital opportunities.
      `,
      },
    },
  },
  {
    id: 6,
    title: "VVIET – Shaping Future Engineers and Leaders",
    tags: ["Education", "Engineering", "MBA", "MCA", "Research"],
    bannerImage: vidyavikasbnr,
    banneAlt: "Vidya Vikas Institute banner image",
    images: [
      {
        src: "path/to/vviet-main1.jpg",
        alt: "Vidya Vikas Institute campus",
      },
      {
        src: "path/to/vviet-main2.jpg",
        alt: "Students and faculty at VVIET",
      },
    ],
    url: "/case-studies/vviet",
    detailedCaseStudy: {
      header: {
        description:
          "Vidya Vikas Institute of Engineering and Technology (VVIET), Mysore, is one of Karnataka’s top 10 engineering colleges. Established in 1997 and affiliated with VTU, VVIET offers undergraduate, postgraduate, and research programs across diverse engineering and management disciplines.",
        downloadLinks: [
          {
            platform: "Website",
            url: "https://www.vidyavikas.edu.in",
          },
        ],
      },
      story: {
        title: "The Story of VVIET",
        content: `
        Founded in 1997 under Vidya Vikas Educational Trust, VVIET has rapidly grown into one of Karnataka’s leading institutions for technical and management education. 
        
        With 3000+ students, world-class infrastructure, and a strong placement record, the institute provides holistic education that blends academic knowledge with cultural diversity and global exposure. 
        
        VVIET emphasizes both the mind and the heart — producing not just skilled professionals but also responsible leaders.
      `,
        images: [
          {
            src: "path/to/vviet-story.jpg",
            alt: "VVIET campus and cultural diversity",
          },
        ],
      },
      challenge: {
        title: "Challenges in Higher Education",
        content: `
        Students often face challenges such as adapting to industry demands, gaining practical exposure, and balancing academic and personal growth. 
        
        Institutions, on the other hand, need to deliver cutting-edge curriculum, provide hands-on experiences, and create placement opportunities while maintaining inclusivity and affordability.
      `,
        images: [
          {
            src: "path/to/vviet-challenge.jpg",
            alt: "Higher education challenges illustration",
          },
        ],
      },
      solution: {
        title: "VVIET’s Approach",
        content: `
        VVIET bridges the gap between academics and industry through innovative teaching, collaborations, and career development programs. 
        
        With modern labs, industry partnerships, workshops, hackathons, and national-level seminars, VVIET ensures students gain both theoretical knowledge and real-world skills. 
        
        The placement cell works with companies like TCS, Kayens Technologies, and GDG to secure opportunities for students. 
        Additionally, VVIET promotes research, innovation, and leadership through initiatives such as student ambassador programs, conferences, and industrial visits.
      `,
        images: [
          {
            src: "path/to/vviet-solution1.jpg",
            alt: "Students participating in workshops",
          },
          {
            src: "path/to/vviet-solution2.jpg",
            alt: "Industrial visits and hackathons at VVIET",
          },
        ],
      },
      keyFeatures: {
        title: "Key Highlights of VVIET",
        features: [
          "Undergraduate Programs: CSE, ISE, ECE, EEE, Civil, Mechanical",
          "Postgraduate Programs: MBA and MCA",
          "Affiliated with Visvesvaraya Technological University (VTU), Mysore",
          "34,000+ library volumes, 12,000+ e-books, 15,000+ e-journals",
          "State-of-the-art labs, smart classrooms, hostels, and recreational facilities",
          "Regular workshops, conferences, and hackathons",
          "Strong placement opportunities with leading companies",
          "Diverse student community from 33 states and 7 countries",
        ],
        images: [
          {
            src: "path/to/vviet-features.jpg",
            alt: "VVIET facilities and student community",
          },
        ],
      },
      results: {
        title: "The Impact of VVIET",
        content: `
        VVIET has consistently ranked among the top engineering colleges in Karnataka for academic excellence and placements. 
        
        Over the years, it has hosted national-level events, nurtured industry-academia collaborations, and supported students in achieving global recognition. 
        
        With over 800+ diverse students, 45+ academic programs, and 28+ cutting-edge labs, VVIET continues to empower learners to build successful careers and meaningful lives.
      `,
      },
    },
  },
];
