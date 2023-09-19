//import logo from '../images/Logo.svg';
import React from 'react';
function ImagePopup() {
    //     handleEditAvatarClick(квелиселектор){
    // // добвляю класс стилей попап опен
    //     }
    return (
        // {/* <!-- Popup просмотра картинки--> */ }
        < section id = "picturePopup" className = "popup popup_img_open" >
            <div className="popup__container popup__container_img">
                <img className="popup__image" src="#" alt="Место" />
                <h2 className="popup__name-img"></h2>
                <button id="close-popup-img" type="button" aria-label="Закрыть"
                    className="popup__close-button popup__close-button_clipart"></button>
            </div>
       </section >
    )
}

export default ImagePopup