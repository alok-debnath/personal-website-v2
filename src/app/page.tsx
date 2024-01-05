import { NavbarSimple } from '@/components/Navbar';

const Home = () => {
  return (
    <>
      <div className='mx-auto min-w-screen min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 p-4'>
        <div className='mx-auto max-w-screen-2xl'>
          <NavbarSimple />
          <div className='mx-3 mt-6'>
            <h1 className='text-black'>Hello World!</h1>
            <h1 className='text-black mt-96 mb-96'>Hello World!</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
