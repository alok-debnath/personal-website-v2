'use client';
import NavbarSimple from '@/components/NavbarSimple';
import ButtonDefault from '@/components/ButtonDefault';
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
import HyperLinks from '@/components/HyperLinks';
import { projectsData } from '@/constants/ProjectsData';

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
    }, 4300);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <>
      <div
        className={`${
          pageJourney !== 0
            ? 'min-w-screen mx-auto min-h-screen text-slate'
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
            <div className='content-section'>
              <MobileHalo />
              <NavbarSimple />
              <div className='mx-2 grid grid-cols-12'>
                <div className='col-span-1 hidden lg:block'></div>
                <div className='fixed left-0 top-0 ms-2 hidden h-screen items-center px-4 lg:flex'>
                  <SocialIconsList />
                </div>
                <div className='col-span-12 mx-3 mt-10 lg:col-span-10'>
                  <div
                    className='grid grid-cols-12 gap-2 md:gap-4'
                    id='username'
                  >
                    <div className='col-span-8'>
                      <Reveal>
                        <p className='text-emerald'>Hey there, I&apos;m</p>
                      </Reveal>
                    </div>
                    <div className='col-span-12 md:col-span-10'>
                      <Reveal>
                        <>
                          <h1 className={`${H1} text-bright-slate`}>
                            Alok Debnath.
                          </h1>
                          <h1 className={`${H1}`}>
                            A web enthusiast on a journey of constant learning.
                          </h1>
                        </>
                      </Reveal>
                    </div>
                    <div className='col-span-11 md:col-span-8'>
                      <Reveal>
                        <p className='text-sm md:text-lg'>
                          I&apos;m a passionate web developer dedicated to crafting exceptional digital experiences. My drive is fueled by continuous learning and contributing to projects that challenge and expand my expertise.
                        </p>
                      </Reveal>
                    </div>
                    <div className='col-span-8 my-2 mb-0 lg:my-10'>
                      <Reveal>
                        <ButtonDefault
                          onClick={() => window.open('./Resume.pdf', '_blank')}
                          buttonLabel='Check out my Resume!'
                        />
                      </Reveal>
                    </div>
                    <div className='col-span-12 lg:hidden'>
                      <Reveal>
                        <SocialIconsList />
                      </Reveal>
                    </div>
                  </div>
                  <div
                    className='mx-1 my-10 grid grid-cols-12 gap-y-8 md:mx-5 md:gap-x-14'
                    id='about'
                  >
                    <div className='col-span-12'>
                      <Reveal>
                        <h2 className='text-bright-slate'>
                          <ol className='list-decimal-leading-zero grid list-inside list-decimal grid-cols-1 gap-4'>
                            <li className='text-xl font-semibold'>
                              <span
                                id='aboutme'
                                className='ms-2 text-3xl font-semibold'
                              >
                                About Me
                              </span>
                            </li>
                          </ol>
                        </h2>
                      </Reveal>
                    </div>
                    <div className='col-span-12'>
                      <div className='space-y-4'>
                        <Reveal>
                          <p>
                            Hi there! I&apos;m Alok, a passionate web
                            developer. My journey into coding began during my
                            Computer Engineering. As a naturally curious
                            individual, I&apos;ve always been drawn to creating
                            and breaking things to gain a deeper understanding
                            of their inner workings. This innate curiosity
                            eventually paved the way for my entry into the
                            exciting world of web development.
                          </p>
                        </Reveal>
                        <Reveal>
                          <p>
                            I have expertise in several areas of web
                            development, including:
                          </p>
                        </Reveal>
                        <Reveal>
                          <div className='grid grid-cols-12'>
                            <div className='col-span-12 md:col-span-8 lg:col-span-6'>
                              <ul className='grid list-inside list-disc grid-cols-2 gap-2 md:gap-4'>
                                <li>Next JS</li>
                                <li>React JS</li>
                                <li>JavaScript</li>
                                {/* <li>Python</li> */}
                                <li>HTML/CSS</li>
                                <li>Laravel</li>
                                <li>SQL</li>
                                <li>MongoDB</li>
                              </ul>
                            </div>
                          </div>
                        </Reveal>
                      </div>
                    </div>
                  </div>
                  <div
                    className='mx-1 my-10 grid grid-cols-12 gap-y-8 md:mx-5 md:gap-x-14'
                    id='experience'
                  >
                    <div className='col-span-12'>
                      <Reveal>
                        <h2 className='text-bright-slate'>
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
                        </h2>
                      </Reveal>
                    </div>
                    <div className='col-span-12'>
                      <div className='group-main grid grid-cols-12 gap-y-14'>
                        {jobData.map((job, index) => (
                          <JobExperience key={index} job={job} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div
                    className='mx-1 my-10 grid grid-cols-12 gap-y-8 md:mx-5 md:gap-x-14'
                    id='projects'
                  >
                    <div className='col-span-12'>
                      <Reveal>
                        <h2 className='text-bright-slate'>
                          <ol
                            start={3}
                            className='list-decimal-leading-zero grid list-inside list-decimal grid-cols-1 gap-4'
                          >
                            <li className='text-xl font-semibold'>
                              <span className='ms-2 text-3xl font-semibold'>
                                Projects
                              </span>
                            </li>
                          </ol>
                        </h2>
                      </Reveal>
                    </div>
                    <div className='col-span-12'>
                      <div className='group-main group/main grid grid-cols-12 gap-y-14'>
                        {projectsData.map((projects, index) => (
                          <JobExperience key={index} job={projects} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-span-1 hidden lg:block'></div>
                <div className='fixed right-0 top-0 me-3 hidden h-screen max-w-fit items-center px-4 lg:flex'>
                  <div className='group grid cursor-pointer grid-cols-1 gap-y-6 p-3 text-center'>
                    <Reveal>
                      <HyperLinks
                        className='text-sm italic transition-transform duration-300 ease-in-out group-hover:translate-y-[-5px] group-hover:transform group-hover:text-emerald'
                        style={{
                          writingMode: 'vertical-rl',
                          textOrientation: 'mixed',
                        }}
                        href='mailto:alokdebnath.in@gmail.com'
                        content='alokdebnath.in@gmail.com'
                      />
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
