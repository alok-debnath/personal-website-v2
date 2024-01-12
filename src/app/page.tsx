'use client';
import { NavbarSimple } from '@/components/Navbar';
import { ButtonDefault } from '@/components/Button';
import Footer from '@/components/Footer';
import SocialIconsList from '@/components/SocialIconsList';
import MouseHalo from '@/components/MouseHalo';
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
  return (
    <>
      <MouseHalo />
      <div className='mx-auto min-w-screen min-h-screen p-4 text-slate bg-navy'>
        <div className='mx-auto max-w-screen-2xl content-section'>
          <div className="mobile-halo md:hidden w-max"></div>
          <NavbarSimple />
          <div className='grid grid-cols-12'>
            <div className='col-span-1 hidden lg:block'></div>
            <div className='fixed top-0 left-0 h-screen items-center px-4 ms-2 hidden lg:flex'>
              <SocialIconsList />
            </div>
            <div className='col-span-12 lg:col-span-10 mx-3 mt-10'>
              <div className='grid grid-cols-12 gap-2 md:gap-4'>
                <div className='col-span-8'>
                  <p className='text-emerald'>Hey there, I&apos;m</p>
                </div>

                <div className='col-span-12 md:col-span-9'>
                  <h1 className={`${H1} text-bright-slate`}>Alok Debnath.</h1>
                  <h1 className={`${H1}`}>A web enthusiast on a journey of innovation.</h1>
                </div>

                <div className='col-span-11 md:col-span-6'>
                  <p>
                    I&apos;m an enthusiastic web developer eager to transform ideas into remarkable
                    digital experiences. My passion lies in learning and contributing to
                    cutting-edge projects that push the boundaries of web development.
                  </p>
                </div>
                <div className='col-span-8 my-10'>
                  <ButtonDefault
                    buttonLabel='Check out my GitHub!'
                  />
                </div>
              </div>
              <div className='grid grid-cols-12 gap-y-8 md:gap-x-14 my-10 mx-5'>
                <div className='col-span-12'>
                  <h3 id='about'>
                    <ol className='grid grid-cols-1 gap-4 list-decimal list-inside list-decimal-leading-zero'>
                      <li className='text-xl font-semibold'>
                        <span className='ms-2 text-3xl font-semibold'>About Me</span>
                      </li>
                    </ol>
                  </h3>
                </div>
                <div className='col-span-12 md:col-span-7 space-y-4'>
                  <p>
                    Hi there! I&apos;m Alok Debnath, a passionate web developer. My journey into coding
                    began during my Computer Engineering. As a naturally curious individual, I&apos;ve
                    always been drawn to creating and breaking things to gain a deeper understanding
                    of their inner workings. This innate curiosity eventually paved the way for my
                    entry into the exciting world of web development.
                  </p>
                  <p>
                    I had the privilege of working at{' '}
                    <a
                      className='text-emerald'
                      href=''>
                      Vandalay Business Solutions
                    </a>
                    , an experience that not only honed my skills but also encouraged continuous
                    learning amidst real-world projects. Exploring and embracing new technologies
                    became an integral part of my daily routine. I relished the opportunity to
                    integrate my knowledge across diverse domains to craft innovative solutions.
                  </p>
                  <p>I have expertise in several areas of web development, including:</p>
                  <div className='grid grid-cols-12'>
                    <div className='col-span-12 md:col-span-10 lg:col-span-8'>
                      <ul className='grid grid-cols-2 gap-4 list-disc list-inside'>
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
                <div className='col-span-12 md:col-span-5'>
                  <p>
                    I&apos;m a passionate web developer looking to gain practical experience in building
                    exceptional digital experiences. I&apos;m eager to learn and contribute to innovative
                    projects in the field.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-span-1 hidden lg:block'></div>
            <div className='fixed top-0 max-w-fit right-0 h-screen items-center px-4 me-3 hidden lg:flex'>
              <div className='group cursor-pointer p-3 text-center grid grid-cols-1 gap-y-6'>
                <p
                  style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                  className='group-hover:text-emerald group-hover:transform group-hover:translate-y-[-5px] transition-transform duration-300 ease-in-out'>
                  alokdebnath.in@gmail.com
                </p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
