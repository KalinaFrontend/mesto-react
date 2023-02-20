import React, { useState, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import DeleteCardPopup from "./DeleteCardPopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [onEditAvatar, setOnEditAvatar] = useState(false);
  const [onAddPlace, setOnAddPlace] = useState(false);
  const [onDeleteCard, setOnDeleteCard] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState([]);
  const [cards, setCards] = useState([]);
  const [cardDeleteId, setCardDeleteId] = useState(null);

  useEffect(() => {
    api
      .getCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });

    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }, []);

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleCardDelete = (_id) => {
    setCardDeleteId(_id);
    deleteCardPopup();
  };

  const handleDeleteCardPopup = () => {
    api.deleteCard(cardDeleteId)
    .then(()=> {
      setCards((state) => state.filter((item) => item._id !== cardDeleteId));
      closeAllPopups();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    });
  };

  const deleteCardPopup = () => {
    setOnDeleteCard(true);
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
    setIsEditProfilePopupOpen(false);
    setOnEditAvatar(false);
    setOnAddPlace(false);
    setOnDeleteCard(false);
    setSelectedCard(null);
  };

  function handleUpdateUser(data) {
    api
      .setUserInfo(data)
      .then((newUserInfo) => {
        setCurrentUser(newUserInfo);
        closeAllPopups();
      })
      .catch(console.error);
  }

  function handleUpdateAvatar(avatar) {
    api
      .updateAvatar(avatar)
      .then((newAvatar) => {
        setCurrentUser(newAvatar);
        closeAllPopups();
      })
      .catch(console.error);
  }

  function handleAddPlaceSubmit(card) {
    api
      .setCard(card)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch(console.error);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    })
    .catch(console.error);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <div className="page">
          <Header />
          <Main
            isEditProfilePopupOpen={handleEditProfileClick}
            isAddPlacePopupOpen={handleAddPlaceClick}
            isEditAvatarPopupOpen={handleEditAvatarClick}
            isImagePopupOpen={handleCardClick}
            isCardLike={handleCardLike}
            handleCardDelete={handleCardDelete}
            isDeleteCard={deleteCardPopup}
            cards={cards}
          />
          <Footer />
          {/* Popup 1 редактирование профиля */}
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          {/* Popup 2 добавление фото */}
          <AddPlacePopup
            isOpen={onAddPlace}
            onClose={closeAllPopups}
            onUpdateCards={handleAddPlaceSubmit}
          />
          {/* Popup 3 обновление аватара */}
          <EditAvatarPopup
            isOpen={onEditAvatar}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
          {/* Popup 4 удaление карточки */}
          <DeleteCardPopup
            isOpen={onDeleteCard}
            onClose={closeAllPopups}
            isDeleteCard={handleDeleteCardPopup}
          />
          {/* Popup 5 открытие карточки */}
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
