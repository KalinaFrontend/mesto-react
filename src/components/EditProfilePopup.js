import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({isOpen, onClose}) {
  return (
    <PopupWithForm
    title="Редактировать профиль"
    name="edit-profile"
    buttonText="Сохранить"
    isOpen={isOpen}
    onClose={onClose}
  >
    <label className="popup__label">
      <input
        id="userName-input"
        name="name"
        type="text"
        defaultValue="Жак-Ив Кусто"
        className="popup__input popup__input_type_name"
        minLength="2"
        maxLength="40"
        required
      />
      <span className="popup__input-error userName-input-error"></span>
    </label>
    <label className="popup__label">
      <input
        id="useJob-input"
        name="about"
        type="text"
        defaultValue="Исследователь океана"
        className="popup__input popup__input_type_job"
        minLength="2"
        maxLength="200"
        required
      />
      <span className="popup__input-error useJob-input-error"></span>
    </label>
  </PopupWithForm>
  );
}

export default EditProfilePopup;