import { useState, useEffect } from "react";

export default function useSectionVisible(ref, threshold = 0.2) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      threshold,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          return;
        }
        setIsVisible(false);
      });
    }, options);
    if (ref.current) observer.observe(ref.current);
  }, [ref, threshold]);

  return isVisible;
}
