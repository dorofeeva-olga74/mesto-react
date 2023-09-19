import React from 'react';
import avatar from '../images/avatar.png';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import App from '../App.js';
function Main(props) {
    //console.log(props); 
    const { 
        name,       
        onEditProfile,
        onAddPlace,
        onEditAvatar,
        isOpen, 
        setIsOpen,
        children,     
     } = props; 
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__group">
                    <div className="profile__avatar-set">
                        {/* <img className="profile__avatar" src={avatar} alt="Фотография профиля" /> */}
                        <img /*onClick={props.handleEditAvatarClick} */onClick={props.onEditAvatar} className="profile__avatar" src={avatar} alt="Фотография профиля" />
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__title">Жак-Ив Кусто</h1>
                        <button /*onClick={props.handleEditProfileClick}*/onClick={props.onEditProfile} id="open-popup-button" type="button" className="profile__button profile__button_add_change">
                        </button>
                        <p className="profile__subtitle">Исследователь океана</p>
                    </div>
                </div>
                <button /*onClick={props.handleAddPlaceClick}*/onClick={props.onAddPlace} id="open-popup-button-add-card" type="button" className="profile__button profile__button_add_card">
                </button>
            </section>
            <section className="elements">
            </section>
            {/* <!--Popup для добавления формы места--> */}
            <>
              <PopupWithForm name="add-place-form" title="Новое место">
                          <div className="popup__inputs">
                            <input required id="place-input" type="text" name="cardName" className="popup__input popup__input_card_name"
                                placeholder="Название" defaultValue="" autoComplete="on" minLength="2" maxLength="30" />
                            <p className="popup__error popup__error_visible"></p>
                            <input required id="link-input" type="url" name="urlCard" className="popup__input popup__input_card_link"
                                placeholder="Ссылка на картинку" defaultValue="" autoComplete="on"
                                pattern="[Hh][Tt][Tt][Pp][Ss]?:\/\/(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?" />
                            <p className="popup__error popup__error_visible"></p>
                          </div>
              </PopupWithForm>
              {/* <!--Popup для редактирования профиля--> */}
              <PopupWithForm name="edit-form" title="Редактировать профиль">
                        <div className="popup__inputs">
                            <input required id="name-input" name="userName" type="text" className="popup__input" placeholder="Жак-Ив Кусто"
                                autoComplete="on" defaultValue="" minLength="2" maxLength="40" />
                            <p className="popup__error popup__error_visible"></p>
                            <input required id="proffession-input" name="aboutUser" type="text" className="popup__input"
                                placeholder="Исследователь океана" autoComplete="on" defaultValue="" minLength="2" maxLength="200" />
                            <p className="popup__error popup__error_visible"></p>
                        </div>
              </PopupWithForm>
              {/* <!--Popup для удаления карточки--> */}
              <PopupWithForm name="delete-card-form" title="Вы уверены?">                        
              </PopupWithForm>
              {/* <!--Popup для редактирования аватара--> */}
              <PopupWithForm name="avatar-form" title="Обновить аватар">
                        <div className="popup__inputs">
                            <input required id="link-avatar" type="url" name="avatar" className="popup__input popup__input_avatar_link"
                                placeholder="Ссылка на фотографию" defaultValue="" autoComplete="on"
                                pattern="[Hh][Tt][Tt][Pp][Ss]?:\/\/(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?" />
                            <p className="popup__error popup__error_visible"></p>
                        </div>                        
              </PopupWithForm>
              
              <ImagePopup></ImagePopup>
            </> 
            {/* <div className="popup popup_addplace_open" id="addPlacePopup">
                <div className="popup__container">
                    <form action="#" name="add-place-form" id="add-place-form" className="popup__form popup__add-place" noValidate>
                        <h2 className="popup__title popup__title_place">Новое место</h2>
                        <div className="popup__inputs">
                            <input required id="place-input" type="text" name="cardName" className="popup__input popup__input_card_name"
                                placeholder="Название" defaultValue="" autoComplete="on" minLength="2" maxLength="30" />
                            <p className="popup__error popup__error_visible"></p>
                            <input required id="link-input" type="url" name="urlCard" className="popup__input popup__input_card_link"
                                placeholder="Ссылка на картинку" defaultValue="" autoComplete="on"
                                pattern="[Hh][Tt][Tt][Pp][Ss]?:\/\/(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?" />
                            <p className="popup__error popup__error_visible"></p>
                        </div>
                        <button id="save-add-place" type="submit" className="popup__button popup__button_save-card"
                            disabled>Сохранить</button>
                    </form>
                    <button id="close-popup-button-add-card" type="button" aria-label="Закрыть"
                        className="popup__close-button popup__close-button_add-card"></button>
                </div>
            </div> */}
            {/* <!-- Popup просмотра картинки--> */}
            {/* <section id="picturePopup" className="popup popup_img_open">
                <div className="popup__container popup__container_img">
                    <img className="popup__image" src="#" alt="Место" />
                    <h2 className="popup__name-img"></h2>
                    <button id="close-popup-img" type="button" aria-label="Закрыть"
                        className="popup__close-button popup__close-button_clipart"></button>
                </div>
            </section> */}
            {/* <!--Popup для заполнения формы профиля--> */}
            {/* <div id="profilePopup" className="popup popup_profile_open">
                <div className="popup__container">
                    <form action="#" name="edit-form" id="edit-form" className="popup__edit-form popup__form" noValidate>
                        <h2 className="popup__title">Редактировать профиль</h2>
                        <div className="popup__inputs">
                            <input required id="name-input" name="userName" type="text" className="popup__input" placeholder="Жак-Ив Кусто"
                                autoComplete="on" defaultValue="" minLength="2" maxLength="40" />
                            <p className="popup__error popup__error_visible"></p>
                            <input required id="proffession-input" name="aboutUser" type="text" className="popup__input"
                                placeholder="Исследователь океана" autoComplete="on" defaultValue="" minLength="2" maxLength="200" />
                            <p className="popup__error popup__error_visible"></p>
                        </div>
                        <button type="submit" className="popup__button popup__button_save-profile" disabled>Сохранить</button>
                    </form>
                    <button id="close-popup-button" type="button" aria-label="Закрыть"
                        className="popup__close-button popup__close-button_profile"></button>
                </div>
            </div> */}
            {/* <!--Popup удаления карточки--> */}
            {/* <div className="popup popup_addplace_delete" id="deleteAddPlacePopup">
                <div className="popup__container">
                    <form action="#" name="delete-card-form" id="delete-card-form" className="popup__form popup__delete-form" noValidate>
                        <h2 className="popup__title popup__title_place">Вы уверены?</h2>
                        <button id="delete-card-place" type="submit" className="popup__button popup__button_delete-card">Да</button>
                    </form>
                    <button id="close-popup-button-delete-place" type="button" aria-label="Закрыть"
                        className="popup__close-button popup__close-button_delete-card"></button>
                </div>
            </div> */}
            {/* <!--Popup для обновления аватара--> */}
            {/* <div id="newAvatarPopup" className="popup popup_avatar">
                <div className="popup__container">
                    <form action="#" name="avatar-form" id="avatar-form" className="popup__form popup__avatar-form" noValidate>
                        <h2 className="popup__title">Обновить аватар</h2>
                        <div className="popup__inputs">
                            <input required id="link-avatar" type="url" name="avatar" className="popup__input popup__input_avatar_link"
                                placeholder="Ссылка на фотографию" defaultValue="" autoComplete="on"
                                pattern="[Hh][Tt][Tt][Pp][Ss]?:\/\/(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?" />
                            <p className="popup__error popup__error_visible"></p>
                        </div>
                        <button type="submit" className="popup__button popup__button_save-avatar" disabled>Сохранить</button>
                    </form>
                    <button id="close-popup-button-avatar" type="button" aria-label="Закрыть"
                        className="popup__close-button popup__close-button_avatar"></button>
                </div>
            </div> */}
        </main>
    )
}
export default Main