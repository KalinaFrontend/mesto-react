import React from "react"
import PopupWithForm from "./PopupWithForm"

function EditAvatarPopup({onAddPlace, closeAllPopups}) {


return (
    <PopupWithForm
          title="Обновить аватар"
          name="update-avatar"
          buttonText="Сохранить"
          isOpen={onAddPlace}
          onClose={closeAllPopups}
        >
          <label className="popup__label">
            <input
              id="avatar-input"
              name="avatar"
              type="url"
              placeholder="Ссылка на картинку"
              className="popup__input popup__input_type_avatar"
              required
            />
            <span className="popup__input-error avatar-input-error"></span>
          </label>
        </PopupWithForm>
)    
}

export default EditAvatarPopup