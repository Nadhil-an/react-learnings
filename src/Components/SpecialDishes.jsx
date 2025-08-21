import {useContext, useState} from "react";
import CardDish from "./CardDish";
import Popup from './Popup';
import {AllMenuContext} from './Menu'

function SpecialDishes({specialDishes}){

    const allMenu = useContext(AllMenuContext)



    //making false popup function
    let [showPopup,setShowPop] = useState(false)
    let [popDishes,setpopDishes] = useState('')
    
    //passing functions to component
    function showPopupHandler(dishName){
        setpopDishes(dishName)
        setShowPop(true)
    }

   
   
    let maxDishes = 8;
    let specialMenu = allMenu.map((items,index)=>{
        if(index < maxDishes){
            return(                      //function was passed to component
                <CardDish items={items} showPopupHandler={showPopupHandler}/>
        )
        } 
    })

     






    return(
        <section className="special-dishes">
            {showPopup && 
            //popup Component
            <Popup 
            setShowPop={setShowPop}
            allDishes = {allMenu}
            popDishes={popDishes}
            
            />
            
            
            
            }

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