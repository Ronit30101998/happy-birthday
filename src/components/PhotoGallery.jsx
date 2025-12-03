import { useState } from 'react';
import './PhotoGallery.css';
import photo1 from '../assets/a1.jpg';
import photo2 from '../assets/a2.jpg';
import photo3 from '../assets/a3.jpg';
import photo4 from '../assets/a4.jpg';
import photo5 from '../assets/a5.jpg';
import photo6 from '../assets/a6.jpg';
import photo7 from '../assets/a7.jpg';

const photos = [
  { id: 1, src: photo1, caption: 'Every moment with you is precious' },
  { id: 2, src: photo2, caption: 'Your smile lights up my world' },
  { id: 3, src: photo3, caption: 'Together we create magic' },
  { id: 4, src: photo4, caption: 'You make life beautiful' },
  { id: 5, src: photo5, caption: 'My heart belongs to you' },
  { id: 6, src: photo6, caption: 'Forever grateful for you' },
  { id: 7, src: photo7, caption: 'Love grows stronger each day' }
];

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="gallery-section">
      <h2 className="gallery-title">Our Beautiful Memories</h2>
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className="photo-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="photo-wrapper" onClick={() => setSelectedPhoto(photo)}>
              <img src={photo.src} alt={`Memory ${photo.id}`} />
            </div>
            <p className="photo-caption-below">{photo.caption}</p>
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div className="modal-overlay" onClick={() => setSelectedPhoto(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setSelectedPhoto(null)}>×</button>
            <img src={selectedPhoto.src} alt={`Memory ${selectedPhoto.id}`} />
            <p className="modal-caption">{selectedPhoto.caption}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
