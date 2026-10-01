/* Personal portfolio configuration. */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const illustration = {animated: true};


const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 1500
};

const greeting = {
  username: "Zeyad Elmr3shly",
  title: "I build systems that solve real problems.",
  subTitle: emoji(
    "Full Stack Developer focused on backend engineering, scalable APIs, data-driven applications, and clean user experiences using .NET, Node.js, React, SQL, and modern web technologies."
  ),
  resumeLink:
    "https://drive.google.com/file/d/18w5AvGYRSM04T80p318KohqFPcC48Z9S/view?usp=drivesdk",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/zeyadzeca?tab=repositories",
  linkedin: "https://www.linkedin.com/in/zeyad-essam-56b82228b/",
  gmail: "zeyadzozakm@gmail.com",
  display: true
};

const aboutSection = {
  display: true,
  eyebrow: "About me",
  title: "Backend-minded. Full-stack capable.",
  image: require("./assets/images/Zeyad.jpg"),
  paragraphs: [
    "I’m a Computer Science student and Full Stack Developer who enjoys turning business requirements into reliable software. My strongest interest is backend engineering, where I design APIs, authentication flows, database structures, and the logic that keeps applications dependable.",
    "I also care about the product beyond the API. I build responsive React interfaces, work with SQL and NoSQL databases, and use analytics and Power BI to turn operational data into useful insights."
  ],
  facts: [
    {label: "Focus", value: "Backend & APIs"},
    {label: "Stack", value: ".NET · Node.js · React"},
    {label: "Data", value: "SQL · Power BI"}
  ]
};

const servicesSection = {
  display: true,
  eyebrow: "What I build",
  title: "From idea to working product.",
  subtitle:
    "I combine backend engineering, full-stack development, and data thinking to build products that are useful, maintainable, and ready to grow.",
  services: [
    {
      number: "01",
      title: "Backend & APIs",
      text: "RESTful APIs, authentication, authorization, business logic, validation, and integrations using .NET, Node.js, Express, and NestJS."
    },
    {
      number: "02",
      title: "Full-Stack Applications",
      text: "End-to-end web applications with React, modern frontend patterns, backend services, and database-driven workflows."
    },
    {
      number: "03",
      title: "Data & BI",
      text: "Data cleaning, SQL analysis, Power BI dashboards, and reporting workflows that turn raw business data into clear decisions."
    },
    {
      number: "04",
      title: "System Integration",
      text: "Connect services, databases, notifications, reports, and third-party tools into one coherent application workflow."
    }
  ]
};

const skillsSection = {
  title: "Technical Skills",
  subTitle:
    "A practical toolkit across backend engineering, frontend development, databases, and data.",
  skills: [],
  softwareSkills: [
    {skillName: "C# / .NET", fontAwesomeClassname: "fas fa-code"},
    {skillName: "Node.js", fontAwesomeClassname: "fab fa-node"},
    {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "React", fontAwesomeClassname: "fab fa-react"},
    {skillName: "HTML5", fontAwesomeClassname: "fab fa-html5"},
    {skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt"},
    {skillName: "SQL Server", fontAwesomeClassname: "fas fa-database"},
    {skillName: "MongoDB", fontAwesomeClassname: "fas fa-leaf"},
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "Git", fontAwesomeClassname: "fab fa-git-alt"},
    {skillName: "Docker", fontAwesomeClassname: "fab fa-docker"},
    {skillName: "Power BI", fontAwesomeClassname: "fas fa-chart-bar"}
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Ain Shams University",
      logo: require("./assets/images/AinShamsLogo.png"),
      subHeader: "B.Sc. in Computer Science",
      duration: "September 2023 - July 2027",
      desc: "Coursework across software engineering, data security, operating systems, algorithms, databases, computer architecture, and full-stack development.",
      descBullets: [
        "GPA: 3.45",
        "Built practical experience through 10+ software, backend, data, and systems projects."
      ]
    }
  ]
};

