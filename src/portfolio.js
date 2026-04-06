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
  username: "Tiana Silva", //what goes in the logo
  title: "Hi there, I'm Tiana",
  subTitle: emoji(
    "Full stack engineer who enjoys creating seamless, inclusive, human-centered financial technology"
  ),
  resumeLink:
    "https://docs.google.com/document/d/1eImst5dvjtWaGFsoMWH7YHbF2wFMG1YNv_x9LNuY5u0/edit?usp=sharing",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/t4tiana",
  linkedin: "https://www.linkedin.com/in/tianasilva/",
  gmail: "tianarenees@gmail.com",
  display: true
};

// Skills Section

const skillsSection = {
  title: "Technical Skills",
  skills: [
    emoji(
      "⚡ Object-oriented programming with awareness of design patterns and enterprise architecture"
    ),
    emoji(
      "⚡ Modern UI frameworks and style libraries for creating intuitive, user-friendly designs"
    ),
    emoji("⚡ RESTful APIs and an affinity for detailed documentation")
  ],


  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
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
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Fulbright",
      logo: require("./assets/images/fullbright.png"),
      subHeader: "Grant Recipient",
      duration: "Taiwan 2015"
      // desc: "...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },
    {
      schoolName: "Teach for America",
      logo: require("./assets/images/tfa-logo-png.png"),
      subHeader: "Corps Member",
      duration: "San Antonio 2013"
      // desc: "...",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
  ]
};

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
  display: true,
  experience: [
    {
      role: "Software Engineer",
      company: "Visa",
      companylogo: require("./assets/images/visa-logo.png"),
      date: "Jul 2025 – Present",
      descBullets: [
        "Co-leading backend API development for payment authentication infrastructure, shipping configuration endpoints that enhance reliability of Visa's Cardinal Mobile SDK and deliver solutions for client customization",
        "Built a POC for a new AI-driven mobile product that demonstrated revenue potential, receiving executive endorsement and direction to enhance the prototype with additional capabilities",
        "Took ownership of stalled EMVCo 3DS certification effort, developing net-new features and fixing incomplete implementations to successfully certify CMSDK against 1000+ compliance tests and meet latest authentication standards"
      ]
    },
    {
      role: "Associate Software Engineer",
      company: "OCLC",
      companylogo: require("./assets/images/oclc-logo.png"),
      date: "May 2024 – Jul 2025",
      descBullets: [
        "Develop end-to-end enterprise software features for OCLC’s Worldshare Management Systems (WMS) SaaS product using Java, Spring, PostgreSQL, and React leading to successful RFP bids",
        "Investigate technical issues related to WMS’s Acquisitions microservices using debugging skills and code resolutions at or before expected times listed on Jira, enabling application to resume expected functionality to over 850 client institutions",
        "Collaborate closely with international, cross-functional agile team of 16 including developers, architects, QA, and product owners to understand client requirements and turn them into technical solutions"
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
    }
  ]
};

/* View Github Pinned Projects*/

const recentProjects = {
  showGithubProfile: "true",
  display: true
};

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
  display: true
};

// Achievement Section

const achievementSection = {
  title: emoji("Certifications"),
  subtitle: "",

  achievementsCards: [
    {
      title: "Google Project Management Certificate",
      subtitle: "2023",
      image: require("./assets/images/GCC_badge_PGM_1000x1000.png"),
      imageAlt: "Google Coursera PM Logo",
      footerLink: [
        {
          name: "Certificate Verification",
          url: "https://www.coursera.org/account/accomplishments/professional-cert/KKYQRBXUM5YG"
        }
      ]
    },
    {
      title: "Accredited Performance Coach",
      subtitle: "2021",
      image: require("./assets/images/coaching.jpeg"),
      imageAlt: "Coaching Logo",
      footerLink: [
        {
          name: "Culture at Work Website",
          url: "https://www.coachingcultureatwork.com/coach-training-teachers/"
        }
      ]
    }
  ],
  display: true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY KNOWLEDGE 😅"),

  talks: [
    {
      title: "Lorem ipsum dolor sit amet",
      subtitle: "Codelab at GDG DevFest",
      slides_url: "lorem ipsum",
      event_url: "example.com"
    }
  ],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: "Contact Me",
  subtitle: emoji(
    "🌟 I enjoy meeting new people and discussing all things tech, education, and travel 🌟"
  )
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
