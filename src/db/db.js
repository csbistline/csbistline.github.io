export const menuItems = [
  { title: 'ABOUT', anchor: '#about' },
  { title: 'PORTFOLIO', anchor: '#portfolio' },
  { title: 'EXPERIENCE', anchor: '#experience' },
  { title: 'EDUCATION', anchor: '#education' },
  { title: 'SKILLS', anchor: '#skills' },
  { title: 'INTERESTS', anchor: '#interests' },
]

export const aboutSection = {
  firstName: 'CHRIS',
  lastName: 'BISTLINE',
  address: 'NASHVILLE, TN 37206',
  phone: '(314) 650-1219',
  email: 'CHRIS.BISTLINE@GMAIL.COM',
  about: 'I\'m a software developer, business owner and communicator with 20+ years of professional experience, spanning multiple industries. I\'m always trying to learn something new and solve interesting problems. I have a passion for front-end development because it incorporates my creative design background with modern web technologies, allowing me to bring my work to a wider audience.',
  facebook: 'https://www.facebook.com/chris.bistline',
  linkedin: 'https://www.linkedin.com/in/christopher-bistline-a0999a115/',
  github: 'https://github.com/csbistline',
}

export const experienceSection = [
  {
    title: "SOFTWARE DEVELOPER",
    company: "PRECISE SYSTEMS, INC",
    city: "Brentwood, Tenn.",
    dates: "August 2019 - Present",
    description: "Designing the architecture of the front-end Vue.js client for new enterprise applications. Creating a reusable library of functional Vue components incorporating the Vuetify component library. Practice component-driven development using Jest. Maintain and add features to existing, mature legacy .NET web applications. Implement modifications to back-end API and database code when needed. Train and pair program with new Junior Developers. Follow agile workflow methodologies. Possess a Secret Security Clearance."

  },
  {
    title: "OWNER, DIRECTOR",
    company: "ENSLEY LLC/DELMAS LLC PROPERTIES",
    city: "Nashville, Tenn.",
    dates: "June 2013 - Present",
    description: "Manage portfolio of 20 residential rental property units made up of traditional long-term rentals and short-term vacation rentals. Screen tenants, perform minor maintenance, hire contractors for major repairs, manage finances, communicate with short-term guests."
  },
  {
    title: "STUDENT WEB DEVELOPER",
    company: "VANDERBILT UNIVERSITY CODING BOOTCAMP",
    city: "Nashville, Tenn.",
    dates: "January 2019 - July 2019",
    description: "Studied HTML5, CSS3, JavaScript, jQuery, Bootstrap, Express.js, React.js, Node.js, Database Theory, MongoDB, MySQL, Command Line, Git, and more. This program is offered through Vanderbilt University Owen Graduate School of Management and School of Engineering, in partnership with Trilogy Education Services, Inc."
  },
  {
    title: "SPORTS TEAM LEADER",
    company: "GANNETT NASHVILLE DESIGN STUDIO",
    city: "Nashville, Tenn.",
    dates: "May 2011 - June 2018",
    description: "As Sports Team Leader, managed 20+ designers and editors responsible for nightly production of 16 sports sections, MLB/NBA/NHL pages and national agate package used by all Gannett newspapers. As Senior Designer, responsible for design of news, sports and Sunday sections for two Florida newspapers."
  },
  {
    title: "ART DIRECTOR",
    company: "TIDE MEDIA",
    city: "Johannesburg, South Africa",
    dates: "January 2005 – December 2010",
    description: "Managed design and production of three leading technology magazines: New Age Gaming, SA Computer Magazine and Custom PC South Africa as well as several regular supplements. Wrote video game and consumer electronics reviews. Copy edited magazines. Traveled internationally to cover video game launches."
  }
]

