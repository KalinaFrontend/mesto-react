import React from "react";
import "../index.css";

function PopupWithForm({title, name, buttonText, children}) {
  return (
    <>
      <div className={`popup popup_type_${name}`}>
      <div className="popup__content">
      <button type="button" className="popup__close-button"></button>
      <h2 className="popup__content-title">{title}</h2>
      {children}
      <button type="submit" className="popup__save-button ">{buttonText}</button>
      </div>
      </div>

      {/*  Popup 3 открытие фото 
            <div className="popup popup_type_image-view">
        <figure className="popup__image-conteiner">
          <img src="#" alt="" className="popup__image" />
          <figcaption className="popup__image-title"></figcaption>
          <button className="popup__close-button popup__close-button_place_image-view"></button>
        </figure>
      </div>
      */}
    </>
  );
}

export default PopupWithForm;
