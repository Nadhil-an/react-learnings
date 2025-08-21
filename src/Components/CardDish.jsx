import React from 'react'

function CardDish({items,showPopupHandler}) {

  //show pop handler function
   
 







  return (

  

    <li>
      <a onClick={()=>showPopupHandler(items.strMeal)}>
        <img src={items.strMealThumb}  />
        <h2>{items. strMeal}</h2>

      </a>
    </li>
  )
}

export default CardDish
