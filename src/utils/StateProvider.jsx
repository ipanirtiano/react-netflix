/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

export const stateContext = createContext()

export const StateProvider = ({children, initialState, reducer}) => {
    return(
        <stateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </stateContext.Provider>
    )
}

export const useStateProvider = () => useContext(stateContext)