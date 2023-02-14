import React, { useState, useEffect } from "react";
import { CurrentUserContext} from '../contexts/CurrentUserContext';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";

function App() {
  const [onEditProfile, setOnEditProfile] = useState(false);
  const [onEditAvatar, setOnEditAvatar] = useState(false);
  const [onAddPlace, setOnAddPlace] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState([]);
  const [cards, setCards] = useState([]);



  useEffect(() => { 
    api 
      .getCards() 
      .then((res) => { 
        setCards(res); 
      }) 
      .catch((err) => { 
        console.log(`Ошибка: ${err}`); 
      }); 
  }, []); 

  useEffect(() => { 
    api.getUserInfo().then((data) => { 
      setCurrentUser(data); 
    }) 
      .catch((err) => { 
        console.log(`Ошибка: ${err}`); 
      }); 
  }, []); 

  const handleEditProfileClick = () => {
    setOnEditProfile(true);
  };

  const handleEditAvatarClick = () => {
    setOnEditAvatar(true);
  };

  const handleAddPlaceClick = () => {
    setOnAddPlace(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setOnEditProfile(false);
    setOnEditAvatar(false);
    setOnAddPlace(false);
    setSelectedCard(null);
  };

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
} 

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="app">
      <div className="page">
        <Header />
        <Main
          isEditProfilePopupOpen={handleEditProfileClick}
          isAddPlacePopupOpen={handleEditAvatarClick}
          isEditAvatarPopupOpen={handleAddPlaceClick}
          isImagePopupOpen={handleCardClick}
          isCardLike={handleCardLike}
          cards={cards}
        />

        <Footer />

        {/* Popup 1 редактирование профиля */}
        <PopupWithForm
          title="Редактировать профиль"
          name="edit-profile"
          buttonText="Сохранить"
          isOpen={onEditProfile}
          onClose={closeAllPopups}
        >
          <label className="popup__label">
            <input
              id="userName-input"
              name="name"
              type="text"
              defaultValue="Жак-Ив Кусто"
              className="popup__input popup__input_type_name"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="popup__input-error userName-input-error"></span>
          </label>
          <label className="popup__label">
            <input
              id="useJob-input"
              name="about"
              type="text"
              defaultValue="Исследователь океана"
              className="popup__input popup__input_type_job"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="popup__input-error useJob-input-error"></span>
          </label>
        </PopupWithForm>

        {/* Popup 2 добавление фото */}
        <PopupWithForm
          title="Новое место"
          name="add-element"
          buttonText="Создать"
          isOpen={onEditAvatar}
          onClose={closeAllPopups}
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
        </PopupWithForm>

        {/* Popup 3 обновление аватара */}
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
        {/* Popup 4 удaление карточки */}
        <PopupWithForm title="" name="" buttonText="Да" children={<></>} />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </div>
    </CurrentUserContext.Provider>
  );

}

export default App;
