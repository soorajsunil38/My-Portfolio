import React, { useState, useRef, useEffect } from "react";

const FadeIn = ({ children, delay=0, threshold=0.1, duration=500 }) => {

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { 
        threshold: threshold,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold, isVisible]);

  return (
    <div
      ref={elementRef}
      className={isVisible ? "animate-fade-in" : "opacity-0"}
      style={{
        animationDelay: isVisible ? `${delay}ms` : "0ms",
        animationDuration: `${duration}ms`,
        animationFillMode: "both"
      }}
    >
      {children}
    </div>

  );
}

export default FadeIn;