
import { useReducer } from "react"

let initialvalue = {
    cart:0
}
//state = prev action =>current value
const reducer = (state,action) =>{
    console.log(action)
    switch(action.type){
        case 'add_to_cart':
            return { cart : state.cart + action.payload }
        case 'remove_from_cart':
            return {cart : state.cart - action.payload }
        case 'refresh':
            return{cart:state=0}
        default:
            return initialvalue
    }
    
    

}

const UseRed= () =>{

    let [value,dispatch] = useReducer(reducer,initialvalue)



    return(
        <div className="Container">
            <h3>{value.cart}</h3>
        <button onClick={()=>{
            dispatch({type:'add_to_cart',payload:4})
        }}>addto cart</button>

        <button onClick={()=>{
            dispatch({type:'remove_from_cart',payload :2})
        }}>remove from cart</button>

        <button onClick={()=>{
            dispatch('refresh')
        }}>Reset</button>
        

        </div>

        
        


    )
}

export default UseRed