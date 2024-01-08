'use client';
import { NavbarSimple } from '@/components/Navbar';
import { ButtonDefault } from '@/components/Button'
// import styled from 'styled-components';

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
  'font-bold text-4xl md:text-5xl leading-normal lg:text-6xl xl:text-7xl 2xl:text-8xl transition-all duration-300 ease-in-out font-bold text-4xl md:text-5xl leading-normal lg:text-6xl xl:text-7xl 2xl:text-8xl transition-all duration-300 ease-in-out';

const Home = () => {
  return (
    <>
      <div className='mx-auto min-w-screen min-h-screen p-4'>
        <div className='mx-auto max-w-screen-2xl'>
          <NavbarSimple />
          <div className='mx-3 mt-6'>
            <div className='grid grid-cols-12 gap-4'>
              <div className='col-span-8'>
                <p>Hi, my name is</p>
              </div>

              <div className='col-span-12 md:col-span-9'>
                <h1 className={`${H1}`}>Alok Debnath.</h1>
                <h1 className={`${H1}`}>Someone who's in love with Web.</h1>
              </div>
              <div className='col-span-11 md:col-span-6'>
                <p>
                  I'm a passionate web developer looking to gain practical experience in building
                  exceptional digital experiences. I'm eager to learn and contribute to innovative
                  projects in the field.
                </p>
              </div>
              <div className='col-span-8'>
                <ButtonDefault
                  buttonLabel="Check out my GitHub!"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
