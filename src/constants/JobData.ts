interface Job {
  href: string;
  title: string;
  subTitles: string[];
  description: string;
  skills: string[];
}

export const jobData: Job[] = [
  {
    href: 'https://www.vandalay.in',
    title: 'Jr. Web Developer · Vandalay Business Solutions',
    subTitles: [],
    description:
      'Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.',
    skills: ['React', 'JavaScript', 'Lalavel'],
  },
  // Add more job objects here as needed
];
