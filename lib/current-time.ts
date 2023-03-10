/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

export const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(() => {
    const date = new Date();
    return date;
  });

  let timer: NodeJS.Timer;
  useEffect(() => {
    timer = setInterval(() => {
      setCurrentTime(() => {
        const date = new Date();
        return date;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return currentTime;
};
