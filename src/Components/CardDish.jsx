import React from 'react'

function CardDish({items}) {
  return (
    <li>
         <img src={items.strMealThumb}  />
        <h2>{items. strMeal}</h2>
    </li>
  )
}

export default CardDish
