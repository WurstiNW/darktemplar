import React, { useEffect, useRef } from 'react';
import '../styles/components.css';

const Background = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create finance-themed particles
    const createParticles = () => {
      const particles = [];
      const particleCount = Math.min(80, Math.floor((window.innerWidth * window.innerHeight) / 15000));
      
      for (let i = 0; i < particleCount; i++) {
        const type = Math.random();
        let particleConfig;
        
        if (type < 0.3) {
          // Data points (like scatter plot)
          particleConfig = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 1,
            speedX: 0,
            speedY: 0,
            color: `rgba(74, 222, 128, ${Math.random() * 0.3 + 0.1})`, // Green
            type: 'data'
          };
        } else if (type < 0.6) {
          // Gentle floating elements (like market movements)
          particleConfig = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 1.5 + 0.5,
            speedX: (Math.random() - 0.5) * 0.2,
            speedY: (Math.random() - 0.5) * 0.2,
            color: `rgba(96, 165, 250, ${Math.random() * 0.2 + 0.05})`, // Blue
            type: 'float'
          };
        } else {
          // Grid reference points
          particleConfig = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 1 + 0.5,
            speedX: 0,
            speedY: 0,
            color: `rgba(148, 163, 184, ${Math.random() * 0.1 + 0.02})`, // Gray
            type: 'grid'
          };
        }
        
        particles.push(particleConfig);
      }
      return particles;
    };

    particlesRef.current = createParticles();

    // Mouse move interaction
    const handleMouseMove = (event) => {
      mouseRef.current = {
        x: event.clientX,
        y: event.clientY
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create professional finance gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#0f172a'); // Dark blue-gray
      gradient.addColorStop(0.5, '#1e293b'); // Medium blue-gray
      gradient.addColorStop(1, '#334155'); // Light blue-gray
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw subtle grid lines (like financial charts)
      drawGrid(ctx, canvas);
      
      // Draw trend lines (like stock charts)
      drawTrendLines(ctx, canvas);

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        // Only move floating particles
        if (particle.type === 'float') {
          particle.x += particle.speedX;
          particle.y += particle.speedY;

          // Boundary check with wrap-around
          if (particle.x < -particle.size) particle.x = canvas.width + particle.size;
          if (particle.x > canvas.width + particle.size) particle.x = -particle.size;
          if (particle.y < -particle.size) particle.y = canvas.height + particle.size;
          if (particle.y > canvas.height + particle.size) particle.y = -particle.size;
        }

        // Draw particle
        ctx.beginPath();
        ctx.fillStyle = particle.color;
        
        if (particle.type === 'data') {
          // Data points as small circles
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        } else {
          // Other particles as squares/diamonds for professional look
          ctx.rect(particle.x - particle.size/2, particle.y - particle.size/2, particle.size, particle.size);
        }
        
        ctx.fill();

        // Draw connections between nearby data points
        if (particle.type === 'data') {
          particlesRef.current.forEach((otherParticle, otherIndex) => {
            if (index !== otherIndex && otherParticle.type === 'data') {
              const dx = particle.x - otherParticle.x;
              const dy = particle.y - otherParticle.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              
              if (distance < 120) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(74, 222, 128, ${0.05 * (1 - distance / 120)})`;
                ctx.lineWidth = 0.3;
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.stroke();
              }
            }
          });
        }
      });

      // Add floating finance indicators
      drawFinanceIndicators(ctx, canvas);
      
      animationRef.current = requestAnimationFrame(animate);
    };

    const drawGrid = (ctx, canvas) => {
      ctx.strokeStyle = 'rgba(100, 116, 139, 0.1)';
      ctx.lineWidth = 0.5;
      
      // Vertical lines
      for (let x = 0; x < canvas.width; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let y = 0; y < canvas.height; y += 50) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const drawTrendLines = (ctx, canvas) => {
      const time = Date.now() * 0.001;
      
      // Upward trend line (green)
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(74, 222, 128, 0.15)';
      ctx.lineWidth = 2;
      ctx.moveTo(0, canvas.height * 0.7);
      for (let x = 0; x < canvas.width; x += 20) {
        const y = canvas.height * 0.7 - Math.sin(x * 0.01 + time) * 50 - x * 0.05;
        ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Gentle wave line (blue)
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(96, 165, 250, 0.1)';
      ctx.lineWidth = 1.5;
      ctx.moveTo(0, canvas.height * 0.4);
      for (let x = 0; x < canvas.width; x += 15) {
        const y = canvas.height * 0.4 + Math.cos(x * 0.008 + time * 0.8) * 30;
        ctx.lineTo(x, y);
      }
      ctx.stroke();
    };

    const drawFinanceIndicators = (ctx, canvas) => {
      const time = Date.now() * 0.001;
      
      // Floating percentage indicators
      const percentages = ['+2.4%', '+1.8%', '+3.2%', '-0.5%', '+4.1%'];
      percentages.forEach((percent, index) => {
        const x = (canvas.width / (percentages.length + 1)) * (index + 1);
        const y = canvas.height * 0.3 + Math.sin(time * 0.5 + index) * 40;
        
        ctx.save();
        ctx.globalAlpha = 0.2 + Math.sin(time + index) * 0.1;
        ctx.fillStyle = percent.startsWith('+') ? 'rgba(74, 222, 128, 0.4)' : 'rgba(248, 113, 113, 0.4)';
        ctx.font = '16px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(percent, x, y);
        ctx.restore();
      });

      // Bar chart-like elements
      for (let i = 0; i < 8; i++) {
        const x = 100 + i * 80;
        const height = 20 + Math.sin(time * 2 + i) * 15;
        const isPositive = i % 3 !== 0;
        
        ctx.fillStyle = isPositive 
          ? 'rgba(74, 222, 128, 0.25)' 
          : 'rgba(248, 113, 113, 0.25)';
        ctx.fillRect(x, canvas.height - 100 - height, 30, height);
      }
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="background-container">
      <canvas 
        ref={canvasRef} 
        className="finance-background"
      />
      <div className="background-overlay"></div>
    </div>
  );
};

export default Background;
