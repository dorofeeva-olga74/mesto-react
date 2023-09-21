import React from 'react';
import { useEffect, useState } from "react";
import api from "./Api/Api.js";
import Card from "./Card";

function Main(props) {
    const { avatar, onEditProfile, onAddPlace, onEditAvatar,
        onCardClick } = props;
    const [userName, setUserName] = useState("")
    const [userDescription, setUserDescription] = useState("")
    const [userAvatar, setUserAvatar] = useState("")
    const [cards, getInitialCards] = useState([])

    useEffect(() => {
        api.getUserCardsData()
            .then((data) => {
                setUserName(data.name)
                setUserDescription(data.about)
                setUserAvatar(data.avatar)
            })
            .catch((e) => console.error(e?.reason || e?.message));
        api.getInitialCards()
            .then((cardsData) => {
                getInitialCards(
                    cardsData.map((data) => ({
                        likes: data.likes,
                        name: data.name,
                        link: data.link,
                        cardId: data._id,
                    }))
                )
            })
            .catch((e) => console.error(e?.reason || e?.message));
    }, [])

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__group">
                    <div className="profile__avatar-set">
                        <img onClick={onEditAvatar} className={"profile__avatar"} style={{ backgroundImage: `url(${userAvatar})`}} />
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__title">{userName}</h1>
                        <button onClick={onEditProfile} id="open-popup-button" type="button" className="profile__button profile__button_add_change">
                        </button>
                        <p className="profile__subtitle">{userDescription}</p>
                    </div>
                </div>
                <button onClick={onAddPlace} id="open-popup-button-add-card" type="button" className="profile__button profile__button_add_card">
                </button>
            </section>
            <section className="elements">
                {cards.map((card) => (
                    <Card
                        key={card.cardId}
                        likes={card.likes.length}
                        name={card.name}
                        link={card.link}
                        onCardClick={onCardClick}>
                    </Card>
                ))}
            </section>
        </main>
    )
}
export default Main