import {
  AcademicCapIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/Farhan.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Curriculum Vitae',
  description: "CV built of Farhan Muhammad Joesuli",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * /*helping build a modern, mobile-first, domain registrar and site builder.
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Farhan Muhammad Joesuli.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Farhan based <strong className="text-stone-100">Full Stack Software Engineer</strong>, I'm a Vocational High School
        at <strong className="text-stone-100">SMK PKP 1</strong> 
      </p>
    
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me  <strong className="text-stone-100">Running</strong>,
        <strong className="text-stone-100"> Cycling</strong>, playing some 
        <strong className="text-stone-100"> games</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Indonesian Island</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: `#${SectionId.Portfolio}`,
      text: 'Portfolio',
      primary: true,
      
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'am a vocational high school student majoring in Software Engineering.
  I enjoy learning programming and building simple projects using web technologies.
  In my free time, I like playing games, doing basic video editing, and listening to music.
  I consider myself curious, adaptable, and always eager to learn new skills.`,

  aboutItems: [
    {label: 'Location', text: 'Jakarta, Indonesia', Icon: MapIcon},
    {label: 'Age', text: '18', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indonesia', Icon: FlagIcon},
    {label: 'Interests', text: 'Playing Games, Editing, Music / Song enjoyer', Icon: SparklesIcon},
    {label: 'Study', text: 'SMK PKP 1', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Unemployed', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Indonesia',
        level: 10,
      },
      {
        name: 'English',
        level: 6.5,
      },

    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 8,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'CSS',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 6,
      },
      {
        name: 'Java',
        level: 5,
      },
      {
        name: 'Javascript (ES6+)',
        level: 6,
      },
    ],
  },
{
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 7,
      },
      {
        name: '-',
        level: 0,
      },
      {
        name: '-',
        level: 0,
      },
    ],
  },
  {
      name: 'Editing Software',
      skills: [
      {
        name: 'Adobe After Effect',
        level: 6,
      },
      {
        name: 'Adobe Illustrator',
        level: 5.8,
      },
      {
        name: 'Capcut',
        level: 7,
      },
      
    ],
  },
];



/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://www.instagram.com/hanntanase/',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://www.instagram.com/hanntanase/',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://www.instagram.com/hanntanase/',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://www.instagram.com/hanntanase/',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://www.instagram.com/hanntanase/',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://www.instagram.com/hanntanase/',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://www.instagram.com/hanntanase/',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://www.instagram.com/hanntanase/',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://www.instagram.com/hanntanase/',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://www.instagram.com/hanntanase/',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://www.instagram.com/hanntanase/',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2015-2021',
    location: 'SDN 04 Munjul',
    title: 'Elementary School',
    content: <p>Studied basic literacy and numeracy, including reading, writing, and mathematics.
        Developed discipline, teamwork, and responsibility through academic and school activities.</p>,
  },
  {
    date: '2021-2024',
    location: 'SMPN 230 Jakarta',
    title: 'Junior High School',
    content: <p>Learned core subjects such as mathematics, science, social studies, and English.
        Improved critical thinking, communication skills, and teamwork through class projects and group activities.</p>,
  },
  {
    date: '2024 - Present',
    location: 'SMK PKP 1',
    title: 'Vocational High School',
    content: <p>
      Studying software engineering with a focus on programming fundamentals.
      Experienced in JavaScript, Java, C++, HTML, and CSS.
      Currently expanding knowledge toward backend and mobile development,
      including PHP, Python, and Kotlin.
      </p>
  },
];

export const experience: TimelineItem[] = [];
/*
  {
    date: '2024 - Present',
    location: 'SMK PKP 1',
    title: 'Vocational High School',
    content: (
      <p>
      Studying software engineering with a focus on programming fundamentals.
      Experienced in JavaScript, Java, C++, HTML, and CSS.
      Currently expanding knowledge toward backend and mobile development,
      including PHP, Python, and Kotlin.
      </p>
    ),
  },

  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];
/*


/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Classmate',
      text: 'Farhan is highly motivated in learning programming and often helps classmates understand basic coding concepts.',
      image: testimonialImage,
    },
    {
      name: 'Teacher',
      text: 'Shows strong interest in software development and demonstrates good problem-solving skills during class projects.',
      image: testimonialImage,
    },
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },

  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'Farhan@gmail.com',
      href: 'mailto:Farhan@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Jakarta, Indonesian',
      href: 'https://www.google.ca/maps/place/Jakarta+Timur,+Kota+Jakarta+Timur,+Daerah+Khusus+Ibukota+Jakarta/@-6.2611417,106.8226193,12z/data=!3m1!4b1!4m6!3m5!1s0x2e69f2d148fbe713:0x6e667d52ebedf5a9!8m2!3d-6.2250138!4d106.9004472!16zL20vMDdfZGNz?entry=ttu&g_ep=EgoyMDI2MDExMS4wIKXMDSoASAFQAw%3D%3D',
    },
    {
      type: ContactType.Instagram,
      text: '@hanntanase',
      href: 'https://www.instagram.com/hanntanase/',
    },
    {
      type: ContactType.Github,
      text: 'Fvearah',
      href: 'https://github.com/Fvearah',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Fvearah'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/hanntanase/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/'},
];
