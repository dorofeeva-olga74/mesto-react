import React, { useState } from 'react';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import PopupWithForm from './components/PopupWithForm.js';
import ImagePopup from './components/ImagePopup.js';
import Card from './components/Card.js';

function App() {
  //const [isOpen, setIsOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});//для всплывающей картинки

  // добавляю обработчики  
  function handleEditAvatarClick(e) {
    e.preventDefault();
    setIsEditAvatarPopupOpen(true);
  }
  const handleEditProfileClick = (e) => {
    e.preventDefault();
    setIsEditProfilePopupOpen(true);
  }
  const handleAddPlaceClick = (e) => {
    e.preventDefault();
    setIsAddPlacePopupOpen(true);
  }
  // Закрытие попапов
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({})
  }
  return (
    // <div className="page"> это app!!!
    <div className="app">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}/*новые пропсы*/
        onAddPlace={handleAddPlaceClick}/*новые пропсы*/
        onEditAvatar={handleEditAvatarClick}
        onCardClick={setSelectedCard}
        onClose={closeAllPopups} /*закрытие попапов*/
      >
      </Main>
      <Footer />
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
        setIsOpen={setSelectedCard}
      >
      </ImagePopup>
      <PopupWithForm
        name={"edit-form"}
        title={"Редактировать профиль"}
        onEditProfile={handleEditProfileClick}
        setIsOpen={setIsEditProfilePopupOpen}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
        <div className={"popup__inputs"}>
          <input required id={"name-input"} name={"userName"} type={"text"} className={"popup__input"}
            placeholder={"Жак-Ив Кусто"} autoComplete={"on"} defaultValue={""} minLength={"2"} maxLength={"40"} />
          <p className={"popup__error popup__error_visible"}></p>
          <input required id={"proffession-input"} name={"aboutUser"} type={"text"} className={"popup__input"}
            placeholder={"Исследователь океана"} autoComplete={"on"} defaultValue={""} minLength={"2"} maxLength={"200"} />
          <p className={"popup__error popup__error_visible"}></p>
        </div>
      </PopupWithForm>

      <PopupWithForm
        name={"add-place-form"}
        onAddPlace={handleAddPlaceClick}
        setIsOpen={setIsAddPlacePopupOpen}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        title={"Новое место"}>
        <div className={"popup__inputs"}>
          <input required id={"place-input"} type={"text"} name={"cardName"} className={"popup__input popup__input_card_name"}
            placeholder={"Название"} defaultValue={""} autoComplete={"on"} minLength={"2"} maxLength={"30"} />
          <p className={"popup__error popup__error_visible"}></p>
          <input required id={"link-input"} type={"url"} name={"link"} className={"popup__input popup__input_card_link"}
            placeholder={"Ссылка на картинку"} defaultValue={""} autoComplete={"on"}
            pattern={"[Hh][Tt][Tt][Pp][Ss]?:\/\/(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?"} />
          <p className={"popup__error popup__error_visible"}></p>
        </div>
      </PopupWithForm>

      <PopupWithForm
        name={"avatar-form"}
        setIsOpen={setIsEditAvatarPopupOpen}
        onEditAvatar={handleEditAvatarClick}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        title={"Обновить аватар"}>
        <div className={"popup__inputs"}>
          <input required id={"link-avatar"} type={"url"} name={"avatar"}
            className={"popup__input popup__input_avatar_link"}
            placeholder={"Ссылка на фотографию"} defaultValue={""} autoComplete={"on"}
            pattern={"[Hh][Tt][Tt][Pp][Ss]?:\/\/(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?"}
          />
          <p className={"popup__error popup__error_visible"}></p>
        </div>
      </PopupWithForm>
      <PopupWithForm
        name={"delete-card-form"}
        title={"Вы уверены?"}
        buttonText={"Да"}>
      </PopupWithForm>
      <Card></Card>
    </div>
  );
}

export default App;
