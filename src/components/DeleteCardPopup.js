import React from "react";
import PopupWithForm from "./PopupWithForm";

function DeleteCardPopup({ isOpen, onClose, isDeleteCard}) {

    function handleSubmit(e) {
        e.preventDefault();
        isDeleteCard();
        onClose();
      }
  
    return (
        <PopupWithForm 
        title="Вы уверены?" 
        name="" 
        buttonText="Да"       
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
        children={<></>} /> 
    )
}

export default DeleteCardPopup;