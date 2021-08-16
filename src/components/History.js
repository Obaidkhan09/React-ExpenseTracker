import React, {useContext} from 'react';

//import Global Context
import {GlobalContext} from '../context/GlobalState'
//import Transaction
import { Transaction } from './Transaction';

export const History = () => {

    const { transactions } = useContext(GlobalContext);

    return(
        <div>
            <h3>Transaction History</h3>
            <ul className = 'list'>
                {transactions.map( transObj => (
                    <li className='plus'>
                        <span>{transObj.description}</span>
                        <span>{transObj.addAmount}</span>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}