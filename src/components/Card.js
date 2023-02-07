import React from "react";

function Card({card, onCardClick}) {

const handleCardClick = () => {
  onCardClick(card);
}

  return (
            <li className="elements__item">
              <button type="button" className="elements__delete"></button>
              <img src={card.link} alt="" className="elements__item-image" onClick={handleCardClick}/>
              <div className="elements__item-card">
                <h3 className="elements__item-title">{card.name}</h3>
                <div className="elemants__item-likes">
                  <button type="button" className="elements__item-like"></button>
                  <p className="elements__item-number-likes">{card.likes.length}</p>
                </div>
              </div>
            </li>
  );
}
 export default Card;