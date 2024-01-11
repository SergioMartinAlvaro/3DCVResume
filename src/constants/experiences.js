import movilges from "../assets/images/movilges.png";
import retain from "../assets/images/retain.png";
import visma from "../assets/images/visma.png";
import future from "../assets/images/future.png";
import paradigma from "../assets/images/paradigma.jpg";
import confidencial from "../assets/images/confidencial.png";
import overture from "../assets/images/overture.png";
import encamina from "../assets/images/encamina.png";

const experiences = [
    {
        title: "Full Stack Developer",
        company_name: "Movilges",
        icon: movilges,
        iconBg: "#accbe1",
        date: "Jun 2017 - Nov 2017",
        points: [
            "Development of an application with Java 8 to Connect multiple servers with Sockets and multi-threads.",
            "Web Service in JEE2 and connections to databases (DB2. Oracle, SQLServer and MariaDB(MySQL)), use of PLSQL to create authomatic triggers.",
            "Develop of an application with laravel+js stack.",
            "Display application to different clients in live demostrations",
        ],
    },
    {
        title: "Full-stack Developer",
        company_name: "RetaIn",
        icon: retain,
        iconBg: "#fbc3bc",
        date: "Feb 2018 - Jun 2018",
        points: [
            "Symfony (PHP), debug and fix issues of the main application of the company.",
            "Javascript and jquery in the metioned application using twig templates.",
            "MySQL (MariaDB) and MongoDB, implementation with Angular 6 + NodeJS to create new application to the company.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "Visma Labs",
        icon: visma,
        iconBg: "#f1f1f1",
        date: "Jun 2018 - Oct 2019",
        points: [
            "Developing and maintaining web applications using Angular 6, ASP.NET and other related technologies.",
            "Maintaining and growing API portal of the company with Apigee and Azure Functions..",
            "Working on a scrum plan with cross-functional teams, continuous communication between designers, product managers and developers.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Front End Developer",
        company_name: "Future Space",
        icon: future,
        iconBg: "#accbe1",
        date: "Nov 2019 - Mar 2020",
        points: [
            "Developing and maintaining web applications using Angular 7, Java, MongoDB and other related technologies.",
            "Refactoricing application with JHipster, focusing in migrate application to Angular 7.",
            "Communicating with data and back-end team talking about new architecture of the project.",
            "Designing new layouts of refactorization using Adobe Photoshop and talking with Marketing team.",
        ],
    },
    {
        title: "Javascript and UI Developer",
        company_name: "El Confidencial",
        icon: confidencial,
        iconBg: "#000",
        date: "Nov 2020 - Oct 2021",
        points: [
            "Developing and maintaining online newspaper using Vanilla Javascript oriented with browser performance",
            "Designing and implementing Design Patterns into code",
            "Creating standard components library using LitElement with SCSS",
            "Developing of marketing campaigns using third-party applications as Mailchimp, Piano or DeepBI",
            "Continously communication with UX/UI team, designing mentioned marketing campaigns in Figma"
        ],
    },
    {
        title: "React & UI Developer",
        company_name: "Paradigma Digital",
        icon: paradigma,
        iconBg: "#141C26",
        date: "Oct 2021 - Feb 2022",
        points: [
            "Developing and maintaining MarkoJS architecture resolving Jira Tickets",
            "Designing onboarding team guideline using Figma Design & Prototyping",
            "Fixung of layout issues using SCSS and implementation of new Libraries using SCSS tools (Mixins, functions, vars...)",
            "Communicating with client to get information about new issues incoming (24/7).",
            "Deploying of applications using Azure using CI/CD"
        ],
    },
    {
        title: "React & UI Developer/Designer",
        company_name: "Overture Life",
        icon: overture,
        iconBg: "#f1f1f1",
        date: "Feb 2022 - Dec 2022",
        points: [
            "Developing and designing new features using React, NodeJS and Figma",
            "Taking decissions with the team about functional requirements and arquitecture of the project",
            "Generating documentation according to client requirements, continuously talking with marketing team",
            "Creating test plan with QA team to ensure application has the required standards",
            "Layouting using SCSS (Creation of animations, webpage modification...)"
        ],
    },
    {
        title: "React Developer",
        company_name: "Encamina",
        icon: encamina,
        iconBg: "#f1f1f1",
        date: "Dec 2022 - Present",
        points: [
            "Developing and maintaining web applications with Angular, React, NodeJS and SCSS",
            "Deploying and working with Azure, reviewing logs and costs to find potentially issues",
            "Solving bugs in a cross-functional team, cooperating with them to find better solutions",
            "Creating new components to React Library and layout them using Figma",
        ],
    },
];

export default experiences;