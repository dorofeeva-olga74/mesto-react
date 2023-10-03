import React, { useState } from 'react';
import PopupWithForm from "./PopupWithForm";
////import CardsContext from '../contexts/CardsContext';
import CurrentUserContext from '../contexts/CurrentUserContext.js';

export default function CardDeletePopup(props) {
  const { isOpen, onClose, onCloseOverlay, onCardDeleteClick, onCardDeleteConfirm } = props;

  function handleSubmit(e, cardData) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик     
    onCardDeleteConfirm(cardData);
  }

  return (
    <PopupWithForm
      name={"delete-card-form"}
      title={"Вы уверены?"}
      buttonText={"Да"}
      onClose={onClose}
      isOpen={isOpen}
      onCloseOverlay={onCloseOverlay}
      onSubmit={(card) => handleSubmit(card)}
      onCardDeleteClick={onCardDeleteClick}
      onCardDeleteConfirm={onCardDeleteConfirm}
    >
    </PopupWithForm>
  );
}