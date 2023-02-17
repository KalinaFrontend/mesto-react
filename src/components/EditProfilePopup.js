import React, { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

const currentUser = useContext(CurrentUserContext);

useEffect(() => {
  setName(currentUser.name);
  setDescription(currentUser.about);
}, [currentUser]); 


   const handleChangeName = (e) => {
   const text = e.target.value;
   setName(text); 
  } 

  const handleChangeDescription = (e) => {
  const text = e.target.value;
  setDescription(text);
}

function handleSubmit(e) {
  // Запрещаем браузеру переходить по адресу формы
  e.preventDefault();

  // Передаём значения управляемых компонентов во внешний обработчик
  onUpdateUser({
    name,
    about: description,
  });
} 


  return (
    <PopupWithForm
    title="Редактировать профиль"
    name="edit-profile"
    buttonText="Сохранить"
    isOpen={isOpen}
    onClose={onClose}
    onSubmit={handleSubmit}
  >
    <label className="popup__label">
      <input
        id="userName-input"
        name="name"
        type="text"
        className="popup__input popup__input_type_name"
        minLength="2"
        maxLength="40"
        value={name}
        onChange={handleChangeName} 
        required
      />
      <span className="popup__input-error userName-input-error"></span>
    </label>
    <label className="popup__label">
      <input
        id="useJob-input"
        name="about"
        type="text"
        className="popup__input popup__input_type_job"
        minLength="2"
        maxLength="200"
        value={description}
        onChange={handleChangeDescription} 
        required
      />
      <span className="popup__input-error useJob-input-error"></span>
    </label>
  </PopupWithForm>
  );
}

export default EditProfilePopup;