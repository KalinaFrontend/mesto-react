import React from "react";
import "../index.css";
import api from "../utils/Api";
import Card from "./Card";

function Main({
  isEditProfilePopupOpen,
  isAddPlacePopupOpen,
  isEditAvatarPopupOpen,
  isImagePopupOpen,
}) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);


  React.useEffect(() => {
    api.getUserInfo().then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }, []);
 
  React.useEffect(() => {
    api
      .getCard()
      .then((res) => {
        console.log(res);
        setCards(res);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__card">
          <img
            src={userAvatar}
            alt="Аватар пользователя"
            className="profile__avatar"
          />
          <button
            className="profile__avatar-edit-button"
            type="button"
            onClick={isEditAvatarPopupOpen}
          ></button>
          <div className="profile__info">
            <div className="profile__info-block">
              <h1 className="profile__info-name">{userName}</h1>
              <button
                type="button"
                className="profile__edit-button"
                onClick={isEditProfilePopupOpen}
              ></button>
            </div>
            <p className="profile__job">{userDescription}</p>
          </div>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={isAddPlacePopupOpen}
        ></button>
      </section>
      <section className="elements" aria-label="Фотографии">
        <ul className="elements__items">
        {cards.map((card) => {
          return (
            <Card key={card._id} card={card} onCardClick={isImagePopupOpen}/>
          );
        })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
