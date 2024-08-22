// Colors are changed globally in _globalColor.scss

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true, // 
  animation: splashAnimation,
  duration: 1500
};

// Summary And Greeting Section
const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Tiana Silva",
  title: "Hi there, I'm Tiana",
  subTitle: emoji("Fullstack developer with a background in international education, enthusiastically pursuing any and all opportunities to learn and grow"),
  resumeLink:
    "https://docs.google.com/document/d/1GhxXGAJo4vd3Z9CTFI8lF2M6oZuvHXzVKUEfiY1X_zQ/edit?usp=sharing",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/t4tiana",
  linkedin: "https://www.linkedin.com/in/tianasilva/",
  gmail: "tianarenees@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Technical Skills",
  skills: [
    emoji(
      "⚡ Object-oriented programming with awareness of design patterns and enterprise architecture"
    ),
    emoji("⚡ Modern UI frameworks and style libraries for creating intuitive, user-friendly designs"),
    emoji(
      "⚡ RESTful APIs and an affinity for detailed documentation"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C#",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "PostgreSQL | T-SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Vue.js",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "Jira",
      fontAwesomeClassname: "fab fa-jira"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Tech Elevator",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: ".NET/C# Web Application Developer",
      duration: "January 2024 - April 2024",
      desc: "...",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "University of Strathclyde",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Master of Science in Business Management",
      duration: "September 2020 - September 2021",
      desc: "...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Associate Software Engineer",
      company: "OCLC",
      companylogo: require("./assets/images/oclc-logo.png"),
      date: "May 2024 – Present",
      //: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Develop high-quality enterprise software solutions for OCLC’s Worldshare Management Systems (WMS) SaaS product using Java, Spring, PostgreSQL, and React leading to successful RFP bids",
        "Investigate technical issues related to WMS’s Acquisitions service using debugging skills and code resolutions at or before expected times listed on Jira, enabling application to resume expected functionality to over 850 client institutions",
        "Collaborate closely with international, cross-functional agile team of 18 including developers, architects, QA, and product owners to understand client requirements and turn them into technical solutions"
      ]
    },
    {
      role: "Subject Matter Expert (Product)",
      company: "Strive Math (YC S21)",
      companylogo: require("./assets/images/strivemath_logo.jpeg"),
      date: "Sep 2023 – Dec 2023",
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Increased client acquisition from 3 to 9 within four months by capitalizing on knowledge of industry trends and collaborating with co-founders to create go-to-market strategy for new after-school coding program",
        "Maintained data in Airtable and wrote JavaScript automations to streamline client interactions and ensure consistent and timely communication with 150+ current and prospective customers",
        "Established and nurtured client partnerships, leading to more than 5x increase in student enrollment for company-hosted hackathon within two months of onboarding"
      ]
    },
    {
      role: "High School Economics Teacher and Team Lead",
      company: "International Schools",
      companylogo: require("./assets/images/globe.png"),
      date: "Aug 2016 – Jun 2023",
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Taipei, Taiwan - Dubai, UAE - Singapore",
        "Promoted to team lead positions in Taipei and Singapore coinciding with periods of curriculum overhaul and implementation of new learning management system. Facilitated change management and met all milestones ahead of project timelines",
        "Created data visualizations of exam results and periodically delivered findings to senior leadership, securing approval for increased headcount and justifying department budget allocation",
        "Regularly conducted data analysis of over 300 student exams and coordinated adaptation of assessments, resulting in students exceeding target achievement by an average of 12% each year"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const recentProjects = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Recent Projects",
  subtitle: "Things I've made to practice new languages, tools, and techniques",
  projects: [
    {
      image: require("./assets/images/ff-screen.png"),
      projectName: "The Fast and the Furious Movie Review Web App",
      projectDesc: "Java | Spring Boot | MongoDB | React",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/t4tiana/full-stack-movie-api/blob/main/README.md"
        }
        //  add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/dss-screen.png"),
      projectName: "Storage Auction Web App",
      projectDesc: "C# | .NET | T-SQL | Vue.js",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/t4tiana/storage-auction-app/blob/main/README.md"
        }
      ]
    },
    {
      image: require("./assets/images/venmo-clone-thumbnail.png"),
      projectName: "Command Line App",
      projectDesc: "C# | .NET | T-SQL",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/t4tiana/Venmo-Clone-project/blob/main/README.md"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "WIP",
      subtitle: "WIP",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.google.com"
        },
        {
          name: "Award Letter",
          url: "https://www.google.com"
        },
        {
          name: "Google Code-in Blog",
          url: "https://www.google.com"
        }
      ]
    },
    {
      title: "WIP",
      subtitle: "WIP",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "WIP",
          url: "https://www.google.com"
        }
      ]
    },

    {
      title: "WIP",
      subtitle: "WIP",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "WIP",
          url: "https://www.google.com"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY KNOWLEDGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "example.com"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Contact Me",
  subtitle:
    emoji("🌟 I enjoy meeting new people and discussing all things tech, education, and travel 🌟"),
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  recentProjects,
  bigProjects,
  achievementSection,
  talkSection,
  contactInfo,
  resumeSection
};
