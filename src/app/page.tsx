'use client';
import { NavbarSimple } from '@/components/Navbar';
import { ButtonDefault } from '@/components/Button';
import Footer from '@/components/Footer';
import SocialIconsList from '@/components/SocialIconsList';
import MouseHalo from '@/components/MouseHalo';
import MobileHalo from '@/components/MobileHalo';
import PageLoader from '@/components/PageLoader';
import JobExperience from '@/components/JobExperience';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/utils/Reveal';
import { jobData } from '@/constants/JobData';

// import styled, { keyframes } from 'styled-components';

// const P_green = styled.p`
//   color: rgb(100, 255, 218);
// `;
// const P_regular = styled.p`
//   color: rgb(136, 146, 176);
// `;

// const Div_main = styled.div`
//   background-color: rgb(10, 25, 47);
// `;
// const H1_focused = styled.h1`
//   color: rgb(204, 214, 246);
// `;

const H1 =
  'font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl leading-snug transition-all duration-300 ease-in-out';

const Home = () => {
  const [pageJourney, setPageJourney] = useState(0);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setPageJourney(1);
    }, 6000);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <>
      <div
        className={`${
          pageJourney !== 0
            ? 'min-w-screen mx-auto min-h-screen p-4 text-slate'
            : ''
        } bg-navy`}
      >
        {pageJourney === 0 && <PageLoader />}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: 'easeInOut', delay: 3 }}
        >
          <div className={`${pageJourney === 1 ? '' : 'hidden'}`}>
            <MouseHalo />
            <div className='content-section mx-auto max-w-screen-2xl'>
              <MobileHalo />
              <NavbarSimple />
              <div className='grid grid-cols-12'>
                <div className='col-span-1 hidden lg:block'></div>
                <div className='fixed left-0 top-0 ms-2 hidden h-screen items-center px-4 lg:flex'>
                  <SocialIconsList />
                </div>
                <div className='col-span-12 mx-3 mt-10 lg:col-span-10'>
                  <div className='grid grid-cols-12 gap-2 md:gap-4'>
                    <div className='col-span-8'>
                      <Reveal>
                        <p className='text-emerald'>Hey there, I&apos;m</p>
                      </Reveal>
                    </div>
                    <div className='col-span-12 md:col-span-9'>
                      <Reveal>
                        <>
                          <h1 className={`${H1} text-bright-slate`}>
                            Alok Debnath.
                          </h1>
                          <h1 className={`${H1}`}>
                            A web enthusiast on a journey of innovation.
                          </h1>
                        </>
                      </Reveal>
                    </div>
                    <div className='col-span-11 md:col-span-6'>
                      <Reveal>
                        <p>
                          I&apos;m an enthusiastic web developer eager to
                          transform ideas into remarkable digital experiences.
                          My passion lies in learning and contributing to
                          cutting-edge projects that push the boundaries of web
                          development.
                        </p>
                      </Reveal>
                    </div>
                    <div className='col-span-8 my-2 mb-0 lg:my-10'>
                      <Reveal>
                        <ButtonDefault buttonLabel='Check out my GitHub!' />
                      </Reveal>
                    </div>
                    <div className='col-span-12 lg:hidden'>
                      <Reveal>
                        <SocialIconsList />
                      </Reveal>
                    </div>
                  </div>
                  <div className='mx-5 my-10 grid grid-cols-12 gap-y-8 md:gap-x-14'>
                    <div className='col-span-12'>
                      <Reveal>
                        <h3 id='about' className='text-bright-slate'>
                          <ol className='list-decimal-leading-zero grid list-inside list-decimal grid-cols-1 gap-4'>
                            <li className='text-xl font-semibold'>
                              <span className='ms-2 text-3xl font-semibold'>
                                About Me
                              </span>
                            </li>
                          </ol>
                        </h3>
                      </Reveal>
                    </div>
                    <div className='col-span-12 md:col-span-7'>
                      <Reveal>
                        <div className='space-y-4'>
                          <p>
                            Hi there! I&apos;m Alok Debnath, a passionate web
                            developer. My journey into coding began during my
                            Computer Engineering. As a naturally curious
                            individual, I&apos;ve always been drawn to creating
                            and breaking things to gain a deeper understanding
                            of their inner workings. This innate curiosity
                            eventually paved the way for my entry into the
                            exciting world of web development.
                          </p>
                          <p>
                            I had the privilege of working at{' '}
                            <a className='text-emerald' href=''>
                              Vandalay Business Solutions
                            </a>
                            , an experience that not only honed my skills but
                            also encouraged continuous learning amidst
                            real-world projects. Exploring and embracing new
                            technologies became an integral part of my daily
                            routine. I relished the opportunity to integrate my
                            knowledge across diverse domains to craft innovative
                            solutions.
                          </p>
                          <p>
                            I have expertise in several areas of web
                            development, including:
                          </p>
                          <div className='grid grid-cols-12'>
                            <div className='col-span-12 md:col-span-10 lg:col-span-8'>
                              <ul className='grid list-inside list-disc grid-cols-2 gap-4'>
                                <li>Next JS</li>
                                <li>React JS</li>
                                <li>Python</li>
                                <li>Laravel</li>
                                <li>JavaScript</li>
                                <li>SQL</li>
                                <li>MongoDB</li>
                                <li>HTML/CSS</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </Reveal>
                    </div>
                    <div className='col-span-12 md:col-span-5'>
                      <p>
                        I&apos;m a passionate web developer looking to gain
                        practical experience in building exceptional digital
                        experiences. I&apos;m eager to learn and contribute to
                        innovative projects in the field.
                      </p>
                    </div>
                  </div>
                  <div className='mx-5 my-10 grid grid-cols-12 gap-y-8 md:gap-x-14'>
                    <div className='col-span-12'>
                      <Reveal>
                        <h3 id='experience' className='text-bright-slate'>
                          <ol
                            start={2}
                            className='list-decimal-leading-zero grid list-inside list-decimal grid-cols-1 gap-4'
                          >
                            <li className='text-xl font-semibold'>
                              <span className='ms-2 text-3xl font-semibold'>
                                Experience
                              </span>
                            </li>
                          </ol>
                        </h3>
                      </Reveal>
                    </div>
                    <div className='col-span-12'>
                      <div className='grid grid-cols-12'>
                        <div className='col-span-12 md:col-span-4'>
                          <p className='text-sm font-semibold'>
                            2024 — Present
                          </p>
                        </div>
                        {jobData.map((job, index) => (
                          <JobExperience key={index} job={job} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-span-1 hidden lg:block'></div>
                <div className='fixed right-0 top-0 me-3 hidden h-screen max-w-fit items-center px-4 lg:flex'>
                  <div className='group grid cursor-pointer grid-cols-1 gap-y-6 p-3 text-center'>
                    <Reveal>
                      <p
                        style={{
                          writingMode: 'vertical-rl',
                          textOrientation: 'mixed',
                        }}
                        className='text-sm transition-transform duration-300 ease-in-out group-hover:translate-y-[-5px] group-hover:transform group-hover:text-emerald'
                      >
                        alokdebnath.in@gmail.com
                      </p>
                    </Reveal>
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
