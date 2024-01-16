import { motion, useViewportScroll, useTransform } from 'framer-motion';

const MobileHalo = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [1, 0], [0, 1.5]);

  return (
    <div className='mobile-halo-div md:hidden w-max'>
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
