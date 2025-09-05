import { useReducer, createContext } from "react"

const DispatchContext = createContext()
const StateContext = createContext()

const AppProvider = ({ children }) => {
  const initialState = {
    cartItems: []
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case "orderNowHandler":
        return {
          ...state,
          cartItems: [
            ...state.cartItems, // keep old items
            {
              title: action.payload.title,
              image: action.payload.img
            }
          ]
        }
      default:
        return state
    }
  }

  let [state, dispatch] = useReducer(reducer, initialState)

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  )
}

export { AppProvider, DispatchContext, StateContext }
