import React, { createContext, useReducer } from 'react'

//import Reducer
import AppReducer from './AppReducer';

const initialState = {
    transactions : [
        {id : 1, description : 'Income 1', addAmount : 1000},
        {id : 2, description : 'Expennse 1', addAmount : -200},
        {id : 3, description : 'Income 2', addAmount : 500},
        {id : 4, description : 'Expense 2', addAmount : -700},
    ]
}

//Create the Global Context
export const globalContext = createContext(initialState);

//Create context provider
export const GlobalPovider = ({ children }) => {
    //useReducer 
    const [state, dispatch] = useReducer (AppReducer, initialState)


    return(
        <globalContext.Provider value = {
            {
                transaction: state.transactions
            }
        }>
            {children}
        </globalContext.Provider>
    )
}