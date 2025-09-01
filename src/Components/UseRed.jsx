
import { useReducer } from "react"

let initialvalue = 0;
//state = prev action =>current value
const reducer = (state,action) =>{
    if(action === 'add_to_cart'){
        return(state = state+1)
    }else if(action === 'remove_from_cart'){
        return(state = state-1)
    }else if(action === 'refresh'){
        return(state = 0)
    }else{
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