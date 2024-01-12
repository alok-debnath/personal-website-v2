'use client';
import React from 'react';
import { Navbar, Collapse, Typography, IconButton, Button } from '@material-tailwind/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function NavList() {
  const navItems = [
    { text: 'About', href: '#about' },
    { text: 'Experience', href: '#' },
    { text: 'Work', href: '#' },
    { text: 'Contact', href: '#' },
  ];

  return (
    <ul className='my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      {navItems.map((item, index) => (
        <Typography
          key={index}
          as='li'
          variant='small'
          color='blue-gray'
          className='p-1 font-medium'>
          <a
            href={item.href}
            className='flex items-center hover:text-emerald text-bright-slate transition-colors'>
            {item.text}
          </a>
        </Typography>
      ))}
    </ul>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <Navbar className='sticky top-4 z-10 mx-auto max-w-screen-2xl px-6 py-3 bg-navy border-navy backdrop-blur-md shadow-none'>
      <div className='flex items-center justify-between text-blue-gray-900'>
        <Typography
          as='a'
          href='#'
          variant='h6'
          className='mr-4 cursor-pointer py-1.5 text-bright-slate'>
          Alok
        </Typography>
        <div className='mr-4 hidden lg:block'>
          <NavList />
        </div>
        <div className='flex items-center gap-x-1'>
          <Button
            size='sm'
            className='hidden lg:inline-block'>
            <span>Resume</span>
          </Button>
        </div>
        <IconButton
          variant='text'
          className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
          ripple={false}
          onClick={() => setOpenNav(!openNav)}>
          {openNav ? (
            <XMarkIcon
              className='h-6 w-6'
              strokeWidth={2}
            />
          ) : (
            <Bars3Icon
              className='h-6 w-6'
              strokeWidth={2}
            />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className='flex items-center gap-x-1'>
          <Button
            fullWidth
            size='sm'
            className=''>
            <span>Resume</span>
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}
