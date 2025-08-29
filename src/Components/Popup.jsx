import React, { useContext } from 'react'
import { AllMenuContext } from './AllMenuContext'

function Popup({ setShowPop, popDishes,orderNowHanlder }) {
  
  const { menu } = useContext(AllMenuContext)

  
  let popDish = (menu || [])
    .filter((dish) => dish.strMeal === popDishes)
    .map((item) => {
      return (
        <div key={item.idMeal} className="popup-content-data">
          <div className="popup-header">
            <img src={item.strMealThumb} alt={item.strMeal} />
            <h5 className="popup-header-category">{item.strCategory}</h5>
          </div>
          <h2>{item.strMeal}</h2>
          <p>{item.strInstructions}</p>
          <ul className="dish-ingredients flex">
            {Array.from({ length: 20 }, (_, i) => item[`strIngredient${i + 1}`])
              .filter(Boolean)
              .map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
          </ul>


          
          <button onClick={()=>{orderNowHanlder(item.strMealThumb,item.strMeal)}}>Order Now</button>
        <h5 className="popup-close" onClick={closePopupHandler}>Close</h5>
        </div>
      )
    })

  function closePopupHandler() {
    setShowPop(false)
  }

  return (
    <div className="popup">
      <div className="popup-content">
        {popDish}

      </div>
    </div>
  )
}

export default Popup
