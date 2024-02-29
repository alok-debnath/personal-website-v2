import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface Props {
  children: JSX.Element;
  width?: 'fit-content' | '100%';
}

export const Reveal = ({ children, width = 'fit-content' }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const maincontrols = useAnimation();

  useEffect(() => {
    if (isInView) {
      maincontrols.start('visible');
    } else {
      maincontrols.start('hidden');
    }
  }, [isInView, maincontrols]);

  return (
    <div ref={ref} style={{ position: 'relative', width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={maincontrols}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
