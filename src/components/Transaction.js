import React from 'react';

export const Transaction = ({ transaction }) => {

    //Using a ternary operator determine if the transaction amount is positive or negative
    const sign = transaction.addAmount > 0 ? '+' : '-';
    const transactionType = transaction.addAmount > 0 ? 'plus' : 'minus';

    return (

        <li className='plus'>
            {transaction.description}
            <span color='rgba(0, 64, 255, 0.918)'>{sign}${Math.abs(transaction.addAmount)}</span>
            <button className='delete-btn'> x </button>
        </li>

    )

}