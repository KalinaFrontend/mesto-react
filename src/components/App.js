import React from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [onEditProfile, setOnEditProfile] = React.useState(false);
  const [onEditAvatar, setOnEditAvatar] = React.useState(false);
  const [onAddPlace, setOnAddPlace] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState('');

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
  }

  const closeAllPopups = () => {
    setOnEditProfile(false);
    setOnEditAvatar(false);
    setOnAddPlace(false);
    setSelectedCard('');
  };

  return (
    <div className="app">
      <div className="page">
        <Header />
        <Main
          isEditProfilePopupOpen={handleEditProfileClick}
          isAddPlacePopupOpen={handleEditAvatarClick}
          isEditAvatarPopupOpen={handleAddPlaceClick}
          isImagePopupOpen={handleCardClick}
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
          <form name="popup-form-profile" className="popup__form" noValidate>
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
          </form>
        </PopupWithForm>

        {/* Popup 2 добавление фото */}
        <PopupWithForm
          title="Новое место"
          name="add-element"
          buttonText="Создать"
          isOpen={onEditAvatar}
          onClose={closeAllPopups}
        >
          <form name="popup-form-profile" className="popup__form" noValidate>
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
          </form>
        </PopupWithForm>

        {/* Popup 3 обновление аватара */}
        <PopupWithForm
          title="Обновить аватар"
          name="update-avatar"
          buttonText="Сохранить"
          isOpen={onAddPlace}
          onClose={closeAllPopups}
        >
          <form
            name="popup-form-profile"
            className="popup__form"
            noValidate
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
        </PopupWithForm>
        {/* Popup 4 удaление карточки */}
        <PopupWithForm title="" name="" buttonText="Да" children={<></>} />

        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
      </div>
    </div>
  );
}

export default App;
