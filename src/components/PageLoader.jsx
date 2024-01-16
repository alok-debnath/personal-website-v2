import { motion } from 'framer-motion';

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: 'rgba(255, 255, 255, 0)',
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: 'rgba(255, 255, 255, 1)',
  },
};

const PageLoader = () => (
  <div className='flex items-center justify-center min-w-max min-h-screen p-4 text-slate bg-navy'>
    <div className='loader-container'>
      <motion.svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 100 100'
        className='loader-item'>
        <motion.path
          d='M50 20 L80 80 L50 65 L20 80 Z'
          variants={icon}
          initial='hidden'
          animate='visible'
          transition={{
            default: { duration: 2, ease: 'easeInOut' },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
        />
      </motion.svg>
    </div>
  </div>
);

export default PageLoader;
