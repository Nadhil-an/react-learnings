import { useContext } from "react"
import { StateContext } from "../context/AppProvider"






const AddToCart = ({AddCart}) =>{
    const {cartItems}= useContext(StateContext)
    console.log("add to cart:",cartItems)
   
    

    return(
        <div className="add-to-cart-wrapper">
        <div className="add-to-cart-item">
            
            {cartItems.map((item)=>{
                return(
                    <div>
                    <img src={item.image} alt="" />
                    <h5>{item.title}</h5>
                    </div>

                )
                
            


            })}
            {/* <img src={cartPackage.cartItems[1]} alt="" />
            <h5>{cartPackage.cartItems[0]}</h5>
             */}
            
        </div>
        </div>
    )
}

export default  AddToCart