export const educationSection = [
  {
    title: "VANDERBILT UNIVERSITY",
    company: "CODING BOOTCAMP",
    city: "Nashville, Tenn.",
    dates: "January 2019 - July 2019",
    description: "Full-Stack Web Development Track. Completed: July 2019"
  },
  {
    title: "INDIANA UNIVERSITY",
    company: "BA JOURNALISM",
    city: "Bloomington, Ind.",
    dates: "August 1993 - May 1997",
    description: "Secondary focus in Computer Science"
  },
]

export const interestSection = {
  description: "I'm a die-hard St. Louis Cardinals baseball fan. I travel to Florida every year to catch a few Spring Training games and participate in my fantasy baseball league draft, which a group of us has been doing regularly since 1996. I'm also a huge NFL and NHL fan. When I'm not sitting in front of a computer or watching sports, I enjoy cooking at home. I try to find new and interesting recipies online and try them out on my unsuspecting wife."
}

export const skillsSection = [
  {
    icon: "mdi-vuejs",
    altText: "VueJS"
  },
  {
    icon: "mdi-react",
    altText: "ReactJS"
  },
  {
    icon: "mdi-vuetify ",
    altText: "Vuetify UI library"
  },
  {
    icon: "mdi-bootstrap",
    altText: "Bootstrap UI library<br>React-Bootstrap"
  },
  {
    icon: "mdi-language-javascript",
    altText: "JavaScript<br>jQuery"
  },
  {
    icon: "mdi-nodejs",
    altText: "NodeJS"
  },
  {
    icon: "mdi-language-html5",
    altText: "HTML5"
  },
  {
    icon: "mdi-language-css3",
    altText: "CSS3"
  },
  {
    icon: "mdi-language-csharp ",
    altText: "C#"
  },
  {
    icon: "mdi-dot-net  ",
    altText: ".NET"
  },
  {
    icon: "mdi-database",
    altText: "SQL<br>Sequelize<br>MongoDB<br>Mongoose<br>Firebase"
  },
  {
    icon: "mdi-git",
    altText: "Git<br>Github"
  },
  {
    icon: "mdi-test-tube",
    altText: "Jest<br>Cypress"
  },
  {
    icon: "mdi-microsoft-azure-devops",
    altText: "Microsoft Azure DevOps"
  },
  {
    icon: "mdi-docker",
    altText: "Docker"
  },
]

export const portfolioSection = [
  {
    src: require("../assets/img/youarehere.jpg"),
    title: "You're lookin' at it",
    description: "My personal portfolio page, created with VueJS and the Vuetify UI component library.",
    link: "https://csbistline.github.io/",
    github: "https://github.com/csbistline/csbistline.github.io"
  },
  {
    src: require("../assets/img/serviceImg02.jpg"),
    title: "PARTS MANAGER",
    description: "Vanderbilt bootcamp final group project: A customer request and workflow-management system designed specifically to fit the needs of the Chrysler Dodge Jeep Ram parts department in Franklin, TN. A full-stack MERN application.",
    link: "https://parts-manager-hi5.herokuapp.com/",
    github: "https://github.com/csbistline/project3"
  },
  {
    src: require("../assets/img/gamerbook.png"),
    title: "GAMERBOOK",
    description: "Vanderbilt bootcamp second group project: A social networking site for fans of video games. Full-stack application.",
    link: "https://jk-cb-asp-project2.herokuapp.com/",
    github: "https://github.com/jryankendall/Vandy-Project-2"
  },
  {
    src: require("../assets/img/memory.jpg"),
    title: "MEMORY",
    description: "A memory-style game built with React. Click as many unique images as possible without clicking the same one twice.",
    link: "https://mlb-clicky-game.herokuapp.com/",
    github: "https://github.com/csbistline/clicky-game"
  },
  {
    src: require("../assets/img/deathstar2.jpg"),
    title: "STAR WARS FIGHTER",
    description: "A Star Wars-themed Javascript game - with real lightsaber sounds!",
    link: "https://csbistline.github.io/unit-4-game/",
    github: "https://github.com/csbistline/unit-4-game"
  }
]