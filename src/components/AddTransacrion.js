import React from 'react'

export const AddTransaction = () => {
    return(
        <div id = 'transaction'>
            <h3>Add New Transaction</h3>
            <form>
                <div className = 'form-control padding-left'>
                    <label htmlFor = 'description'>
                        Description
                        <input type = 'text' id= 'description'  placeholder = 'Add Details'  />
                    </label>
                </div>
                <div className = 'form-control padding-left'>
                    <label htmlFor = 'addAmount'>
                        Add Amount
                        <input type = 'number' id= 'addAmount'  placeholder = 'Add Amount'  />
                    </label>
                </div>

                <button className = 'btn'>
                    Add Transacrion
                </button>

            </form>
        </div>
    )
}