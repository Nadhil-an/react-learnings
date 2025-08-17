import React from 'react'

function CardDish({items}) {
  function showPopupHandler(){
    alert("show popup now")
  }
  return (
    <li>
      <a href="javaScript:;" onClick={showPopupHandler}>
        <img src={items.strMealThumb}  />
        <h2>{items. strMeal}</h2>

      </a>
         
    </li>
  )
}

export default CardDish
