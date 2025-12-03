import { useState, useEffect } from 'react';
import './OpeningAnimation.css';

const OpeningAnimation = ({ onComplete }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(() => onComplete(), 800);
    }, 5000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`opening-container ${!show ? 'fade-out' : ''}`}>
      <div className="balloons-container">
        <div className="balloon balloon-1"></div>
        <div className="balloon balloon-2"></div>
        <div className="balloon balloon-3"></div>
        <div className="balloon balloon-4"></div>
        <div className="balloon balloon-5"></div>
      </div>

      <div className="cake-container">
        <div className="cake">
          <div className="cake-layer cake-layer-3"></div>
          <div className="cake-layer cake-layer-2"></div>
          <div className="cake-layer cake-layer-1"></div>
          <div className="candle">
            <div className="flame"></div>
          </div>
        </div>
      </div>

      <div className="opening-text">
        <h1 className="main-title">Happy Birthday</h1>
        <p className="sub-title">To My Beautiful Love</p>
      </div>

      <div className="sparkles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="sparkle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`
          }}></div>
        ))}
      </div>
    </div>
  );
};

export default OpeningAnimation;
