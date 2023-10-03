import React, { useEffect, useState } from 'react';
import api from "../utils/Api/Api.js";
import CurrentUserContext from '../contexts/CurrentUserContext';
import CardsContext from '../contexts/CardsContext';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup from "./AddPlacePopup.js";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});//для всплывающей картинки
  const [currentUser, setCurrentUser] = useState({});
  const [apiCardsState, setApiCardsState] = useState([]);
  //const cards = React.useContext(CardsContext);

  useEffect(() => {
    Promise.all([api.getUserCardsData(), api.getInitialCards()])
      .then(([userInfoAnswer, cardsAnswer]) => {
        // console.log(cardsAnswer)
        setCurrentUser({ ...userInfoAnswer });
        setApiCardsState([...cardsAnswer]);
      })
      .catch((e) => console.error(e?.reason || e?.message));
  }, []);

  // добавляю обработчики  
  const handleEditAvatarClick = (e) => {
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
  //закрытие по оверлею
  const handleOverlayClick = (e) => {
    if (e.target?.className?.includes('popup')) {
      closeAllPopups();
    }
  };
  //закрытие по ESC
  useEffect(() => {
    const handleEscBtn = (e) => {
      if (e.keyCode === 27)
        closeAllPopups();
    }
    document.addEventListener('keydown', handleEscBtn)
    return () => document.removeEventListener('keydown', handleEscBtn)
  }, [])
  // Закрытие попапов
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({})
  }

  function handleUpdateAvatar(data) {
    api.changeAvatarUrl({
      avatar: data.avatar,
    })
      .then(() => {
        setCurrentUser((userInfoAnswer) => ({
          ...userInfoAnswer,
          avatar: data.avatar,
        }));
        closeAllPopups();
      })
      .catch((e) => console.error(e?.reason || e?.message));
  }

  function handleUpdateUser(name, about) {
    api.changeUserData({
      name: name,
      about: about,
    })
      .then(() => {
        setCurrentUser((userInfoAnswer) => ({
          ...userInfoAnswer,
          name: name,
          about: about,
        }));
        closeAllPopups();
      })
      .catch((e) => console.error(e?.reason || e?.message));
  }

  function handleAddPlaceSubmit(data) {
    api.creatCardApi({
      name: data.name,
      link: data.link,
    })
      .then((newCard) => {
        setApiCardsState([newCard, ...apiCardsState]);
        closeAllPopups();
      })
      .catch((e) => console.error(e?.reason || e?.message));
  }
  // удаление
  function handleCardDelete(card) {
    api.deleteCardApi(card.cardData._id)
      .then(() => {
        setApiCardsState((state) => state.filter((cardDelete) => card.cardData._id !== cardDelete._id));
      })
      .catch((e) => console.error(e?.reason || e?.message));
  }

  function handleCardLike(card) {
    const isLiked = card.cardData.likes.some((i) => i._id === currentUser._id);
    if (isLiked) {
      api.deleteLikeCardData(card.cardData._id)
        .then((newCard) => {
          setApiCardsState((state) => state.map((c) => c._id === card.cardData._id ? newCard : c));
        })
        .catch((e) => console.error(e?.reason || e?.message));
    } else {
      api.addLikeCardData(card.cardData._id)
        .then((newCard) => {
          setApiCardsState((state) => state.map((c) => (c._id === card.cardData._id ? newCard : c)));
        })
        .catch((e) => console.error(e?.reason || e?.message));
    }
  }
  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <CardsContext.Provider value={apiCardsState}>
          <Main
            onEditProfile={handleEditProfileClick}/*новые пропсы*/
            onAddPlace={handleAddPlaceClick}/*новые пропсы*/
            onEditAvatar={handleEditAvatarClick}
            onCardDelete={handleCardDelete}
            onCardClick={setSelectedCard}
            onCardLike={handleCardLike}
            onClose={closeAllPopups} /*закрытие попапов*/
            onCloseOverlay={handleOverlayClick}
          />
        </CardsContext.Provider>
        <Footer />
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
          setIsOpen={setSelectedCard}
          onCloseOverlay={handleOverlayClick} />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onCloseOverlay={handleOverlayClick}
          onUpdateUser={handleUpdateUser}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onCloseOverlay={handleOverlayClick}
          onAddNewPlace={handleAddPlaceSubmit}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onCloseOverlay={handleOverlayClick}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <PopupWithForm
          onClose={closeAllPopups}
          name={"delete-card-form"}
          title={"Вы уверены?"}
          buttonText={"Да"}
          onCloseOverlay={handleOverlayClick}>
        </PopupWithForm>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
