import { TECH_ICONS } from "./tech-icons.const";

export interface ExperienceInterface {
  title: string;
  companyName: string;
  description: string;
  location: string;
  beginDate: Date;
  endDate: Date | 'current';
  techStack: string[];
  icon?: string;
}

export const EXPERIENCE: ExperienceInterface[] = [
  {
    title: 'Angular Developer',
    companyName: 'ITop1000',
    description: 'I transitioned into specializing as an Angular developer, engaging in diverse projects within an outsourcing environment. Notably, I contributed to the development of a high-traffic dating site, serving thousands of users daily.',
    location: 'Remote',
    beginDate: new Date('2022-11-01'),
    endDate: 'current',
    techStack: [
      TECH_ICONS.angular,
      TECH_ICONS.universal,
      TECH_ICONS.scss,
      TECH_ICONS.typescript,
      TECH_ICONS.karma,
      TECH_ICONS.jest,
      TECH_ICONS.jira,
      TECH_ICONS.bitbucket
    ],
    icon: 'assets/expirience_logos/itop1000_logo.jpg'
  },
  {
    title: 'Web Developer',
    companyName: 'Web Lorem',
    description: 'Early in my career, I ventured into establishing my own small development group. This experience provided me with valuable insights into client communication, problem-solving, and meeting tight deadlines, in addition to honing my front-end development skills.',
    location: 'Rzeszów',
    beginDate: new Date('2021-04-01'),
    endDate: new Date('2022-09-01'),
    techStack: [
      TECH_ICONS.angular,
      TECH_ICONS.css,
      TECH_ICONS.js,
      TECH_ICONS.html,
      TECH_ICONS.wordpress,
      TECH_ICONS.scss,
      TECH_ICONS.jquery,
      TECH_ICONS.php
    ],
    icon: 'assets/expirience_logos/weblorem_logo.jpg'
  },
  {
    title: 'Web Developer - Trainee',
    companyName: 'RoxArt',
    description: 'As a trainee, I delved into software development, absorbing knowledge and refining skills crucial for my career. This period instilled in me the fundamentals of teamwork, time management, and problem-solving, laying the groundwork for my journey into frontend development.',
    location: 'Rzeszów',
    beginDate: new Date('2021-01-01'),
    endDate: new Date('2021-04-01'),
    techStack: [
      TECH_ICONS.css,
      TECH_ICONS.js,
      TECH_ICONS.html,
      TECH_ICONS.wordpress
    ],
    icon: 'assets/expirience_logos/roxart_logo.png'
  }
]
