import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Zeyad Elmr3shly",
  title: "Hi all, I'm Zeyad",
  subTitle: emoji(
    "I’m a passionate Full Stack Developer focused on turning business ideas into reliable, scalable digital solutions. I build full-stack web applications, robust backend APIs, and data-driven systems using modern technologies such as .NET, Node.js, React, and SQL. What sets me apart is my ability to go beyond building the system ,I can also transform its data into meaningful insights through analytics and interactive Power BI dashboards, helping businesses not only operate digitally, but understand and grow their business."
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

const skillsSection = {
  title: "What I do",
  subTitle:
    "FULL STACK DEVELOPER FOCUSED ON BACKEND SYSTEMS, WEB APPLICATIONS, AND DATA-DRIVEN SOLUTIONS",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications "
    ),
    emoji(
      "⚡Design and develop RESTful APIs with authentication and authorization "
    ),
    emoji(
      "⚡ Turn business data into interactive Power BI dashboards and useful insights"
    ),
    emoji(
      "⚡ Work with SQL and NoSQL databases to build reliable data-driven applications"
    )
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: ".NET",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },

    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Ain Shams University",
      logo: require("./assets/images/AinShamsLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2023 - April 2027",
      desc: "Ranked top 4% in the Operating System Course. Took courses about Software Engineering, Data Security, Operating Systems, algorithms, databases, and computer Architecture.",
      descBullets: [
        "GPA: 3.45",
        "Developing practical experience in more than 10 projects through full-stack, backend, data analysis, and software engineering courses."
      ]
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    },
    {
      Stack: "Frontend/Design",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Full Stack .NET Web Developer Intern",
      company: "DEPI (Digital Egypt Pioneers Initiative)",
      companylogo: require("./assets/images/DEPI logo.png"),
      date: "July 2026 – March 2027",
      desc: "Accepted into DEPI's competitive Full Stack .NET Web Development track, a national technical training initiative.",
      descBullets: [
        "Building full-stack web applications through hands-on frontend and backend training using .NET and modern web development practices.",
        "Collaborating with peers on real-world development tasks, applying Git-based version control and adapting to new tools and workflows."
      ]
    },
    {
      role: "Backend Development Trainee",
      company: "ITI (Information Technology Institute)",
      companylogo: require("./assets/images/itilogo.png"),
      date: "July 2026 - August 2026",
      desc: "Training in backend development with Node.js, building hands-on experience with each new module through applied work. Working with Express.js and NestJS to build and structure RESTful APIs, alongside advanced JavaScript beyond core fundamentals."
    },
    {
      role: "Data Analysis Trainee",
      company: "Oil & Gas Solutions Company",
      companylogo: require("./assets/images/oil&gasLogo.png"),
      date: "August 2025 – September 2025",
      desc: "Performed data cleaning, preprocessing, and analysis on company databases, communicating findings clearly to support decision-making."
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: false
};

const bigProjects = {
  title: "Big Projects",
  subtitle: "Real-world ideas, transformed into functional digital solutions",
  projects: [
    {
      image: require("./assets/images/EduCourse.jpeg"),
      projectName: "EduCourse",
      projectDesc:
        "EduCourse simulates real-world educational systems such as Udemy and Coursera by providing complete learning workflows for students, instructors, and administrators.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/zeyadzeca/CourseManagmentSystem"
        },
        {
          name: "Demo",
          url: "https://drive.google.com/file/d/1xsK30XJJ-RmeBCgJvmQpJsD4YLIwptkB/view?usp=sharing"
        }
      ]
    },
    {
      image: require("./assets/images/Corsiq.jpeg"),
      projectName: "Coursiq",
      projectDesc:
        "A full-stack academic course management platform built with React, Node.js, Express, and SQL Server. The system includes secure JWT authentication and role-based authorization, course enrollment, prerequisite validation, curriculum management, grade tracking, GPA calculation, automated PDF and Excel reports, and email notifications.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/nadaali0/Coursiq-"
        },
        {
          name: "Demo",
          url: "https://drive.google.com/file/d/1CfJorlQ1kUnh2ESuRHsgqJ3Gc5Fd5WG0/view?usp=sharing"
        }
      ]
    },
    {
      image: require("./assets/images/WorkFlow.jpeg"),
      projectName: "Task Workflow",
      projectDesc:
        "A full-stack workflow management system designed to organize tasks and business processes, manage requests and status changes, and provide users with a structured way to monitor and complete ongoing workflows.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/zeyadzeca/WorkFlowHub"
        }
      ]
    },
    {
      image: require("./assets/images/FullStackFolio.png"),
      projectName: "FullStackFolio",
      projectDesc:
        "A modern, clean, responsive, and customizable portfolio template built by ZNteam.This project helps developers and professionals create their own personal portfolio websites quickly and easily.Clone it, update the configuration, and publish a site that presents your skills, experience, projects, and professional presence.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/zeyadzeca/FullStackFolio"
        },
        {
          name: "Demo",
          url: "https://drive.google.com/file/d/1Xy0uNAhjmVPVa4SfVy4HfkI--IX79oZv/view?usp=sharing"
        }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Certifications, awards, and other professional milestones.",
  achievementsCards: [],
  display: false
};

const blogSection = {
  title: "Blogs",
  subtitle:
    "Notes on software engineering, backend systems, and building useful products.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

const talkSection = {
  title: "TALKS",
  subtitle: emoji("Talks and technical sessions"),
  talks: [],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Conversations about software and technology",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Open to opportunities, collaborations, and technical discussions. My inbox is always available.",
  number: "+20-1551601584",
  email_address: "zeyadzozakm@gmail.com"
};

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = false;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
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
