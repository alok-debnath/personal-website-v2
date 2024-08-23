import React from 'react';
import { Reveal } from './utils/Reveal';
import HyperLinks from './HyperLinks';

interface Job {
  href: string;
  timeframe: string;
  title: string;
  subTitles: string[];
  description: React.ReactNode;
  skills: string[];
}

interface JobExperienceProps {
  job: Job;
}

const JobExperience: React.FC<JobExperienceProps> = ({ job }) => {
  return (
    <div className='child col-span-12 transition duration-300'>
      <Reveal>
        <div className='grid grid-cols-12'>
          <div className='col-span-12 md:col-span-4 md:mt-3'>
            <p className='text-sm font-semibold'>{job.timeframe}</p>
          </div>
          <div className='md:hover:blue-gray-500/20 col-span-12 cursor-pointer space-y-3 transition duration-300 md:col-span-8 md:rounded-lg md:px-5 md:py-3 md:hover:bg-blue-gray-500/10 md:hover:shadow-md'>
            <span className='inline-flex items-center fill-bright-slate font-semibold text-bright-slate hover:fill-emerald hover:text-emerald'>
              <HyperLinks
                className=''
                href={job.href}
                content={job.title}
              />
            </span>
            <span>
              <ul className='text-md font-semibold'>
                {job.subTitles.map((subTitle, index) => (
                  <li key={index} className='my-1.5'>
                    {subTitle}
                  </li>
                ))}
              </ul>
            </span>
            <span className='text-sm'>{job.description}</span>
            <ul className='flex flex-wrap text-xs'>
              {job.skills.map((skill, index) => (
                <li
                  key={index}
                  className='mr-2 mt-2 rounded-2xl bg-emerald/10 px-3 py-1.5 text-emerald'
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default JobExperience;
