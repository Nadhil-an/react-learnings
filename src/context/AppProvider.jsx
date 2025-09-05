import { useReducer,useContext, createContext } from "react"

const DispatchContext = createContext()
const StateContext    =  createContext()

const AppProvider = () =>{

    const initialState = {
        cartItems : []
    }

    

    const reducer = (state,action) =>{

    }

    let [state,dispatch] = useReducer(reducer,initialState)


    return(
        <DispatchContext.Providerrovider value={dispatch}>
            <StateContext.Provider value={state}>

            </StateContext.Provider>
        </DispatchContext.Providerrovider>

    )
}

export {AppProvider,DispatchContext,StateContext}