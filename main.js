// Intersection Observer for scroll reveal animations
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, observerOptions);

// Observe all reveal elements
document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach(el => observer.observe(el));

  // Smooth scroll for scroll indicator
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
      const firstSection = document.querySelector('.message-section');
      if (firstSection) {
        firstSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Add parallax effect to photo frames
  const photoFrames = document.querySelectorAll('.photo-frame');

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;

    photoFrames.forEach((frame, index) => {
      const rect = frame.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

      if (isVisible) {
        const speed = 0.05;
        const yPos = -(rect.top * speed);
        frame.style.transform = `translateY(${yPos}px)`;
      }
    });
  });

  // Add smooth entrance to hero content
  setTimeout(() => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      heroContent.style.opacity = '1';
    }
  }, 100);

  // Interactive text highlight on scroll
  const textBlocks = document.querySelectorAll('.text-block p, .memory-text p, .confession-content p');

  const textObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateX(0)';
      }
    });
  }, {
    threshold: 0.5,
    rootMargin: '0px'
  });

  textBlocks.forEach(block => {
    block.style.opacity = '0.7';
    block.style.transform = 'translateX(-10px)';
    block.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    textObserver.observe(block);
  });

  // Add sparkle effect on confession section
  const confessionSection = document.querySelector('.confession-section');

  if (confessionSection) {
    const createSparkle = () => {
      const sparkle = document.createElement('div');
      sparkle.style.position = 'absolute';
      sparkle.style.width = '4px';
      sparkle.style.height = '4px';
      sparkle.style.borderRadius = '50%';
      sparkle.style.background = 'rgba(212, 165, 116, 0.8)';
      sparkle.style.left = Math.random() * 100 + '%';
      sparkle.style.top = Math.random() * 100 + '%';
      sparkle.style.pointerEvents = 'none';
      sparkle.style.animation = 'sparkle 3s ease-in-out infinite';
      sparkle.style.zIndex = '0';

      confessionSection.appendChild(sparkle);

      setTimeout(() => sparkle.remove(), 3000);
    };

    // Add sparkle animation to CSS
    const style = document.createElement('style');
    style.textContent = `
      @keyframes sparkle {
        0% { opacity: 0; transform: scale(0); }
        50% { opacity: 1; transform: scale(1); }
        100% { opacity: 0; transform: scale(0); }
      }
    `;
    document.head.appendChild(style);

    // Create sparkles periodically
    setInterval(createSparkle, 800);
  }

  // Animate poem lines on view
  const poemLines = document.querySelectorAll('.hindi-line');

  const poemObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        poemLines.forEach((line, index) => {
          setTimeout(() => {
            line.style.opacity = '1';
            line.style.transform = 'translateY(0)';
          }, index * 200);
        });
      }
    });
  }, {
    threshold: 0.3
  });

  poemLines.forEach(line => {
    line.style.opacity = '0';
    line.style.transform = 'translateY(20px)';
    line.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  });

  const poemSection = document.querySelector('.poem-section');
  if (poemSection) {
    poemObserver.observe(poemSection);
  }

  // Add gentle floating animation to images
  photoFrames.forEach((frame, index) => {
    const img = frame.querySelector('img');
    if (img) {
      img.style.animation = `float ${3 + (index % 3)}s ease-in-out infinite`;
    }
  });

  // Add float animation
  const floatStyle = document.createElement('style');
  floatStyle.textContent = `
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
  `;
  document.head.appendChild(floatStyle);
});

// Smooth page load
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
  document.body.style.transition = 'opacity 0.5s ease';
});

// Add body opacity for smooth load
document.body.style.opacity = '0';
