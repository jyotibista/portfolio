// data/portfolioData.ts — single source of truth (typed)

import type { Personal, Skill, Project, Experience, Education, Value, Blog } from "../types";

export const personaldescription: Personal = {
  name: "Jyoti Bista",
  tagline: "Frontend dev who ships pixel-perfect UIs & buttery-smooth UX ✨",
  location: "Kathmandu, Nepal",
  email: "zyotieebista12@gmail.com",
  phone: "+977 9861516870",
  github: "https://github.com/jyotibista",
  linkedin: "https://www.linkedin.com/in/jyotibista/",
  yearsExp: "4+",
};

export const vibes: string[] = ["Matcha Latte", "Iced Coffee", "Chai Tea", "Hot Cocoa"];



export const SKILL_GROUPS: Skill[] = [
  {
    label: "Frontend",
    emoji: "🖥️",
    description: "What I spend most of my day in",
    colSpan: "md:col-span-2",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript ES6+", "Redux", "Context API", "HTML5", "CSS3"],
  },
  {
    label: "Styling & UI",
    emoji: "🎨",
    description: "Making things look good",
    colSpan: "md:col-span-1",
    skills: ["Tailwind CSS", "Material UI", "Bootstrap"],
  },
  {
    label: "Performance & Testing",
    emoji: "⚡",
    description: "Obsessively optimising every render",
    colSpan: "md:col-span-1",
    skills: ["Lazy Loading", "Memoization", "Code Splitting", "Caching", "Jest", "React Testing Library"],
  },

  {
    label: "Tools & DevOps",
    emoji: "🔧",
    description: "The everyday toolkit",
    colSpan: "md:col-span-1",
    skills: ["Git", "GitHub", "Jira", "Postman", "Webpack", "Vite"],
  },
  {
    label: "Backend (Basic)",
    emoji: "🌱",
    description: "Enough to talk to the backend team",
    colSpan: "md:col-span-1",
    skills: ["Node.js", "Express.js", "MongoDB", "SQL", "REST APIs"],
  },
];

export const professionalProjects: Project[] = [
  {
    title: "Meshed 2.0",
    company: "Educonnect Australia",
    size: "large",
    description: "Worked on complex module and features of Meshed 2.0, a scalable education management system used by Australian institutes.",
    tags: ["React", "Redux", "Javascript"],
    link: "https://www.meshedgroup.com.au/products/meshed-rtom/",
  },
  {
    title: "Digital Health Directory",
    company: "Everestwalk Groups",
    size: "medium",
    description: "Built a secure, responsive UI for managing municipal health records. Integrated APIs with robust validation and error handling, improving reliability for large datasets.",
    tags: ["Next.js", "REST API", "Security", "UX"],
    link: "https://everestwalk.com/",
  },
  {
    title: "CAA-Dubai Car Sale Platform",
    company: "Everestwalk Groups",
    size: "medium",
    description: "Developed dashboards and reusable UI components for a car-sale eCommerce platform in Dubai. Optimised search and filtering with debounce and memoization, enhancing UX for thousands of concurrent users.",
    tags: ["React", "Redux", "Debounce", "E-commerce", "Typescript"],
    link: "https://everestwalk.com/",
  },
];

export const personalProjects: Project[] = [
  {
    title: "Dynamic Form Builder",
    company: "Side Project",
    size: "medium",
    description: "This project involves the creation of a dynamic form builder using React.js. It allows users to create custom forms with various field types, including text inputs, checkboxes, radio buttons, and dropdowns. The forms are built dynamically based on user configurations, enabling flexible data collection scenarios.",
    tags: ["React", "Tailwind Css", "Typescript"],
    link: "https://dynamic-form-builder-example-b3c7ygmzx-jyotis-projects-9858520c.vercel.app",
  },
  {
    title: "Portfolio v1 → v2",
    company: "You're looking at it 👀",
    size: "medium",
    description: "Built with love, lots of ☕, and way too many Playfair Display font pairings. Iteration is a lifestyle.",
    tags: ["React", "Tailwind", "Vibes"],
    link: "",
  },
  {
    title: "Time series analysis",
    company: "Education",
    size: "medium",
    description: "This project involves the analysis of time-series data, focusing on trends, seasonality, and forecasting. It utilizes statistical methods and machine learning models to predict future values and understand underlying patterns in the data.",
    tags: ["Python", "Machine Learning", "Data Analysis"],
    link: "https://github.com/jyotibista/STW7089CEM-Assignment",
  },

  {
    title: "Vertical search engine and document classification",
    company: "Education",
    size: "medium",
    description: "This project focuses on building a vertical search engine through crawling and implementing document classification.",
    tags: ["Python", "Machine Learning", "Data Analysis", "Web Crawling", "Document Classification"],
    link: " https://github.com/jyotibista/Vertical-search-engine-and-document-classification",
  },
];

export const experiences: Experience[] = [
  {
    role: "Frontend Developer",
    company: "Educonnect Australia",
    period: "Dec 2021 – Present",
    highlights: [
      "Worked on complex module and features of Meshed 2.0, a scalable education management system used by Australian institutes.",
      "Enhanced performance through lazy loading, caching, and memoization, reducing page load times significantly.",
      "Mentored and coached 3+ junior developers, conducted code reviews, enforced clean modular architecture.",
      "Collaborated with ASP.NET / SQL backend teams to streamline API calls and minimise redundant requests.",
    ],
    stack: "React.js · Redux · Tailwind · Jest · React Testing Library · Jira",
  },
  {
    role: "Frontend Developer",
    company: "Everestwalk Groups",
    period: "Mar 2021 – Nov 2021",
    highlights: [
      "Developed responsive, cross-device applications for EdTech, eCommerce, and health domains.",
      "Built reusable UI components and dashboards to enhance maintainability and scalability.",
      "Integrated third-party APIs with robust error handling and validation.",
      "Optimised search and data-heavy components using debounce, memoization, and performance profiling.",
    ],
    stack: "React.js · Redux · Next.js ·Typescript · Git · Material UI",
  },
];

export const education: Education[] = [
  {
    degree: "Bachelor of Science in Computer Science & Information Technology",
    school: "Madan Bhandari Memorial College, Tribhuvan University",
    period: "2016 – 2021",
    icon: "🎓",
    detail: "Focused on software engineering fundamentals. Where the obsession with clean code began.",
  },
  {
    degree: "MSc Data Science & Computational Intelligence (Ongoing)",
    school: "Coventry University",
    period: "2025 – Present",
    icon: "📊",
    detail: "Studying Python, statistics, ML fundamentals & data visualisation. Bridging the gap between beautiful UIs and meaningful data — because both matter.",
  },
];

export const values: Value[] = [
  {
    title: "Clean Code or No Code",
    quote: "If future-me would curse reading it, I refactor it now. Code is a love letter to your team.",
    icon: "🌱",
  },
  {
    title: "Speed Is a Feature",
    quote: "Every millisecond is user experience. I obsess over bundles, renders & paint times.",
    icon: "⚡",
  },
  {
    title: "Always Levelling Up",
    quote: "Data Science on weekdays, side projects on weekends. Stagnation is the only thing that scares me.",
    icon: "🦋",
  },
];

export const blogs: Blog[] = [
  {
    title: "Why I Started Learning Data Science as a Frontend Dev",
    tag: "Learning",
    snippet: "Frontend devs rarely cross into data. Here's why I decided to — and how Python is changing the way I think about UI.",
  },
];
