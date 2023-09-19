import React from 'react';
import logo from '../images/Logo.svg';
function Header() {
//     handleEditAvatarClick(квелиселектор){
// // добвляю класс стилей попап опен
//     }
    return (
    <header className="header">
       <img className="header__logo" src={logo} alt="Логотип сайта"/>
       {/* <img onClick={handleEditAvatarClick} className="header__logo" src={logo} alt="Логотип сайта"/> */}
    </header>
  )
}
export default Header