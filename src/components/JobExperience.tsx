import React from 'react';
import { Reveal } from './utils/Reveal';
import HyperLinks from './HyperLinks';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Image, { StaticImageData } from 'next/image';

interface Job {
  href: string;
  timeframe?: string;
  projectImage?: null | StaticImageData;
  title: string;
  subTitles: string[];
  description: React.ReactNode;
  skills: string[];
  links?: { text: string; href: string }[];
}

interface JobExperienceProps {
  job: Job;
}

const JobExperience: React.FC<JobExperienceProps> = ({ job }) => {
  const isMobile = useMediaQuery('(max-width: 719px)');
  return (
    <div className='child col-span-12 transition duration-300'>
      <Reveal width='100%'>
        <div className='grid grid-cols-12'>
          <div
            className={`col-span-12 md:col-span-4 md:mt-3 ${job.projectImage && isMobile ? 'order-last mt-4' : ''}`}
          >
            {job.projectImage ? (
              <Image
                src={job.projectImage}
                alt={job.title}
                width={200}
                height={48}
                decoding='async'
                loading='lazy'
                className='rounded border-2 border-slate/20 transition md:group-hover/main:border-slate/40'
              />
            ) : (
              <p className='text-sm font-semibold'>{job.timeframe}</p>
            )}
          </div>
          <HyperLinks
            className='md:hover:blue-gray-500/20 group col-span-12 space-y-3 transition duration-300 md:col-span-8 md:cursor-pointer md:rounded-lg md:px-5 md:py-3 md:hover:bg-blue-gray-500/10 md:hover:shadow-md'
            href={isMobile ? '' : job.href}
            as={isMobile ? 'div' : 'a'}
            content={
              <>
                <span
                  className='group/span mb-2 inline-block cursor-pointer items-baseline fill-bright-slate font-semibold text-bright-slate hover:fill-emerald hover:text-emerald md:group-hover:fill-emerald md:group-hover:text-emerald'
                  onClick={
                    isMobile
                      ? () =>
                          window.open(job.href, '_blank', 'noopener,noreferrer')
                      : undefined
                  }
                >
                  {job.title}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='ml-1 inline-block h-4 w-4 shrink-0 transition-transform duration-300 ease-in-out group-hover/span:-translate-y-1 group-hover/span:translate-x-1 md:group-hover:-translate-y-1 md:group-hover:translate-x-1'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z'
                      clipRule='evenodd'
                    />
                  </svg>
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
                {job.links && (
                  <ul className='flex flex-wrap text-xs'>
                    {job.links.map((link, index) => (
                      <li
                        key={index}
                        className='mr-4 mt-2 flex cursor-pointer items-center text-sm font-semibold text-bright-slate hover:text-emerald'
                        onClick={() =>
                          window.open(
                            link.href,
                            '_blank',
                            'noopener,noreferrer',
                          )
                        }
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          className='h-3 w-3'
                          aria-hidden='true'
                        >
                          <path d='M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z' />
                          <path d='M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z' />
                        </svg>
                        <span className='ml-1'>{link.text}</span>
                      </li>
                    ))}
                  </ul>
                )}
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
              </>
            }
          />
        </div>
      </Reveal>
    </div>
  );
};

export default JobExperience;
