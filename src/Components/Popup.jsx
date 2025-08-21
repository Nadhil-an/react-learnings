import React from 'react'

function Popup({setShowPop,allDishes,popDishes}) {
  console.log("all dishes are:",allDishes)

   function closePopupHandler(){
        setShowPop(false)
    }
  return (
    <div className='popup'>
        <div className="popup-content">
            <h2>{popDishes}</h2>
            <button>Order Now</button>
            <h5 className='popup-close' onClick={closePopupHandler}>Close</h5>
        </div>

    </div>
  )
}

export default Popup
