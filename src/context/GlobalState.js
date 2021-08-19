import React, { createContext, useReducer } from 'react'; 

//import Reducer
import TransactionReducer from '../context/AppReducer';

let initialTransactions = []


//Create the Global Context to EXPORT
export const GlobalContext = createContext(initialTransactions);
//EXPORTING creteContext
export const GlobalProvider = ({children})=> {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);

    function addTransaction(transObj){
        dispatch({
            type: "ADD",
            payload: { 
                amount: transObj.amount, 
                desc: transObj.desc
            }
        })
    }

    return(
        <GlobalContext.Provider value={{
            transactions: state,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}