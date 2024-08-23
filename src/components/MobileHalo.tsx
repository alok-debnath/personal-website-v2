import { motion, useScroll, useTransform } from 'framer-motion';

const MobileHalo = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [1, 0], [0, 1.5]);

  return (
    <div className='mobile-halo-div w-max md:hidden'>
      <motion.div
        className='mobile-halo'
        style={{
          scale,
        }}
      />
    </div>
  );
};

export default MobileHalo;
