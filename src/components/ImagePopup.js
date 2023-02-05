import React from "react";
 function ImagePopup() {
    return (
        <div className="popup popup_type_image-view">
        <figure className="popup__image-conteiner">
          <img src="#" alt="" className="popup__image" />
          <figcaption className="popup__image-title"></figcaption>
          <button className="popup__close-button popup__close-button_place_image-view"></button>
        </figure>
      </div>
    );
 }

 export default ImagePopup;