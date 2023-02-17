import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpen, onClose, onUpdateCards}) {

    const [name, setName] = useState('');
    const [link, setLink] =useState('');

    const handleChangeName = (e) => {
      const text = e.target.value;
      setName(text);
    }

    const handleChangeLink = (e) => {
       const text = e.target.value;
       setLink(text);
    }
  
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateCards({
      name: name,
      link: link,
    });
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="add-element"
      buttonText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__label">
        <input
          id="imageName-input"
          name="name"
          type="text"
          placeholder="Название"
          className="popup__input popup__input_type_image-name"
          minLength="2"
          maxLength="30"
          required
          value={name}
          onChange={handleChangeName}
        />
        <span className="popup__input-error  imageName-input-error"></span>
      </label>
      <label className="popup__label">
        <input
          id="imageLink-input"
          name="link"
          type="url"
          placeholder="Ссылка на картинку"
          className="popup__input popup__input_type_image-link"
          required
          value={link}
          onChange={handleChangeLink}
        />
        <span className="popup__input-error imageLink-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
