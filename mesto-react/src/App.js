import React, { useState } from 'react';
// import avatar from './images/avatar.png';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import PopupWithForm from './components/PopupWithForm.js';
import ImagePopup from './components/ImagePopup.js';
//import '../blocks/popup/_opened/popup_opened.css';

function App() {
const [isOpen, setIsOpen] = useState(false);
const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  
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
  return (
    // <div className="page"> это бывший App!!!
    <div className="app">
      <Header />
      <Main
       onEditProfile={handleEditProfileClick}/*новые пропсы*/
       onAddPlace={handleAddPlaceClick}/*новые пропсы*/
       onEditAvatar={handleEditAvatarClick}
       >
       {/* onEditProfile={setisEditProfilePopupOpen}
       onAddPlace={setisAddPlacePopupOpen}
       onEditAvatar={setisOpenEditAvatarPopup}> */}
      
      </Main>       
      <Footer />
      <ImagePopup /> 
      <PopupWithForm  onEditProfile={handleEditProfileClick} 
                      setIsOpen={setIsEditProfilePopupOpen}
                      isOpen={isEditProfilePopupOpen} 
                      ></PopupWithForm> 
      <PopupWithForm onAddPlace={handleAddPlaceClick} 
                     setIsOpen={setIsAddPlacePopupOpen}                     
                     isOpen={isAddPlacePopupOpen}              
                     ></PopupWithForm>  
      <PopupWithForm setIsOpen={setIsEditAvatarPopupOpen}
                     onEditAvatar={handleEditAvatarClick}
                     isOpen={isEditAvatarPopupOpen}                  
                     ></PopupWithForm>
      
      {/* <PopupWithForm isOpen={isOpen} setIsOpen={setIsOpen}></PopupWithForm>  */}
      {/* <!--Форма карточки--> */}
      <template id="template" className="template">
        <article className="element">
          <button hidden id="delete-button" className="element__delete" type="reset"></button>
          <button id="show-image" className="element__show-img" type="button">
            <img className="element__img" src=" " alt=" " />
          </button>
          <div className="element__card">
            <h2 className="element__title"></h2>
            <div className="element__like-section">
              <button id="like-button" type="button" className="element__like"></button>
              <p className="element__like-counter">0</p>
            </div>
          </div>
        </article>
      </template>
    </div>
  );
}

export default App;
