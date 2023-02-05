import React from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";

function App() {
  return (
    <div className="app">
      <div className="page">
        <Header />
        <Main />
        <Footer />

        {/* Popup 1 редактирование профиля */}
        <PopupWithForm
          title="Редактировать профиль"
          name="edit-profile"
          buttonText="Сохранить"
          children={
            <>
              <form
                name="popup-form-profile"
                className="popup__form"
                novalidate
              >
                <label className="popup__label">
                  <input
                    id="userName-input"
                    name="name"
                    type="text"
                    value="Жак-Ив Кусто"
                    className="popup__input popup__input_type_name"
                    minlength="2"
                    maxlength="40"
                    required
                  />
                  <span className="popup__input-error userName-input-error"></span>
                </label>
                <label className="popup__label">
                  <input
                    id="useJob-input"
                    name="about"
                    type="text"
                    value="Исследователь океана"
                    className="popup__input popup__input_type_job"
                    minlength="2"
                    maxlength="200"
                    required
                  />
                  <span className="popup__input-error useJob-input-error"></span>
                </label>
              </form>
            </>
          }
        />

        {/* Popup 2 добавление фото */}
        <PopupWithForm
          title="Новое место"
          name="add-element"
          buttonText="Создать"
          children={
            <>
              <form
                name="popup-form-profile"
                className="popup__form"
                novalidate
              >
                <label className="popup__label">
                  <input
                    id="imageName-input"
                    name="name"
                    type="text"
                    placeholder="Название"
                    className="popup__input popup__input_type_image-name"
                    minlength="2"
                    maxlength="30"
                    required
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
                  />
                  <span className="popup__input-error imageLink-input-error"></span>
                </label>
              </form>
            </>
          }
        />

        {/* Popup 3 обновление аватара */}
        <PopupWithForm
          title="Обновить аватар"
          name="update-avatar"
          buttonText="Сохранить"
          children={
            <>
              <form
                name="popup-form-profile"
                className="popup__form"
                buttonText="Сохранить"
                novalidate
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
              </form>
            </>
          }
        />
        {/* Popup 4 удaление карточки */}
        <PopupWithForm title="" name="" buttonText="Да" children={<></>} />

        {/* Template */}
        <template className="template" id="template">
          <li className="elements__item">
            <button type="button" className="elements__delete"></button>
            <img src="#" alt="" className="elements__item-image" />
            <div className="elements__item-card">
              <h3 className="elements__item-title"></h3>
              <div className="elemants__item-likes">
                <button type="button" className="elements__item-like"></button>
                <p className="elements__item-number-likes"></p>
              </div>
            </div>
          </li>
        </template>
      </div>
    </div>
  );
}

export default App;
