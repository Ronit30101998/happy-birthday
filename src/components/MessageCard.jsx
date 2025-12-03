import { useState, useEffect } from 'react';
import './MessageCard.css';

const messages = [
  {
    id: 1,
    title: 'To My Beautiful Soul',
    content: 'From the moment you walked into my life, everything changed. Your smile became my sunrise, your laughter became my favorite melody, and your love became my home. Today, on your special day, I celebrate not just your birth, but the incredible person you are and all the joy you bring to my world.',
    style: 'style-1'
  },
  {
    id: 2,
    title: 'My Dearest Love',
    content: 'Every day with you feels like a beautiful dream I never want to wake up from. You have this magical way of making ordinary moments extraordinary. Your kindness, your strength, your beautiful heart - they inspire me every single day. Thank you for being you, and thank you for choosing to share your life with me.',
    style: 'style-2'
  },
  {
    id: 3,
    title: 'Forever Grateful',
    content: 'In your eyes, I found my home. In your heart, I found my love. In your soul, I found my mate. You are my today and all of my tomorrows. Happy birthday to the one who makes my heart skip a beat and my life complete. May this year bring you as much happiness as you have brought into my life.',
    style: 'style-3'
  },
  {
    id: 4,
    title: 'My Heart Speaks',
    content: 'Words cannot fully express the depth of my love for you. You are the poetry my heart writes, the song my soul sings, and the dream my spirit cherishes. On this beautiful day, I want you to know that loving you is the best decision I have ever made. Here is to celebrating you today and always.',
    style: 'style-4'
  },
  {
    id: 5,
    title: 'To The Love of My Life',
    content: 'You are my greatest adventure, my sweetest blessing, and my deepest love. With you, I have found what I did not even know I was searching for - a love so pure, so true, so infinite. Today, I celebrate you and the incredible journey we share together. Happy birthday, my love. May all your dreams come true.',
    style: 'style-5'
  }
];

const MessageCard = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const nextMessage = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
      setIsVisible(true);
    }, 500);
  };

  const prevMessage = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentMessage((prev) => (prev - 1 + messages.length) % messages.length);
      setIsVisible(true);
    }, 500);
  };

  const message = messages[currentMessage];

  return (
    <div className="message-section">
      <div className="hearts-background">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="floating-heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          >
            ♥
          </div>
        ))}
      </div>

      <div className={`message-container ${message.style} ${isVisible ? 'visible' : 'hidden'}`}>
        <div className="message-card">
          <div className="card-ornament top-left"></div>
          <div className="card-ornament top-right"></div>
          <div className="card-ornament bottom-left"></div>
          <div className="card-ornament bottom-right"></div>

          <h3 className="message-title">{message.title}</h3>
          <div className="message-divider"></div>
          <p className="message-content">{message.content}</p>

          <div className="signature">
            <p>With all my love,</p>
            <p className="signature-name">Forever Yours</p>
          </div>
        </div>

        <div className="navigation-buttons">
          <button onClick={prevMessage} className="nav-button prev-button">
            <span>←</span>
          </button>
          <div className="message-indicator">
            {messages.map((_, index) => (
              <span
                key={index}
                className={`indicator-dot ${index === currentMessage ? 'active' : ''}`}
                onClick={() => {
                  setIsVisible(false);
                  setTimeout(() => {
                    setCurrentMessage(index);
                    setIsVisible(true);
                  }, 500);
                }}
              ></span>
            ))}
          </div>
          <button onClick={nextMessage} className="nav-button next-button">
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
