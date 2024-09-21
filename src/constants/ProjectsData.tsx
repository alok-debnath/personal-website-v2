import { StaticImageData } from 'next/image';
import personal_website_v2 from '@/images/personal-website-v2.png';
import breaklog from '@/images/breaklog.png';

interface Projects {
  href: string;
  projectImage: null | StaticImageData;
  title: string;
  subTitles: string[];
  description: React.ReactNode;
  skills: string[];
  links?: { text: string; href: string }[];
}

export const projectsData: Projects[] = [
  {
    href: 'https://breaklog.eu.org',
    projectImage: breaklog,
    title: 'BreakLog',
    subTitles: [],
    description: (
      <>
        <p>
          BreakLog is a self-hosted time and attendance system built with
          Next.js. It allows you to log your workday by recording the start and
          end times of your work, as well as any breaks you take. It calculates
          the total break time and work done for that particular day, providing
          insights into your daily productivity. Additionally, it allows you to
          retrieve monthly logged data with useful insights. If you only need to
          track break times, BreakLog can handle that too, without requiring you
          to log your day start and day end logs.
        </p>
      </>
    ),
    skills: [
      'Next.js',
      'Tailwind CSS',
      'Daisy UI',
      'MongoDB',
      'Zustand',
      'Self-hosted',
    ],
    links: [
      { text: 'GitHub', href: 'https://github.com/alok-debnath/breaklog' },
    ],
  },
  {
    href: 'https://github.com/alok-debnath/personal-website-v2',
    projectImage: personal_website_v2,
    title: 'Personal Website (v2)',
    subTitles: [],
    description: (
      <>
        <p>
          My current portfolio site built with Next.js and proudly self-hosted
        </p>
      </>
    ),
    skills: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Self-hosted'],
  },
  // Add more job objects here as needed
];
