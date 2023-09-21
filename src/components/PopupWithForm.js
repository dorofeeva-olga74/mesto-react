import '../blocks/popup/_opened/popup_opened.css';
import React from 'react';
function PopupWithForm(props) {
    const { children, name, title, isOpen, setIsOpen,
        onClose, buttonText = "Сохранить", type, } = props;
    //закрытие по оверлею 
    const handleOverlayClick = (e) => {
        if (e.target?.className?.includes(name)) {
            setIsOpen(false);
        }
    };
    return (
        <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}
            onClick={handleOverlayClick}>
            <div className="popup__container">
                <form action="#" name={`${name}`} className={`popup__form popup__${name}`}
                    noValidate onClick={e => e.stopPropagation()}>{/*чтобы не закрывалось при клике на саму форму*/}
                    <h2 className="popup__title">{title}</h2>
                    {children}
                    <button id={"save-add-place"} type={type} className={"popup__button popup__button_save-card"}
                        disabled>{buttonText}</button>
                </form>
                <button id={"close-popup-button-add-card"} type={"button"} aria-label={"Закрыть"}
                    onClick={onClose} className={"popup__close-button popup__close-button_add-card"}></button>
            </div>
        </div>
    )
}
export default PopupWithForm