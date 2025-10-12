import React, { useEffect, useRef } from 'react';
import '../styles/components.css';

const Background = () => {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current) {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        backgroundRef.current.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="background-container" ref={backgroundRef}>
      <div className="finance-background">
        {/* Animated Stock Charts */}
        <div className="stock-chart chart-1"></div>
        <div className="stock-chart chart-2"></div>
        <div className="stock-chart chart-3"></div>
        
        {/* Floating Financial Elements */}
        <div className="finance-element coin-1">$</div>
        <div className="finance-element coin-2">€</div>
        <div className="finance-element coin-3">£</div>
        <div className="finance-element coin-4">¥</div>
        
        {/* Data Points */}
        <div className="data-point point-1"></div>
        <div className="data-point point-2"></div>
        <div className="data-point point-3"></div>
        <div className="data-point point-4"></div>
        <div className="data-point point-5"></div>
        
        {/* Grid Lines */}
        <div className="grid-line horizontal-1"></div>
        <div className="grid-line horizontal-2"></div>
        <div className="grid-line horizontal-3"></div>
        <div className="grid-line vertical-1"></div>
        <div className="grid-line vertical-2"></div>
        <div className="grid-line vertical-3"></div>
        
        {/* Background Gradient */}
        <div className="finance-gradient"></div>
      </div>
    </div>
  );
};

export default Background;
