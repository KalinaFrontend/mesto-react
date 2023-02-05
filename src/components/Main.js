import React from "react";
import "../index.css";

function Main() {
  return (
    <main classNameName="content">
      <section className="profile">
        <div className="profile__card">
          <button className="profile__avatar-edit-button" type="button">
            <img
              src="<%=require('./images/profile-avatar.jpg')%>"
              alt="Аватар пользователя"
              className="profile__avatar"
            />
          </button>
          <div className="profile__info">
            <div className="profile__info-block">
              <h1 className="profile__info-name">Жак-Ив Кусто</h1>
              <button type="button" className="profile__edit-button"></button>
            </div>
            <p className="profile__job">Исследователь океана</p>
          </div>
        </div>
        <button type="button" className="profile__add-button"></button>
      </section>
      <section className="elements" aria-label="Фотографии">
        <ul className="elements__items"></ul>
      </section>
    </main>
  );
}

export default Main;
