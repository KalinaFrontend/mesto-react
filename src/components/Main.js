import React from "react";
import "../index.css";
import api from "../utils/Api";

function Main({isEditProfilePopupOpen, isAddPlacePopupOpen, isEditAvatarPopupOpen}) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription ] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  api.getUserInfo().then( data=> {
    setUserName(data.name);
    setUserDescription(data.about);
    setUserAvatar(data.avatar);
  })

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__card">
            <img
              src={userAvatar}
              alt="Аватар пользователя"
              className="profile__avatar"
            />
          <button className="profile__avatar-edit-button" type="button" onClick={isEditAvatarPopupOpen}></button>
          <div className="profile__info">
            <div className="profile__info-block">
              <h1 className="profile__info-name">{userName}</h1>
              <button type="button" className="profile__edit-button" onClick={isEditProfilePopupOpen}></button>
            </div>
            <p className="profile__job">{userDescription}</p>
          </div>
        </div>
        <button type="button" className="profile__add-button" onClick={isAddPlacePopupOpen}></button>
      </section>
      <section className="elements" aria-label="Фотографии">
        <ul className="elements__items"></ul>
      </section>
    </main>
  );
}

export default Main;
