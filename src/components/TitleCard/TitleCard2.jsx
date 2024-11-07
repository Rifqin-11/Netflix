// TitleCard2.jsx
import React from 'react';
import cards_data2 from '../../assets/cards/cards_data2';
import './TitleCard.css';

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
            <img src={card.image} alt={card.name} className='card-image'/>
            <p>{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCard2;
