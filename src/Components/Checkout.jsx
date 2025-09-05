import UseRed from "./UseRed"
import { StateContext } from "../context/AppProvider"
import { useContext } from "react"

const Checkout = () =>{

    const { cartItems } = useContext(StateContext)
    
    return(
        <div>

        {cartItems.map((item)=>{
                        return(
                            <div>
                            <img src={item.image} alt="" />
                            <h5>{item.title}</h5>
                            </div>

                        )

                    })}
        <h2>This is checkout page</h2>
        <UseRed />
        </div>



    ) 
 }

 export default Checkout