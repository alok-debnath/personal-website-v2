import React from 'react';

interface Job {
  href: string;
  timeframe: string;
  title: string;
  subTitles: string[];
  description: string;
  skills: string[];
}

interface JobExperienceProps {
  job: Job;
}

const JobExperience: React.FC<JobExperienceProps> = ({ job }) => {
  return (
    <div className='col-span-12'>
      <div className='grid grid-cols-12'>
        <div className='col-span-12 md:col-span-4 md:mt-3'>
          <p className='text-sm font-semibold'>{job.timeframe}</p>
        </div>
        <div className='md:hover:blue-gray-500/20 col-span-12 cursor-pointer space-y-3 md:col-span-8 md:rounded-lg md:px-5 md:py-3 md:hover:bg-blue-gray-500/10 md:hover:shadow-md'>
          <a
            className='font-semibold text-bright-slate hover:text-emerald'
            target='_blank'
            rel='noopener noreferrer'
            href={job.href}
          >
            {job.title}
          </a>
          <span>
            <ul className='text-md font-semibold'>
              {job.subTitles.map((subTitle, index) => (
                <li key={index} className='my-1.5'>
                  {subTitle}
                </li>
              ))}
            </ul>
          </span>
          <p className='text-sm'>{job.description}</p>
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
    </div>
  );
};

export default JobExperience;
