import '../blocks/popup/_opened/popup_opened.css';
import React from 'react';
import Main from './Main';
function PopupWithForm(props) { 
    const {        
        children,
        name,
        setStatePopupAvatar,
        onEditAvatar,
        isOpen, 
        setIsOpen      
     } = props; 
     const handleOverlayClick = (e) => {
        if (e.target?.className?.includes(props.name)) {
            setIsOpen(false);
        }
     };
     console.log(props);    
    return (    //className={`popup popup_type_${props.name}`} 
    <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}
    onClick={handleOverlayClick}>
    {/* // <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`} onClick={() => setIsOpen(false)}> */}
        <div className="popup__container">
            {/* <form action="#" name="add-place-form" id="add-place-form" className="popup__form popup__add-place" noValidate> */}
            <form action="#" name={`${props.name}`} className={`popup__form popup__${props.name}`} 
            noValidate onClick={e =>e.stopPropagation()}>  {/*чтобы не закрывалось при клике на саму форму*/}             
            {/* <form action="#" name="add-place-form" id="add-place-form" className="popup__form" noValidate> */}
                <h2 className="popup__title">{props.title}</h2>
                {/* <h2 className={`popup popup_type_${props.name}`}>{props.title}</h2> */}
                {props.children}                
                <button id="save-add-place" type="submit" className="popup__button popup__button_save-card"
                    disabled>{props.name}/*Сохранить*/</button>
            </form>
            <button id="close-popup-button-add-card" type="button" aria-label="Закрыть"
                className="popup__close-button popup__close-button_add-card"></button>
        </div>
    </div>
    )
}
export default PopupWithForm