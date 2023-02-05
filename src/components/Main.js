import React from "react";
import "../index.css";

function Main() {

const handleEditAvatarClick = () => {
  document.querySelector('.popup_type_update-avatar').classList.add('popup_opened');
}

const handleEditProfileClick = () => {
    document.querySelector('.popup_type_edit-profile').classList.add('popup_opened');
}

const handleAddPlaceClick = () => {
    document.querySelector('.popup_type_add-element').classList.add('popup_opened');
}

 {/* Добавьте императивные обработчики
Чтобы добавить первую интерактивность, а заодно проверить, 
правильно ли вы портировали разметку попапов, внутри компонента Main добавьте следующие обработчики:
handleEditAvatarClick
handleEditProfileClick
handleAddPlaceClick
Здесь мы немного схитрим: внутри этих обработчиков временно используйте привычный императивный подход 
(с querySelector и classList.add), чтобы задавать CSS-класс popup_is-opened элементу нужного попапа.*/}
  return (
    <main classNameName="content">
      <section className="profile">
        <div className="profile__card">
          <button className="profile__avatar-edit-button" type="button" onClick={handleEditAvatarClick}>
            <img
              src="<%=require('./images/profile-avatar.jpg')%>"
              alt="Аватар пользователя"
              className="profile__avatar"
            />
          </button>
          <div className="profile__info">
            <div className="profile__info-block">
              <h1 className="profile__info-name">Жак-Ив Кусто</h1>
              <button type="button" className="profile__edit-button" onClick={handleEditProfileClick}></button>
            </div>
            <p className="profile__job">Исследователь океана</p>
          </div>
        </div>
        <button type="button" className="profile__add-button" onClick={handleAddPlaceClick}></button>
      </section>
      <section className="elements" aria-label="Фотографии">
        <ul className="elements__items"></ul>
      </section>
    </main>
  );
}

export default Main;
