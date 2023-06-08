import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  coinme_logo,
  acorns_logo,
  wc_logo,
  ga_logo,
  shopify,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: creator,
  },
  {
    title: "Mobile",
    icon: mobile,
  },
  {
    title: "Frontend",
    icon: web,
  },
  {
    title: "Backend",
    icon: backend,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer II",
    company_name: "Coinme",
    blurb: "An industry leader in cash-to-crypto access points prioritizing financial inclusion and economic empowerment",
    icon: coinme_logo,
    iconBg: "#1EE66E",
    date: "Jan 2022 - May 2023",
    points: [
      "Led a team of 3 in the development of an essential customer support tool, streamlining processes and reducing escalations to engineering by over 90%",
      "Innovated to replace costly third-party services with tailor-made in-house solutions, resulting in substantial cost savings and enhanced data privacy",
      "Mentored junior team members, promoting professional growth, fostering an inclusive work environment, and encouraging collaboration",
      "Developed a microservice APIs to streamline transaction reconciliation, while maintaining a comprehensive audit trail and ensuring data auditability and security"
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Acorns",
    blurb: "A fin-tech app democratizing investment by enabling users to effortlessly invest in select ETFs",
    icon: acorns_logo,
    iconBg: "#FFFFFF",
    date: "Oct 2019 - June 2020",
    points: [
      "Worked with a team to build a Python/Django app enabling customer support to resolve transaction errors efficiently",
      "Improved data warehouse organization by debugging data flow and identifying accurate sources-of-truth from erroneous API data points",
      "Enhanced internal communication by developing an intuitive dashboard, streamlining information sharing between departments and fostering collaboration",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Well-Crafted",
    blurb: "A start-up offering tools for breweries to manage social media marketing campaigns effectively",
    icon: wc_logo,
    iconBg: "#FFFFFF",
    date: "Sept 2018 - Sept 2019",
    points: [
      "Achieved MVP and launched alpha within 3 months, incorporating continuous feedback from pilot users",
      "Prioritized clean code and organized file structure to minimize tech debt and ensure long-term scalability",
      "Worked closely with pilot-users to understand their specific needs and translate them into feature requests",
    ],
  },
  {
    title: "Co-founder and Lead Developer",
    company_name: "Cedar Club",
    blurb: "A Shopify-based store promoting ethically sourced, carbon-negative, bamboo-fiber socks and underwear",
    icon: shopify,
    iconBg: "#383E56",
    date: "Sept 2017 - June 2018",
    points: [
      "Conducted extensive research to select technologies that best aligned with the company's needs",
      "Led a team of 3 developers, driving the project from ideation to execution and launch",
      "Developed a responsive web app, analyzing user engagement metrics to optimize sales conversion rates",
      "Crowdfunded the venture with a successful Kickstarter campaign, raising over $7,000",
    ],
  },
  {
    title: "Teaching Assistant (Alum)",
    company_name: "General Assembly",
    icon: ga_logo,
    iconBg: "#E6DEDD",
    date: "Sept 2016 - Jan 2017",
    points: [
      "Taught web development lessons, covering topics from static web pages to API construction/consumption in Node.js",
      "Encouraged testable code and optimized runtime complexity, while promoting independent learning and problem-solving",
    ],
  },
];

export { services, technologies, experiences };
