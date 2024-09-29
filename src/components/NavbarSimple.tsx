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

type NavItem = {
  text: string;
  href: string;
};

type Subheading = {
  id: string;
  name: string;
};

// Animation variants
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

const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const yOffset = -90; // Adjust this value to set the distance from the top
  const targetId = e.currentTarget.getAttribute('href')?.substring(1); // Get the target ID from the href attribute
  const element = targetId ? document.getElementById(targetId) : null;

  if (element) {
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  } else {
    // If element is not found, scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

interface NavListProps {
  activeItem: string;
}

const NavList: React.FC<NavListProps> = ({ activeItem }) => {
  const navItems: NavItem[] = [
    { text: 'About', href: '#about' },
    { text: 'Experience', href: '#experience' },
    { text: 'Projects', href: '#projects' },
    // { text: 'Contact', href: '#' },
  ];

  return (
    <motion.ul
      className='container my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'
      variants={container}
      initial='hidden'
      animate='visible'
    >
      {navItems.map((item, index) => (
        <motion.li
          key={index}
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
        </motion.li>
      ))}
    </motion.ul>
  );
};

const NavbarSimple: React.FC = () => {
  const [openNav, setOpenNav] = React.useState<boolean>(false);

  const handleWindowResize = () => {
    if (window.innerWidth >= 960) setOpenNav(false);
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const navRef = useRef<HTMLDivElement | null>(null);
  const subheadings: Subheading[] = [
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
        placeholder=''
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <div className='flex items-center justify-between text-blue-gray-900'>
          <Typography
            as='a'
            href='#'
            onClick={(e) =>
              handleClick(e as React.MouseEvent<HTMLAnchorElement>)
            }
            variant='h6'
            className='flex min-w-40 items-center justify-start whitespace-nowrap text-bright-slate'
            placeholder=''
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='34'
              height='34'
              viewBox='0 0 250 250'
              className='mr-2 hidden md:block'
            >
              <g fill='#0bbf64' transform='translate(45, 26) scale(6)'>
                <svg>
                  <g fill='#64ffdb'>
                    <path d='M13.11 2.16L.88 32.49H0L13.11 0l13.1 32.49h-.87L13.11 2.16z' />
                    <path d='M13.11 25.74l-2.68 6.75H6.94l6.18-15.51 6.16 15.51H15.8l-2.69-6.75z' />
                  </g>
                </svg>
              </g>
            </svg>
            <span className='mt-1'>{activeSubheading}</span>
          </Typography>
          <div className='mr-4 hidden lg:block'>
            <NavList activeItem={activeSubheading} />
          </div>
          <div className='flex items-center gap-x-1'>
            <ButtonDefault
              size='sm'
              onClick={() => window.open('./Resume.pdf', '_blank')}
              className='hidden lg:inline-block'
              buttonLabel='Resume'
            />
          </div>
          <IconButton
            variant='text'
            className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            aria-label='Toggle topnav'
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
              onClick={() => window.open('./Resume.pdf', '_blank')}
              className='hover:translate-x-0 hover:translate-y-0 hover:bg-emerald hover:text-black hover:shadow-none'
              buttonLabel='Resume'
            />
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarSimple;
