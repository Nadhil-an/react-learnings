import React, { useContext } from 'react'
import { MenuContext } from './Menu'

function Popup({ setShowPop, popDishes }) {
  // ✅ Destructure menu from context (instead of assigning whole object)
  const { menu } = useContext(MenuContext)

  // ✅ Safe check: ensure menu is always an array
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
            {/* ✅ Render only non-empty ingredients dynamically */}
            {Array.from({ length: 20 }, (_, i) => item[`strIngredient${i + 1}`])
              .filter(Boolean)
              .map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
          </ul>
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
        <button>Order Now</button>
        <h5 className="popup-close" onClick={closePopupHandler}>
          Close
        </h5>
      </div>
    </div>
  )
}

export default Popup
