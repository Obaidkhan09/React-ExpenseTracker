import React from 'react'

export const History = () => {
    return(
        <div>
            <h3>Transaction History</h3>
            <ul className = 'list'>
                <li className = 'plus'>
                    Project 1
                    <span color = 'rgba(0, 64, 255, 0.918)'> $ 1000</span>
                    <button className = 'delete-btn'> x </button>
                </li>
                <li className = 'minus'>
                    Project 2
                    <span color = 'rgba(255, 0, 0, 0.808'> $ 500</span>
                    <button className = 'delete-btn'> x </button>
                </li>

            </ul>
        </div>
    )
}