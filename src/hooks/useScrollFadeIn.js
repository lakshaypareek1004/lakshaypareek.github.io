import { useRef, useEffect, useState } from 'react';

const useScrollFadeIn = (duration = 0.8, offset = 40) => {
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const node = domRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.14 }
    );
    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return {
    ref: domRef,
    style: {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : `translateY(${offset}px)`,
      transition: `opacity ${duration}s cubic-bezier(.25,1,.35,1), transform ${duration}s cubic-bezier(.25,1,.35,1)`
    }
  };
};

export default useScrollFadeIn;
