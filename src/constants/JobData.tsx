interface Job {
  href: string;
  timeframe: string;
  title: string;
  subTitles: string[];
  description: React.ReactNode;
  skills: string[];
}

export const jobData: Job[] = [
  {
    href: 'https://www.vandalay.in',
    timeframe: 'May 2023 — Present',
    title: 'Jr. Web Developer · Vandalay Business Solutions',
    subTitles: [],
    description: (
      <>
        <p>
          Through my tenure at Vandalay Business Solutions, I have honed my
          skills in ReactJS and its ecosystem. I have worked on projects that
          utilize React's versatility and have fully embraced its power. This
          experience has been invaluable, allowing me to leverage my knowledge
          across various domains to create innovative solutions.
        </p>
      </>
    ),
    skills: [
      'React',
      'Tailwind CSS',
      'Bootstrap 5',
      'MongoDB',
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
    description: (
      <>
        <p>
          Learned multiple programming languages used in web development,
          including HTML, CSS, JavaScript, Python, and Django. Through working
          on full-stack projects, I gained experience in both front-end and
          back-end development. Additionally, I developed strong skills in
          problem-solving, debugging, and troubleshooting web applications. This
          solid foundation in web development has served as a robust starting
          point in my career.
        </p>
      </>
    ),
    skills: ['Django', 'Bootstrap 5', 'JavaScript', 'HTML & CSS'],
  },
  // Add more job objects here as needed
];
