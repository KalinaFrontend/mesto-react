import React from "react";
import "../index.css";

function PopupWithForm({title, name, buttonText, isOpen, onClose, children}) {

  return (
    <>
      <div className={ isOpen ?  `popup popup_type_${name} popup_opened` : `popup popup_type_${name}`}>
      <div className="popup__content">
      <button type="button" className="popup__close-button" onClick={onClose}></button>
      <h2 className="popup__content-title">{title}</h2>
      {children}
      <button type="submit" className="popup__save-button ">{buttonText}</button>
      </div>
      </div>
    </>
  );
}

export default PopupWithForm;
