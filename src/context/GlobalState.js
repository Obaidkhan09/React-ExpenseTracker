import React, { createContext, useReducer } from 'react'; 

//import Reducer
import TransactionReducer from '../context/AppReducer';

let initialTransactions = [
        {amount: 500, description: "Cash"},
        {amount: 100, description: "Camera"},
        {amount: 150, description: "Bag"}
    ]


//Create the Global Context to EXPORT
export const GlobalContext = createContext(initialTransactions);
//EXPORTING creteContext
