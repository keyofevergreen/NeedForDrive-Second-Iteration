import { useState, useEffect } from 'react';

type Window = {
  width: number,
  height: number,
};

function getWindowDimensions(): Window {
  return { width: window.innerWidth, height: window.innerHeight };
}

export default function useResize(): Window {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize(): void {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
