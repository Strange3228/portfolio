import { TECH_ICONS } from "./tech-icons.const";

export interface Project {
  id: number;
  name: string;
  beginDate?: Date;
  endDate?: Date | 'current';
  description: string;
  bulletPoints: string[];
  link?: string;
  screenshotsUrls?: string[];
  techStack: string[];
  icon?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Company Website - DIS IT',
    beginDate: new Date('2024-03-01'),
    endDate: 'current',
    description: 'This project involved implementing website designs, enhancing user engagement with GSAP animations. SEO tasks boosted site visibility, while Angular Universal enabled server-side rendering for improved performance. Additionally, ngx-translate facilitated seamless internationalization support within the Angular application.',
    bulletPoints: [
      'Took full responsibility for implementing website pages according to provided designs',
      'Integrated GSAP into the project to add animations and transitions',
      'Improved website visibility and search engine ranking through SEO tasks',
      'Implemented Angular Universal for server-side rendering (SSR)',
      'Integrated the ngx-translate library for internationalization (i18n)support in the Angular application'
    ],
    link: 'https://www.disit.tech/',
    icon: 'assets/projects/disit/logo.png',
    techStack: [
      TECH_ICONS.angular,
      TECH_ICONS.universal,
      TECH_ICONS.gsap,
      TECH_ICONS.scss,
      TECH_ICONS.bootstrap
    ],
  },
  {
    id: 2,
    name: 'Dating Website',
    beginDate: new Date('2023-03-01'),
    endDate: 'current',
    description: 'Key contributor to high-traffic web applications, shaping real-time messaging, user profiles, and search features. Pioneered swipe functionality akin to dating apps. Seamlessly integrated into existing teams, adapting swiftly to coding standards. Thrived in a Scrum environment, utilizing Jira for efficient task management.',
    bulletPoints: [
      'Contributed to the development of web applications used by thousands of users daily',
      'Took part in developing real-time messaging, user profile management, search features, and interactive elements',
      'Developed a swipe functionality similar to dating websites, such as Tinder, Bumble',
      'Joined an ongoing project seamlessly integrating into the existing team',
      'Successfully adapted to the project\'s coding style and structure',
      'Worked within a Scrum environment, employing Jira for task tracking and management'
    ],
    techStack: [
      TECH_ICONS.angular,
      TECH_ICONS.scss,
      TECH_ICONS.jest,
      TECH_ICONS.karma,
      TECH_ICONS.sketch,
      TECH_ICONS.jira,
      TECH_ICONS.bitbucket
    ],
  },
  {
    id: 3,
    name: 'Angular-Based Enterprise Data Manager',
    beginDate: new Date('2023-01-01'),
    endDate: new Date('2023-03-01'),
    description: 'Effectively managed vast amounts of data by implementing Data Tables, improving accessibility and retrieval efficiency within the system. Collaborated seamlessly with multiple diverse teams concurrently, ensuring synergy and alignment across various projects and initiatives.',
    bulletPoints: [
      'Extensively utilized Data Tables to handle and organize vast amounts of information, enhancing data accessibility and retrieval within the system',
      'Worked with multiple diverse teams simultaneously'
    ],
    techStack: [
      TECH_ICONS.angular,
      TECH_ICONS.scss,
      TECH_ICONS.bootstrap,
      TECH_ICONS.jest,
      TECH_ICONS.karma,
      TECH_ICONS.jira,
      TECH_ICONS.bitbucket
    ],
  },
  {
    id: 4,
    name: 'Task Management System',
    beginDate: new Date('2022-10-01'),
    endDate: new Date('2023-01-01'),
    description: 'Effectively employed Trello for comprehensive project management, tracking progress with precision. Collaborated seamlessly with diverse teams, fostering synergy among backend developers and designers. Translated intricate Figma designs into Angular views with meticulous attention to detail, ensuring flawless rendering. Achieved exceptional test coverage exceeding 80% through rigorous Jest testing of Angular applications, ensuring robust functionality.',
    bulletPoints: [
      'Utilized Trello as a project management tool to record and monitor project progress',
      'Actively collaborated with cross-functional teams, including back-end developers and designers',
      'Translated Figma designs into meticulously crafted Angular views, ensuring a pixel-perfect representation',
      'Achieved test coverage of 80%+ though rigorous testing of Angular application using Jest'
    ],
    techStack: [
      TECH_ICONS.angular,
      TECH_ICONS.scss,
      TECH_ICONS.tailwind,
      TECH_ICONS.jest,
      TECH_ICONS.karma,
      TECH_ICONS.trello,
      TECH_ICONS.github
    ],
  },
  {
    id: 5,
    name: 'E-Commerce Admin Panel',
    beginDate: new Date('2022-06-01'),
    endDate: new Date('2022-09-01'),
    description: 'Led the development and upkeep of an e-commerce website\'s admin panel interface via Angular framework. Ensured security by implementing authentication and authorization features, regulating user access levels. Seamlessly integrated Angular services with backend APIs, facilitating smooth data flow and manipulation. Leveraged ngx-echarts for dynamic charting and data visualization, empowering informed decision-making through insightful analytics.',
    bulletPoints: [
      'Developed and maintained the admin panel interface for an e-commerce website using Angular framework',
      'Implemented authentication and authorization features to secure the admin panel and control user access level',
      'Integrated Angular services to interact with backend APIs, ensuring seamless data retrieval and manipulation',
      'Utilized ngx-echarts to implement interactive charts and data visualization features, providing valuable insights for decision-making'
    ],
    techStack: [
      TECH_ICONS.angular,
      TECH_ICONS.scss,
      TECH_ICONS.bootstrap,
      TECH_ICONS.trello
    ],
  },
  {
    id: 6,
    name: 'Research Park Web-Site',
    description: 'Crafted the "Research Park Web-Site" utilizing WordPress and jQuery, blending functionality with user-friendly design. Seamlessly integrated dynamic features powered by jQuery to enhance user experience and engagement. Leveraged WordPress\'s robust content management system to ensure easy maintenance and updates for efficient site management.',
    bulletPoints: [],
    techStack: [
      TECH_ICONS.html,
      TECH_ICONS.css,
      TECH_ICONS.js,
      TECH_ICONS.jquery,
      TECH_ICONS.wordpress,
      TECH_ICONS.gitlab
    ],
    icon: 'assets/projects/norwich/logo.svg',
    link: 'https://www.norwichresearchpark.com/'
  },
  {
    id: 7,
    name: 'Eco-friendly Bottles Shop',
    description: 'Developed the "E-Commerce Eco-friendly Bottles Shop" website, augmenting it with extensive functionality to accommodate a wide array of product variations. Leveraged WordPress and jQuery to create a seamless online shopping experience, ensuring easy navigation and efficient product browsing. Implemented specialized features to accommodate the diverse range of eco-friendly bottles, enhancing user satisfaction and promoting sustainable consumption.',
    bulletPoints: [],
    techStack: [
      TECH_ICONS.html,
      TECH_ICONS.css,
      TECH_ICONS.js,
      TECH_ICONS.jquery,
      TECH_ICONS.wordpress,
      TECH_ICONS.woocommerce
    ],
    icon: 'assets/projects/ecoset/logo.png',
    link: 'https://theecoset.com/'
  },
  {
    id: 8,
    name: 'Medical CBD Shop',
    description: 'Crafted the "E-commerce Medical CBD Shop" with a tailored approach, ensuring compliance and reliability for medicinal products. Seamlessly integrated WordPress and jQuery to create a user-centric platform that prioritizes accessibility and security. Implemented specialized features to cater to the unique requirements of medical CBD products, providing informative content and a smooth purchasing experience.',
    bulletPoints: [],
    techStack: [
      TECH_ICONS.html,
      TECH_ICONS.css,
      TECH_ICONS.js,
      TECH_ICONS.jquery,
      TECH_ICONS.wordpress,
      TECH_ICONS.woocommerce
    ],
  },
  {
    id: 10,
    name: 'Woman Clothes Shop',
    description: 'Designed and developed the "Woman Clothes Shop" website, leveraging the versatility of WordPress and jQuery to create a visually appealing and user-friendly platform. Tailored specifically for women\'s fashion, the website offers a seamless shopping experience with intuitive navigation and dynamic features.',
    bulletPoints: [],
    techStack: [
      TECH_ICONS.html,
      TECH_ICONS.css,
      TECH_ICONS.js,
      TECH_ICONS.jquery,
      TECH_ICONS.wordpress,
      TECH_ICONS.woocommerce
    ],
    icon: 'assets/projects/bykarol/logo.png',
    link: 'https://bykarol.pl/'
  },
  {
    id: 11,
    name: 'Yoga Nidras Platform',
    description: 'Crafted a dynamic platform on WordPress dedicated to yoga enthusiasts, hosting a directory of skilled instructors and personalized yoga nidra sessions. Empowered instructors to showcase their expertise, enabling seamless uploading and sharing of custom yoga nidra practices.',
    bulletPoints: [],
    techStack: [
      TECH_ICONS.html,
      TECH_ICONS.css,
      TECH_ICONS.js,
      TECH_ICONS.php,
      TECH_ICONS.wordpress
    ],
    icon: 'assets/projects/nidras/logo.png',
    link: 'https://www.yoganidranetwork.org/teachers/'
  },
  {
    id: 12,
    name: 'IMC Centrum Zdrowia',
    description: 'Led frontend development for the "IMC Centrum Zdrowia" website, seamlessly integrating it with WordPress for dynamic content management. Leveraged modern web technologies to ensure a visually appealing and responsive user interface. Implemented robust connectivity between the frontend and WordPress backend, enabling seamless data exchange and efficient content updates.',
    bulletPoints: [],
    techStack: [
      TECH_ICONS.html,
      TECH_ICONS.css,
      TECH_ICONS.js,
      TECH_ICONS.php,
      TECH_ICONS.wordpress
    ],
    icon: 'assets/projects/imc/logo.png',
    link: 'https://centrumimc.pl/'
  },
]
