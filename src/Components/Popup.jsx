import React from 'react'

function Popup({setShowPop,allDishes,popDishes}) {
  let popDish = allDishes.filter((dish)=>{
    return dish.strMeal === popDishes
  }).map((item)=>{
    return (
      <div className="popup-content-inner">
        <h3>{item.strMeal}</h3>
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
