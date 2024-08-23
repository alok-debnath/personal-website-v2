import { useState, useEffect } from 'react';

interface Subheading {
  id: string;
  name: string;
}

const useActiveSubheading = (
  subheadings: Subheading[],
  defaultValue: string,
  navRef: React.RefObject<HTMLDivElement>,
) => {
  const [activeSubheading, setActiveSubheading] = useState(defaultValue);

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = navRef.current?.clientHeight || 0;
      const scrollPosition = window.scrollY + navbarHeight + 40;

      let activeIndex = 0;

      for (let i = 0; i < subheadings.length; i++) {
        const element = document.getElementById(subheadings[i].id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;

          if (scrollPosition >= elementTop) {
            activeIndex = i;
          } else {
            // Stop when we find a section that's below the scroll position
            break;
          }
        }
      }

      // Special case for the top of the page
      if (window.scrollY < navbarHeight / 2) {
        activeIndex = 0;
      }

      setActiveSubheading(subheadings[activeIndex].name);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [subheadings, defaultValue]);

  return activeSubheading;
};

export default useActiveSubheading;
