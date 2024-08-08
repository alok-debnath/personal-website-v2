interface Job {
  href: string;
  timeframe: string;
  title: string;
  subTitles: string[];
  description: string;
  skills: string[];
}

export const jobData: Job[] = [
  {
    href: 'https://www.vandalay.in',
    timeframe: 'May 2023 — Present',
    title: 'Jr. Web Developer · Vandalay Business Solutions',
    subTitles: [],
    description:
      'Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.',
    skills: [
      'React',
      'Tailwind CSS',
      'Bootstrap 5',
      'JavaScript',
      'Laravel',
      'SQL',
    ],
  },
  {
    href: 'https://synnefo.in',
    timeframe: 'December 2022 — March 2023',
    title: 'Full-Stack web developer (Intern) · Synnefo solutions',
    subTitles: [],
    description:
      'Learned multiple programming languages used in web development, including HTML, CSS, JavaScript, Python, Django. Through working on full-stack projects, I have gained experience in both front-end and back-end development. Additionally, I have developed strong skills in problem-solving, debugging, and troubleshooting web applications. This solid foundation in web development will serve as a robust starting point for my future career in this field.',
    skills: ['Django', 'Bootstrap 5', 'JavaScript', 'HTML & CSS'],
  },
  // Add more job objects here as needed
];
