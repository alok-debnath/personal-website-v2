'use client';
import { useEffect, useState } from 'react';

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const media = window?.matchMedia(query);
    if (media) {
      const listener = () => setMatches(media.matches);
      media.addEventListener('change', listener);
      setMatches(media.matches);
      return () => media.removeEventListener('change', listener);
    }
  }, [query]);

  return matches;
};

