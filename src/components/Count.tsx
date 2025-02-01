"use client";
import React, { useEffect, useState } from "react";

export type CountProps = {
  duration: number; // duration of the animation in milliseconds
  delay?: number; // delay in milliseconds
  startNumber?: number;
  endNumber: number;
};

const Count: React.FC<CountProps> = ({
  startNumber = 0,
  delay = 0,
  duration,
  endNumber,
}) => {
  const [count, setCount] = useState<number>(startNumber);

  useEffect(() => {
    if (startNumber >= endNumber) return;

    const totalSteps = endNumber - startNumber;
    const intervalTime = duration / totalSteps;

    let intervalId: NodeJS.Timeout | null = null;

    const delayTimer = setTimeout(() => {
      intervalId = setInterval(() => {
        setCount((prev) => {
          if (prev >= endNumber) {
            if (intervalId) clearInterval(intervalId);
            return endNumber;
          }
          return prev + 1;
        });
      }, intervalTime);
    }, delay);

    return () => {
      if (intervalId) clearInterval(intervalId);
      clearTimeout(delayTimer);
    };
  }, [startNumber, endNumber, duration, delay]);

  return <span>{count}</span>;
};

export default Count;
