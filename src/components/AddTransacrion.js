import React, { useState } from 'react'

export const AddTransaction = () => {
    
    const [description, setDescription] = useState ();
    const [addAmount, setAddAmount] = useState();
    
    return(
        <div >
            <h3>Add New Transaction</h3>
            <form>
                <div className = 'padding-left'>
                    <label htmlFor = 'description'>
                        Description
                        <input type = 'text'
                                id= 'description'
                                placeholder = 'Add Details'
                                value = {description}
                                onChange = {(e) => setDescription (e.target.value)}
                        />
                    </label>
                </div>
                <div className = 'padding-left'>
                    <label htmlFor = 'addAmount'>
                        Add Amount
                        <input  type = 'number'
                                id= 'addAmount'  placeholder = 'Add Amount' 
                                value = {addAmount}
                                onChange = {(e) => setAddAmount(e.target.value)}
                        />
                    </label>
                </div>

                <button className = 'btn'>
                    Add Transacrion
                </button>

            </form>
        </div>
    )
}