import React from 'react';

function ImagePopup({ card, onClose}) {
   //закрытие по оверлею
   const handleOverlayClick = (e) => {
      if (e.target?.className?.includes('popup_img_open')) {
         onClose();
      }
   };
   return (
      <section id="picturePopup" className={`popup popup_img_open ${card.link ? "popup_opened" : ""}`}
         onClick={handleOverlayClick} aria-label="Фото полный размер">
         <div className="popup__container popup__container_img">
            <img className="popup__image" src={card.link} alt={card.name} />
            <h2 className="popup__name-img">{card.name}</h2>
            <button id="close-popup-img" type={"button"} aria-label="Закрыть"
               className="popup__close-button popup__close-button_clipart" onClick={onClose} />
         </div>
      </section >
   )
};
export default ImagePopup