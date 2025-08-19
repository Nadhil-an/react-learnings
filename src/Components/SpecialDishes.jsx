import React,{useState} from "react";
import CardDish from "./CardDish";
import Popup from './Popup'

function SpecialDishes({specialDishes}){
    let [showPopup,setShowPop] = useState(false)
    
    let maxDishes = 8;

    function showPopupHandler(){
        setShowPop(true)
    }
    
    let specialMenu = specialDishes.map((items,index)=>{
        if(index < maxDishes){
            return(    
                <CardDish items={items} showPopupHandler={showPopupHandler}/>
        )
        } 
    })

     






    return(
        <section className="special-dishes">
            {showPopup && <Popup />}

            <div className="container">
                <div className="special-dishes-content text-center">
                    <h2>Our Special Dishes</h2>
                </div>

                <div className="special-dishes-list ">
                    <ul className="flex flex-wrap gap-2">
                        {specialMenu}
                    </ul>
                </div>
            </div>
        
        
        
        </section>
    )
}

export default SpecialDishes