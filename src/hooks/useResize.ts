import { useState, useEffect } from 'react';

function getWindowWidth(): number {
  return window.innerWidth;
}

export default function useResize(min: number, max: number): boolean {
  const [windowDimensions, setWindowDimensions] = useState(getWindowWidth() > min && getWindowWidth() < max);

  useEffect(() => {
    function handleResize(): void {
      const width = getWindowWidth();
      setWindowDimensions(width > min && width < max);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
