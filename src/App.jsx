import { useState } from 'react';
import OpeningAnimation from './components/OpeningAnimation';
import PhotoGallery from './components/PhotoGallery';
import MessageCard from './components/MessageCard';
import './App.css';

function App() {
  const [showMain, setShowMain] = useState(false);

  const handleAnimationComplete = () => {
    setShowMain(true);
  };

  return (
    <div className="app">
      {!showMain && <OpeningAnimation onComplete={handleAnimationComplete} />}

      {showMain && (
        <div className="main-content">
          <header className="app-header">
            <div className="header-content">
              <h1 className="header-title">Happy Birthday My Love</h1>
              <p className="header-subtitle">A celebration of you and our beautiful journey together</p>
            </div>
            <div className="scroll-indicator">
              <div className="scroll-arrow"></div>
            </div>
          </header>

          <MessageCard />
          <PhotoGallery />

          <footer className="app-footer">
            <div className="footer-content">
              <div className="footer-heart">♥</div>
              <p className="footer-text">Every moment with you is a treasure</p>
              <p className="footer-date">Forever and Always</p>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}

export default App;
