import React from "react";

export function Card(card) {
  const { name, link, likes } = card;
  function handleCardClick() {
    card.onCardClick(card)
  }
  return (
    <article className="element">
      <button hidden id={"delete-button"} className={"element__delete"} type={"reset"} />
      <button id={"show-image"} className={"element__show-img"} type={"button"} onClick={handleCardClick}>
        <img className={"element__img"} src={link} alt={name} />
      </button>
      <div className={"element__card"}>
        <h2 className={"element__title"}>{name}</h2>
        <div className={"element__like-section"}>
          <button id={"like-button"} type={"button"} aria-label={"Кнопка лайка"} className={"element__like"} />
          <p className={"element__like-counter"}>{likes}</p>
        </div>
      </div>
    </article>
  )
}
export default Card