const techStack = {
  viewSkillBars: false,
  experience: []
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Full Stack .NET Web Developer Intern",
      company: "DEPI (Digital Egypt Pioneers Initiative)",
      companylogo: require("./assets/images/DEPI logo.png"),
      date: "July 2026 – March 2027",
      desc: "Accepted into DEPI's Full Stack .NET Web Development track, with hands-on training in modern frontend and backend development.",
      descBullets: [
        "Building full-stack applications with .NET and modern web development practices.",
        "Collaborating on practical development tasks using Git-based workflows and team collaboration."
      ]
    },
    {
      role: "Backend Development Trainee",
      company: "ITI (Information Technology Institute)",
      companylogo: require("./assets/images/itilogo.png"),
      date: "July 2026 - August 2026",
      desc: "Hands-on backend development training with Node.js, Express.js, and NestJS, focused on building and structuring RESTful APIs."
    },
    {
      role: "Data Analysis Trainee",
      company: "Oil & Gas Solutions Company",
      companylogo: require("./assets/images/oil&gasLogo.png"),
      date: "August 2025 – September 2025",
      desc: "Performed data cleaning, preprocessing, and analysis on company databases and communicated findings to support decision-making."
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: false
};

const bigProjects = {
  title: "Selected Projects",
  subtitle:
    "A few systems I built to practice real product workflows, backend architecture, and full-stack delivery.",
  projects: [
    {
      image: require("./assets/images/Corsiq.jpeg"),
      projectName: "Coursiq",
      projectDesc:
        "A full-stack academic course management platform built with React, Node.js, Express, and SQL Server, featuring JWT authentication, role-based authorization, prerequisite validation, curriculum management, GPA calculation, PDF/Excel reports, and email notifications.",
      footerLink: [
        {name: "GitHub", url: "https://github.com/nadaali0/Coursiq-"},
        {
          name: "Demo",
          url: "https://drive.google.com/file/d/1CfJorlQ1kUnh2ESuRHsgqJ3Gc5Fd5WG0/view?usp=sharing"
        }
      ]
    },
    {
      image: require("./assets/images/EduCourse.jpeg"),
      projectName: "EduCourse",
      projectDesc:
        "A learning platform that models real-world education workflows for students, instructors, and administrators, with course management and enrollment functionality.",
      footerLink: [
        {name: "GitHub", url: "https://github.com/zeyadzeca/CourseManagmentSystem"},
        {
          name: "Demo",
          url: "https://drive.google.com/file/d/1xsK30XJJ-RmeBCgJvmQpJsD4YLIwptkB/view?usp=sharing"
        }
      ]
    },
    {
      image: require("./assets/images/WorkFlow.jpeg"),
      projectName: "Task Workflow",
      projectDesc:
        "A workflow management system for organizing tasks, requests, status changes, and business processes in a structured application flow.",
      footerLink: [{name: "GitHub", url: "https://github.com/zeyadzeca/WorkFlowHub"}]
    },
    {
      image: require("./assets/images/FullStackFolio.png"),
      projectName: "FullStackFolio",
      projectDesc:
        "A responsive developer portfolio system customized into a personal professional site with a stronger information architecture, project storytelling, and conversion-focused sections.",
      footerLink: [
        {name: "GitHub", url: "https://github.com/zeyadzeca/FullStackFolio"}
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Selected professional milestones.",
  achievementsCards: [],
  display: false
};

const blogSection = {
  title: "Writing",
  subtitle: "Notes on backend engineering, software design, and data.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

const talkSection = {
  title: "Talks",
  subtitle: "Technical sessions and discussions.",
  talks: [],
  display: false
};

const podcastSection = {
  title: "Podcast",
  subtitle: "Conversations about software and technology.",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "View my experience, education, and technical background.",
  display: true
};

const contactInfo = {
  title: emoji("Let’s build something useful."),
  subtitle:
    "Open to internships, junior backend/full-stack opportunities, collaborations, and technical discussions.",
  number: "+20-1551601584",
  email_address: "zeyadzozakm@gmail.com"
};

const twitterDetails = {userName: "", display: false};
const isHireable = false;

export {
  aboutSection,
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  servicesSection,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

