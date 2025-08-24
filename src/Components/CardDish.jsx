import React from "react";

function CardDish({ items, showPopupHandler }) {
  return (
    <li>
      <a onClick={() => showPopupHandler && showPopupHandler(items.strMeal)}>
        <img src={items.strMealThumb} alt={items.strMeal} />
        <h2>{items.strMeal}</h2>
      </a>
    </li>
  );
}

export default CardDish;
