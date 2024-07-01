import React from "react";
import { FaCode, FaReact } from "react-icons/fa";
import {
  SiAmazon,
  SiAsana,
  SiBootstrap,
  SiCss3,
  SiDjango,
  SiExpo,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFramer,
  SiGit,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJirasoftware,
  SiJson,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedux,
  SiRevue,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
  SiUnrealengine,
  SiVuedotjs,
} from "react-icons/si";
import { LuGraduationCap } from "react-icons/lu";
import instagramClonImg from "@/public/projects/Screenshot (4).png";
import renderWebImg from "@/public/projects/Screenshot (3).png";
import interactiveRenderImg from "@/public/projects/images.jpg";
import interactiveRenderImg2 from "@/public/projects/Screenshot (5).png";
import febletics from "@/public/projects/febletics.png";
import revbit from "@/public/projects/revbit.png";

import portfolioWebImg from "@/public/projects/Screenshot (1).png";
import ecommerceAppImg from "@/public/projects/ecommerce-app.png";
import blogAppImg from "@/public/projects/Screenshot.png";
import taskManagerAppImg from "@/public/projects/Screenshot (2).png";
import djangoAppImg from "@/public/projects/django-app.png";
import googleProjectManagementImg from "@/public/certifications/google-project-management.png";
import ibmNodeJsImg from "@/public/certifications/ibm-node-js.png";
import metaFrontEndDeveloperImg from "@/public/certifications/meta-front-end-developer.png";
import metaBackEndDeveloperImg from "@/public/certifications/meta-back-end-developer.png";
import metaReactNativeImg from "@/public/certifications/meta-react-native-specialization.png";
import platziOOPImg from "@/public/certifications/platzi-oop.png";
import platziHtmlCssImg from "@/public/certifications/platzi-html-css.png";

