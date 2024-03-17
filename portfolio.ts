import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
  AchievementsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Pranav Patil",
  title: "Hey Everyone, I'm Pranav",
  description:
    "I am a Full Stack Developer with a passion for learning and a diverse skill set. My expertise spans across various projects and technologies, including C++, React.js, Node.js, Java, and Springboot. I am deeply committed to expanding my knowledge and mastering new technologies. Beyond coding, I find joy in traveling and exploring new places, as well as immersing myself in music.",
  resumeLink: "https://drive.google.com/file/d/1rx89YgSy6hJoS_IjV3X9vNSKIOCzmpfz/view?usp=sharing",
};

export const openSource = {
  githubUserName: "Pranav915",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:patilpranav915@gmail.com",
  linkedin: "https://www.linkedin.com/in/pranav915/",
  github: "https://github.com/Pranav915",
  instagram: "https://www.instagram.com/Pranav.915",
  // facebook: 'https://www.facebook.com/1hanzla100',
  twitter: "https://twitter.com/Pranavp20539092",
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Creating dynamic React.js web apps for seamless UX."),
        emoji("⚡ Designing RESTful APIs with Spring Boot & NodeJS for data integration."),
        emoji("⚡ Expertise in developing MERN stack apps."),
      ],
      softwareSkills: [
        {
          skillName: "Cpp",
          iconifyTag: "vscode-icons:file-type-cpp",
        },
        {
          skillName: "Java",
          iconifyTag: "vscode-icons:file-type-java",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Springboot",
          iconifyTag: "logos:spring",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nodejs",
          iconifyTag: "logos:nodejs",
        },
        {
          skillName: "MongoDB",
          iconifyTag: "logos:mongodb",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Android Studio",
          iconifyTag: "logos:android",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Indian Institute Of Technology, Indore",
    subHeader: "Bachelor of Technology in Mechanical Engineering",
    duration: "November 2020 - May 2024",
    desc: "",
    grade: "Grade A",
    descBullets: [], // Array of Strings
  },
];

export const achievementInfo: AchievementsType[] = [
  {
    achievementTitle: "University of Central Punjab",
    description: "Bachelor of Science in Computer Science",
    duration: "September 2017 - April 2020",
    desc: "",
    grade: "Grade A",
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Software Development Engineer Intern",
    company: "Walmart Global Tech.",
    companyLogo: "/img/icons/common/walmart.jpeg",
    date: "May 2023 - August 2023",
    desc: "During my internship at Walmart Global Tech, I collaborated on various projects that honed my skills in backend and frontend development. I played a pivotal role in developing APIs and middleware using SpringBoot for seamless integration, as well as contributing to UI enhancements and API integration with React.js. Additionally, I led the development of API adapters to streamline access to critical Walmart APIs across teams, and spearheaded the migration of multiple apps to JFrog, optimizing repository management and software delivery.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "Hunter’s Paradise",
    desc: "Hunter's Paradise is a dynamic online platform for real-time buying and selling of rare products through auctions and deals, significantly improving user interaction. Implemented a Real time dashboard, chat Integration & Real time notification system.",
    github: "https://github.com/Pranav915/HuntersParadise",
    // link: "https://developer-portfolio-1hanzla100.vercel.app/",
  },
  {
    name: "Cinemania",
    desc: "Cinemania is a movie recommendation platform that offers personalized movie suggestions, diverse movie categories, user authentication, and admin movie management. This project was developed as a group project from September 2023 to October 2023.",
    github: "https://github.com/Pranav915/Cinemania",
  },
  {
    name: "Connect",
    desc: "Connect is a dynamic MERN stack social platform designed for seamless communication and connection with friends. With real-time chat functionality powered by SocketIO, users can engage in instant conversations and expand their social circles effortlessly.",
    github: "https://github.com/Pranav915/Connect",
  },
  {
    name: "BucketDrop",
    desc: "BucketDrop is an interactive MERN stack-based game that offers a unique drag-and-drop gaming experience. With live score updates and a countdown timer, players can enjoy immersive gameplay while competing to achieve high scores and complete challenges.",
    github: "https://github.com/Pranav915/BucketDrop",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Syed Jamal",
    role: "Frontend Developer at Meganos Software",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Wajahat Malek",
    role: "CEO at Duseca Software",
    feedback:
      "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
  {
    name: "Zaid Zaffar",
    role: "CEO at ZR Technologies",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Pranav Patil",
  description: greetings.description,
  author: "Pranav Patil",
  image: "https://avatars.githubusercontent.com/u/80574561?s=400&u=12a61358eb07ce4da94542e2e99794b4c6c0828d&v=4",
  url: "https://developer-portfolio-pranav-patil.vercel.app/",
  keywords: [
    "Pranav",
    "Pranav Patil",
    "@pranav915",
    "pranav915",
    "Pranav.915",
    "Pranav915",
    "Portfolio",
    "Pranav's Portfolio ",
    "Pranav Patil Portfolio",
    "Web Developer",
    "Software Engineer",
  ],
};
