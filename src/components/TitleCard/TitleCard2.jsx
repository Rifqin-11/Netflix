// TitleCard2.jsx
import React from 'react';
import cards_data2 from '../../assets/cards/cards_data2';
import './TitleCard.css';
import LazyLoad from 'react-lazyload';

const TitleCard2 = ({ openModal }) => {
  return (
    <div className="title-cards">
      <h2>If Dya With Me</h2>
      <div className="card-list">
        {cards_data2.map((card, index) => (
          <div
            className="card"
            key={index}
            onClick={() => openModal(card.name, card.name, card.image, card.description, card.modalImages)}
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

export default TitleCard2;