const en = {
  links: [
    {
      name: "Home",
      hash: "#home",
    },
    {
      name: "About",
      hash: "#about",
    },
    {
      name: "Projects",
      hash: "#projects",
    },
    {
      name: "Skills",
      hash: "#skills",
    },
    // {
    //   name: "Certifications",
    //   hash: "#certifications",
    // },
    {
      name: "Experience",
      hash: "#experience",
    },
    {
      name: "Contact",
      hash: "#contact",
    },
  ],
  intro: {
    greeting: "Amir Mehmood",
    heading: "Senior Software Engineer",
    main: "I develop high-quality web Applications",
    second:
      "My main stack includes JavaScript, Node.js, Nest.js, React, Next.js, PHP and Laravel among other key technologies.",
    contactButton: "Contact me here",
    downloadCV: "Download CV",
  },
  about: {
    title: "About me",
    first:
      "I am a Senior Software Engineer with over 6 years of experience, I specialize in developing scalable, high-performance software solutions. I am familiar with Agile and Scrum methodologies, as well as the use of version control tools like Git.",
    second:
      "Being from a technical background, I can understand requirement briefs and deliver great results accordingly. I aim to work in an organized, proactive organization where my passion and skills are combined with strategy. My dedication and experience are evident in polished and high-quality projects.",
    data: [
      {
        icon: React.createElement(SiReact),
        color: "#61dafb",
      },
      {
        icon: React.createElement(SiNodedotjs),
        color: "#8cc84b",
      },
      {
        icon: React.createElement(SiExpress),
        color: "#000000",
      },
      {
        icon: React.createElement(SiMongodb),
        color: "#4db33d",
      },
      {
        icon: React.createElement(SiNextdotjs),
        color: "#000000",
      },
      {
        icon: React.createElement(SiJavascript),
        color: "#f0db4f",
      },
      {
        icon: React.createElement(SiTypescript),
        color: "#3178c6",
      },
      {
        icon: React.createElement(SiNestjs),
        color: "#e0234e",
      },
      {
        icon: React.createElement(SiLaravel),
        color: "#F72C1F",
      },
      {
        icon: React.createElement(SiGit),
        color: "#f1502f",
      },
    ],
  },

  projects: {
    title: "My Projects",
    data: [
      {
        title: "Fabletics",
        description:
          "Fabletics is a global, active lifestyle brand that sells both men's and women's sportswear, footwear and accessories, At Fabletics, we champion every one and every body. Our Fabletics Cares mission remains focused on authentic, inclusive health and wellness for every community.",
        tags: [
          "React",
          "Next.js",
          "Node.js",
          "Nest.js",
          "TypeScript",
          "Graphql",
        ],
        imageUrl: febletics,
        repositoryUrl: "#",
      },
            // RevBits is a leading developer of next-generation endpoint security, privileged access management (PAM), and phishing detection solutions.

      {
        title: "RevBits",
        description:
          "RevBits is a leading developer of next-generation endpoint security, privileged access management (PAM), and phishing detection solutions.",
        tags: [
          "React",
          "Node.js",
          "Express.js",
          "TypeScript",
        ],
        imageUrl: revbit,
        repositoryUrl: "#",
      },
      {
        title: "InvoHub",
        description:
          "Invohub is an advanced resource management system designed to optimize the allocation and utilization of resources within an organization. It offers a comprehensive suite of tools and features that cater to the diverse needs of project managers, HR professionals, and team leaders.",
        tags: [
          "React",
          "Node.js",
          "Express.js",
          "TypeScript",
          "Tailwind",
          "Postgres",
        ],
        imageUrl: taskManagerAppImg,
        repositoryUrl: "#",
        // demoType: "Deploy",
        // demoUrl: "https://hub.invozone.com/login",
      },
      {
        title: "InvoDesk",
        description:
          "A time tracking tool for remote & in house teams. Automate productivity tracking with InvoDesk for complete project management, transparency and accountability.",
        tags: ["Node.js","Nest.js","Next.js", "React", "TypeScript", "chakra ui", "GraphQL","Mongo-DB","Prisma"],
        imageUrl: portfolioWebImg,
        repositoryUrl: "https://github.com/hernanhawryluk/portfolio-nextjs-app",
        // demoType: "Deploy",
        // demoUrl: "https://invodesk.io/",
      },

      {
        title: "InvoChat",
        description:
          "InvoChat promises to redefine communication at your workplace. It connects the entire office, providing a reliable and faster medium to work",
        tags: [
          "Node.js",
          "Express.js",
          "React",
          "TypeScript",
          "Tailwind",
          "Postgres",
        ],
        imageUrl: blogAppImg,
        repositoryUrl: "#",
        // demoType: "Deploy",
        // demoUrl:"https://invochat.io/",
      },
      {
        title: "E-commerce Web Application",
        description:
          "Responsive design, user and Google authentication, intuitive shopping cart, Stripe payment integration, product reviews, dashboard for product and order management.",
        tags: [
          "Node.js",
          "Express.js",
          "React",
          "TypeScript",
          "Tailwind",
          "Mongo-DB",
        ],
        imageUrl: ecommerceAppImg,
        repositoryUrl: "#",
        // demoType: "Deploy",
        // demoUrl: "#",
      },
      {
        title: "Cartpanda",
        description:
          `Cartpanda sells digital and physical products created by passionate entrepreneurs all over the world. if you see a charge form Cartpanda on your bill or stagement, it means that you've made a purchage form an online merchant that uses Cartpanda to process their orders.`,
          tags: ["PHP", "Laravel", "React", "HTML","CSS","MySQL"],
        imageUrl: interactiveRenderImg,
        repositoryUrl:
          "#",
        // demoType: "Deploy",
        // demoUrl: "#",
      },
      {
        title: "portal-e-corsi",
        description:
          `The first site to sell and buy courses. Search and purchase courses according to your needs. Advertise your courses for free. Activate online registrations.`,
          tags: ["PHP", "Laravel", "HTML","CSS","AJAX","MySQL","API Integration","Database Design"],
        imageUrl: interactiveRenderImg2,
        repositoryUrl:
          "#",
        // demoType: "Deploy",
        // demoUrl: "https://www.portalecorsi.com/",
      },
      {
        title: "TheWorkGenies",
        description:
          `TheWorkGenies! A bridge between employers & employees that 
          provides secure, reliable, simple & easy services for both sides. As 
          job candidates TheWorkGenies gives a lengthy opportunity to 
          post resumes that will be accessible to hundreds of companies.`,
          tags: ["PHP", "Laravel", "HTML","CSS","MySQL"],
        imageUrl: interactiveRenderImg,
        repositoryUrl:
          "#",
        // demoType: "Deploy",
        // demoUrl: "#",
      },
      {
        title: "Edworld",
        description:
          "Your trusted study abroad consultants. We are a top educational consultancy firm with a 100% student success rate. Our team is approved by the QEAC, ICEF & British Council to facilitate your study abroad journey.",
        tags: ["PHP", "Laravel", "HTML","CSS","MySQL"],
        imageUrl: instagramClonImg,
        repositoryUrl: "#",
        // demoType: "Deploy",
        // demoUrl: "https://edworld.com.pk/",
      },
      {
        title: "Ankor Management",
        description:
          "Ankor Management focuses on high-quality professional real estate management and marketing services for investors located outside of the United States.",
          tags: ["PHP", "Laravel", "HTML","CSS","MySQL"],
          imageUrl: renderWebImg,
        repositoryUrl: "#",
        // demoType: "Deploy",
        // demoUrl: "https://ankormanagement.com/",
      } 
    ],
  },
  skills: {
    title: "My Skills",
    data: 
    [
      {
        skill: "JavaScript",
        icon: React.createElement(SiJavascript),
        color: "#f0db4f",
      },
      {
        skill: "TypeScript",
        icon: React.createElement(SiTypescript),
        color: "#3178c6",
      },
      {
        skill: "Node.js",
        icon: React.createElement(SiNodedotjs),
        color: "#8cc84b",
      },
      {
        skill: "Express",
        icon: React.createElement(SiExpress),
        color: "#4b4c4c",
      },
      {
        skill: "Nest",
        icon: React.createElement(SiNestjs),
        color: "#e0234e",
      },
      {
        skill: "React",
        icon: React.createElement(SiReact),
        color: "#61dafb",
      },
      {
        skill: "Redux",
        icon: React.createElement(SiRedux),
        color: "#7248b6",
      },
      {
        skill: "Next.js",
        icon: React.createElement(SiNextdotjs),
        color: "#9f9f9f",
      },
      {
        skill: "Vue",
        icon: React.createElement(SiVuedotjs),
        color: "#3fb27f",
      },
      {
        skill: "PHP",
        icon: React.createElement(SiPhp),
        color: "#7377AD",
      },
      {
        skill: "Laravel",
        icon: React.createElement(SiLaravel),
        color: "#F72C1F",
      },
      {
        skill: "MongoDB",
        icon: React.createElement(SiMongodb),
        color: "#4db33d",
      },
      {
        skill: "MySQL",
        icon: React.createElement(SiMysql),
        color: "#3498db",
      },
      {
        skill: "PostgreSQL",
        icon: React.createElement(SiPostgresql),
        color: "#3498db",
      },
      {
        skill: "Firebase",
        icon: React.createElement(SiFirebase),
        color: "#ffcb2b",
      },
      {
        skill: "REST API",
        icon: React.createElement(SiJson),
        color: "#44b78b",
      },
      {
        skill: "GraphQL",
        icon: React.createElement(SiGraphql),
        color: "#DE33A6",
      },
      {
        skill: "HTML",
        icon: React.createElement(SiHtml5),
        color: "#e34f26",
      },
      {
        skill: "CSS",
        icon: React.createElement(SiCss3),
        color: "#264de4",
      },
      {
        skill: "Tailwind",
        icon: React.createElement(SiTailwindcss),
        color: "#38bdf8",
      },
      {
        skill: "Bootstrap",
        icon: React.createElement(SiBootstrap),
        color: "#7952b3",
      },
      {
        skill: "Prisma",
        icon: React.createElement(SiPrisma),
        color: "#02223f",
      },
      {
        skill: "AWS",
        icon: React.createElement(SiAmazon),
        color: "#575C68",
      },
      {
        skill: "Git",
        icon: React.createElement(SiGit),
        color: "#f05032",
      },
      {
        skill: "Jira",
        icon: React.createElement(SiJirasoftware),
        color: "#0052cc",
      },
    ]
  },
  certifications: {
    title: "Certificaciones",
    data: [
      {
        imageUrl: metaFrontEndDeveloperImg,
      },
      {
        imageUrl: metaBackEndDeveloperImg,
      },
      {
        imageUrl: metaReactNativeImg,
      },
      {
        imageUrl: googleProjectManagementImg,
      },
      {
        imageUrl: ibmNodeJsImg,
      },
      {
        imageUrl: platziOOPImg,
      },
      {
        imageUrl: platziHtmlCssImg,
      },
    ],
  },
  experience: {
    title: "My Experience",
    data: [
      {
        title: "Senior Software Engineer",
        location: "InvoZone, Pakistan, Lahore",
        description:
          `I am working at Invozone as a Senior Software Engineer. I lead projects involving various JavaScript
          technologies. My responsibilities include developing and maintaining applications optimizing performance,
          and troubleshooting issues. I specialize in frameworks like React and Node JS. Additionally, I mentor junior
          developers and promote a culture of innovation and collaboration within the team.`,
        icon: React.createElement(FaCode),
        date: "November 2021 - June 2024",
      },
      {
        title: "Software Engineer",
        location: "Renesis Tech, Pakistan, Lahore",
        description:
          `As a Software Engineer at Renesis Tech Company, I've been instrumental in developing and maintaining critical systems, ensuring they run smoothly and efficiently. Here's how:
          Develop a RESTful API backend for a real-time project management application, improving task tracking and collaboration.
          I utilized GraphQL to optimize data fetching, reducing unnecessary data transfer and enhancing application responsiveness.
          Play a key role in implementing a microservices architecture, enhancing scalability and maintainability.
          Played a pivotal role in troubleshooting and resolving production issues, minimizing downtime, and ensuring uninterrupted services.`,
        icon: React.createElement(FaReact),
        date: "July 2019 - November 2021",
      },
      {
        title: "Software Engineer",
        location: "Dominion Global, Pakistan, Lahore",
        description:
        `As a Software Engineer at Dominion Global, I specialized in PHP Laravel development, focusing primarily on
        backend web programming and the implementation of new features, My expertise includes working with HTML,
        CSS, Bootstrap, MySQL, and JQuery, as well as frameworks like CodeIgniter and Laravel. in this role, I was
        responsible for maintaining and enhancing backend systems, ensuring their smooth operation, and developing
        new functionalities to meet business requirements`,
        icon: React.createElement(LuGraduationCap),
        date: "May 2017 - July 2019",
      },
    ],
  },
  contact: {
    title: "Contact Me",
    message:
      "Don't hesitate to get in touch! I'm excited about new job opportunities. You can do so through this form, by sending me a direct email, or by connecting with me on LinkedIn. Looking forward to connecting!",
    placeholderEmail: "Your email",
    placeholderMessage: "Your message",
    buttonSubmit: "Submit",
    buttonCopy: "Copy Email Address",
    toastSent: "Email sent successfully!",
    // toastCaptcha: "Verify captcha before sending.",
    toastCopied: "Email address copied to clipboard!",
  },
  footer: {
    text: "All rights reserved.",
    // subtitle: "About this website",
    // about:
    //   "built with Node, Nest, React, Next, TypeScript, Tailwind CSS, React Email & Resend, Vercel hosting.",
  },
  buttons: {
    theme: "Change theme",
    language: "Change language",
  },
};

export default en;
