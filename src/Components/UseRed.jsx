
import { useReducer } from "react"

let initialvalue = 0;
//state = prev action =>current value
const reducer = (state,action) =>{
    switch(action){
        case 'add_to_cart':
            return (state = state+1)
        case 'remove_from_cart':
            return(state = state-1)
        case 'refresh':
            return(state=0)
        default:
            return state
    }
    
    

}

const UseRed= () =>{

    let [value,dispatch] = useReducer(reducer,initialvalue)



    return(
        <div className="Container">
            <h3>{value}</h3>
        <button onClick={()=>{
            dispatch('add_to_cart')
        }}>addto cart</button>

        <button onClick={()=>{
            dispatch('remove_from_cart')
        }}>remove from cart</button>

        <button onClick={()=>{
            dispatch('refresh')
        }}>Reset</button>
        

        </div>

        
        


    )
}

export default UseRed