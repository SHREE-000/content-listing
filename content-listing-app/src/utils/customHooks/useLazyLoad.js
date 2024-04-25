import { useEffect, useState, useRef } from "react";

const useLazyLoad = (threshold = 0.5) => {
  const [inView, setInView] = useState(false);
  const placeholderRef = useRef();

  function onIntersection(entries, obs) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setInView(true);
        obs.disconnect();
      }
    });
  }

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection, {
      root: null, 
      threshold: threshold, 
    });

    if (placeholderRef.current) {
      observer.observe(placeholderRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return [placeholderRef, inView];
};

export default useLazyLoad;