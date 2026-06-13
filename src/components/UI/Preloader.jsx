import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ["Design", "Develop", "Deploy", "Deliver", "Sher Mohammad"];

export default function Preloader({ onComplete }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index === words.length - 1) {
      const timer = setTimeout(() => {
        onComplete();
      }, 1300); // Display the final brand name for 1.3s before revealing the website
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 450); // Speed of each introductory keyword (450ms)
    return () => clearTimeout(timer);
  }, [index, onComplete]);

  return (
    <motion.div
      className="preloader-container"
      initial={{ y: 0 }}
      exit={{ 
        y: "-100vh",
        transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } 
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: '#000814',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <AnimatePresence mode="wait">
          <motion.h1
            key={index}
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -35 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{
              fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '-0.03em',
              margin: 0,
              textTransform: index === words.length - 1 ? 'none' : 'uppercase',
              fontFamily: index === words.length - 1 ? "'Playfair Display', serif" : "'Inter', sans-serif",
              fontStyle: index === words.length - 1 ? 'italic' : 'normal',
              background: index === words.length - 1 
                ? 'linear-gradient(120deg, #1f4ff1, #ee10ee, #00d4ff)' 
                : 'none',
              WebkitBackgroundClip: index === words.length - 1 ? 'text' : 'none',
              WebkitTextFillColor: index === words.length - 1 ? 'transparent' : 'initial'
            }}
          >
            {words[index]}
          </motion.h1>
        </AnimatePresence>
        
        {/* Progress loader bar */}
        <div style={{
          width: '140px',
          height: '2px',
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          marginTop: '25px',
          marginLeft: 'auto',
          marginRight: 'auto',
          borderRadius: '2px',
          overflow: 'hidden',
          position: 'relative'
        }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${((index + 1) / words.length) * 100}%` }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{
              height: '100%',
              background: 'linear-gradient(90deg, #1f4ff1, #ee10ee, #00d4ff)',
              position: 'absolute',
              top: 0,
              left: 0
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
