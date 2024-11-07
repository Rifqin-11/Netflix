// TitleCard.jsx
import React from 'react';
import './TitleCard.css';
import LazyLoad from 'react-lazyload';

const TitleCard = ({ title, contents, onClick }) => {
  return (
    <div className="title-cards">
      <h2>{title || "If Dya With Me"}</h2>
      <div className="card-list">
        {contents.map((card, index) => (
          <div
            className="card"
            key={index}
            onClick={() => onClick(card.name, card.name, card.image, card.description, card.modalImages)} // Pass card.name, card.name, and card.image to openModal
          >
            <LazyLoad height={200} offset={100} once>
              <img src={card.image} alt={card.name} className='card-image' loading="lazy"/>
            </LazyLoad>
            <p>{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCard;
