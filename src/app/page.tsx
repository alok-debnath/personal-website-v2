"use client"
import { NavbarSimple } from '@/components/Navbar';
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

const Home = () => {
  return (
    <>
      <div className='mx-auto min-w-screen min-h-screen p-4'>
        <div className='mx-auto max-w-screen-2xl'>
          <NavbarSimple />
          <div className='mx-3 mt-6'>
            <div className='gap-y-16'>
              <p>Hi, my name is</p>
              <h1 className='font-bold text-6xl'>Alok Debnath.</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
