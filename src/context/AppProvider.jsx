import { useReducer,useContext, createContext } from "react"

const DispatchContext = createContext()
const StateContext    =  createContext()

const AppProvider = () =>{

    const initialState = {
        cartItems : []
    }

    

    const reducer = (state,action) =>{

    }

    const [state,dispatch] = useReducer(reducer,initialState)


    return(

    )
}

export {AppProvider}