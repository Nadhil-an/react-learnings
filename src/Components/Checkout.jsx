import UseRed from "./UseRed"
import { StateContext } from "../context/AppProvider"
import { useContext } from "react"

const Checkout = () =>{

    const checkoutItems = useContext(StateContext)
    console.log("this is checkout page:",checkoutItems)
    return(
        <div>

            <img src={checkoutItems.cartItems[1]} alt=""  />
            <h2>{checkoutItems.cartItems[0]}</h2>
        <h2>This is checkout page</h2>
        <UseRed />
        </div>



    ) 
 }

 export default Checkout