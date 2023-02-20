import React, { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onUpdateCards }) {
  
  const [values, setValues] = useState({});

  useEffect(() => {
    setValues({});
  }, [isOpen]);

  const handleChange = (event) => { 
    const { name, value } = event.target;
      setValues({ 
      ...values, 
      [name]: value
    }) 
  } 

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateCards(values);
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
          value={values.name || ''}
          onChange={handleChange}
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
          value={values.link || ''}
          onChange={handleChange}
        />
        <span className="popup__input-error imageLink-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
