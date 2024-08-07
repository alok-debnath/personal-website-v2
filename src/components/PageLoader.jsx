import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const greetings = [
  'Hello',
  'Hola',
  'नमस्ते',
  'Bonjour',
  'こんにちは',
  'Welcome',
];

const PageLoader = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className='flex min-h-screen min-w-full items-center justify-center bg-navy text-slate'
      initial={{ opacity: 1, background: 'rgb(10, 25, 37)' }}
      animate={{ opacity: 0, background: 'rgb(10, 25, 47)' }}
      transition={{ duration: 6, ease: 'easeInOut', delay: 2 }}
    >
      <motion.div
        className='text-4xl md:text-5xl lg:text-6xl font-bold'
        key={index}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 1 }}
      >
        {greetings[index]}
      </motion.div>
    </motion.div>
  );
};

export default PageLoader;
