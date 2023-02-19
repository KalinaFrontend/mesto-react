import React, { useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar}) {
  const avatarRef = useRef();

  useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }
  
  return (
    <PopupWithForm
      title="Обновить аватар"
      name="update-avatar"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__label">
        <input
          id="avatar-input"
          name="avatar"
          type="url"
          placeholder="Ссылка на картинку"
          className="popup__input popup__input_type_avatar"
          required
          ref={avatarRef}
        />
        <span className="popup__input-error avatar-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
