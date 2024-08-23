'use client';
import React, { useRef } from 'react';
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from '@material-tailwind/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import ButtonDefault from './ButtonDefault';
import useActiveSubheading from '@/hooks/useActiveSubheading';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const items = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const handleClick = (e) => {
  e.preventDefault();
  const yOffset = -100; // Adjust this value to set the distance from the top
  const targetId = e.target.getAttribute('href').substring(1); // Get the target ID from the href attribute
  const element = document.getElementById(targetId);

  if (element) {
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  } else {
    // If element is not found, scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

function NavList({ activeItem }) {
  const navItems = [
    { text: 'About', href: '#about' },
    { text: 'Experience', href: '#experience' },
    { text: 'Projects', href: '#' },
    { text: 'Contact', href: '#' },
  ];

  return (
    <motion.ul
      className='container my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'
      variants={container}
      initial='hidden'
      animate='visible'
    >
      {navItems.map((item, index) => (
        <motion.Typography
          key={index}
          as='li'
          variant='small'
          color='blue-gray'
          className='item p-1 font-medium'
          variants={items}
        >
          <a
            href={item.href}
            onClick={handleClick}
            className={`flex items-center transition-colors hover:text-emerald ${activeItem === item.text ? 'text-emerald' : 'text-bright-slate'}`}
          >
            {item.text}
          </a>
        </motion.Typography>
      ))}
    </motion.ul>
  );
}

const NavbarSimple = () => {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const navRef = useRef(null);
  const subheadings = [
    { id: 'username', name: 'Alok' },
    { id: 'aboutme', name: 'About' },
    { id: 'experience', name: 'Experience' },
    { id: 'projects', name: 'Projects' },
  ];
  const defaultValue = 'Alok';
  const activeSubheading = useActiveSubheading(
    subheadings,
    defaultValue,
    navRef,
  );

  return (
    <div className='sticky top-0 z-10 p-0 md:p-3'>
      <Navbar
        ref={navRef}
        className='mx-auto max-w-screen-2xl rounded-none border-light-navy bg-light-navy px-6 py-3 shadow-none backdrop-blur md:top-4 md:rounded-xl'
      >
        <div className='flex items-center justify-between text-blue-gray-900'>
          <Typography
            as='a'
            href='#'
            onClick={handleClick}
            variant='h6'
            className='mr-4 min-w-44 cursor-pointer py-1.5 text-bright-slate'
          >
            {activeSubheading}
          </Typography>
          <div className='mr-4 hidden lg:block'>
            <NavList activeItem={activeSubheading} />
          </div>
          <div className='flex items-center gap-x-1'>
            <ButtonDefault
              size='sm'
              className='hidden lg:inline-block'
              buttonLabel='Resume'
            />
          </div>
          <IconButton
            variant='text'
            className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon
                className='h-6 w-6 text-bright-slate'
                strokeWidth={2}
              />
            ) : (
              <Bars3Icon
                className='h-6 w-6 text-bright-slate'
                strokeWidth={2}
              />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList activeItem={activeSubheading} />
          <div className='flex items-center gap-x-1'>
            <ButtonDefault
              fullWidth
              size='sm'
              className=''
              buttonLabel='Resume'
            />
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarSimple;
