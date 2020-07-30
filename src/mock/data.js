import { nanoid } from 'nanoid';
import bank_project from '../images/bank_project.png';
import myResume from '../images/RichardChenResume.pdf';

// HEAD DATA
export const headData = {
  title: 'Richard Chen Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello! My name is ',
  name: 'Richard Chen',
  subtitle: 'I am a software engineer.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `Hello! My name is Richard Chen! I'm studying computer science and materials engineering at the University of Maryland, College Park. I'm seeking new graduate software engineering positions!`,
  paragraphTwo: ' ',
  paragraphThree: ' ',
  resume: myResume, // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'cs_project',
    title: 'Analysis of the Professional Counter Strike Global Offensive Circuit',
    info: `Created a Python tutorial on the entire data science pipeline from data sourcing, data processing to generating a predictive model on the future performance of a Counter-Strike team.`,
    info2: '',
    url: 'https://richchen11.github.io/',
    repo: 'https://github.com/richchen11/richchen11.github.io', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'bank_project',
    title: 'Secure Bank ATM System',
    info: `Designed and engineered a secure bank, ATM, and router system in C that
    was resilient to various cybersecurity attacks.`,
    info2: '',
    url: bank_project,
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/97chenrichard/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/richchen11',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
