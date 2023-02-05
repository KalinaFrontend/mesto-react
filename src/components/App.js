import React from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <div className="page">
        <Header />
        <Main />
        <Footer />
        {/* Popup 1 редактирование профиля */}
        <div className="popup popup_type_edit-profile">
          <div className="popup__content">
            <button
              type="button"
              className="popup__close-button popup__close-button_place_edit-profile"
            ></button>
            <h2 className="popup__content-title">Редактировать профиль</h2>
            <form name="popup-form-profile" className="popup__form" novalidate>
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
              <button type="submit" className="popup__save-button">
                Сохранить
              </button>
            </form>
          </div>
        </div>
        {/* Popup 2 добавление фото */}
        <div className="popup popup_type_add-element">
          <div className="popup__content">
            <button
              type="button"
              className="popup__close-button popup__close-button_place_add-element"
            ></button>
            <h2 className="popup__content-title">Новое место</h2>
            <form name="popup-form-profile" className="popup__form" novalidate>
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
              <button type="submit" className="popup__save-button">
                Создать
              </button>
            </form>
          </div>
        </div>
        {/*  Popup 3 открытие фото */}
        <div className="popup popup_type_image-view">
          <figure className="popup__image-conteiner">
            <img src="#" alt="" className="popup__image" />
            <figcaption className="popup__image-title"></figcaption>
            <button className="popup__close-button popup__close-button_place_image-view"></button>
          </figure>
        </div>
        {/* Popup 4 удaление карточки */}
        <div className="popup popup_type_delite-card">
          <div className="popup__content">
            <button
              type="button"
              className="popup__close-button popup__close-button_place_delite-card"
            ></button>
            <h2 className="popup__content-title">Вы уверены?</h2>
            <button
              type="submit"
              className="popup__save-button popup__save-button_place_delete-card"
            >
              Да
            </button>
          </div>
        </div>
        {/* Popup 5 обновление аватара */}
        <div className="popup popup_type_update-avatar">
          <div className="popup__content">
            <button
              type="button"
              className="popup__close-button popup__close-button_place_add-element"
            ></button>
            <h2 className="popup__content-title">Обновить аватар</h2>
            <form name="popup-form-profile" className="popup__form" novalidate>
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
              <button
                type="submit"
                className="popup__save-button popup__save-button_place_update-avatar"
              >
                Сохранить
              </button>
            </form>
          </div>
        </div>
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
