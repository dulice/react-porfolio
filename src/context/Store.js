import { createContext, useReducer } from "react"

export const Store = createContext();

const initialState = {
    darkMode: true,
    colorMode: '',
}

const Reducer = (state, action) => {
    switch(action.type) {
        case "DARK_MODE":
            return { ...state, darkMode: action.payload}
        case "COLOR_MODE":
            return { ...state, colorMode: action.payload}
        default:
            return state
    }
}

export const StoreProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    const value = {state, dispatch}
    return (
        <Store.Provider value={value}>{children}</Store.Provider>
    )
}