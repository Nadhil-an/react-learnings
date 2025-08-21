import React from 'react'

function Popup({setShowPop,allDishes,popDishes}) {
  let popDish = allDishes.filter((dish)=>{
    return dish.strMeal === popDishes
  }).map((item)=>{
    return (
      <div className="popup-content-data">
        <div className="popup-header">
          <img src={item.strMealThumb} />
          <h5 className='popup-header-category'>{item.strCategory}</h5>
        </div>
        <h2>{item.strMeal}</h2>
        <p>{item.strInstructions}</p>
        <ul className="dish-ingredients flex">
          <li>{item.strIngredient1}</li>
          <li>{item.strIngredient2}</li>
          <li>{item.strIngredient3}</li>
          <li>{item.strIngredient4}</li>

        </ul>
        
      </div>
    )
  })

   function closePopupHandler(){
        setShowPop(false)
    }
  return (
    <div className='popup'>
        <div className="popup-content">
            {popDish}
            <button>Order Now</button>
            <h5 className='popup-close' onClick={closePopupHandler}>Close</h5>
        </div>

    </div>
  )
}

export default Popup
