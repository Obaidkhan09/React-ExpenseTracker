import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';


//STYLING IMPORTS
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'

function Starter() {

    let {transactions, addTransaction} = useContext(GlobalContext);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);

    //handleAddition Function using in Form
    const handleAddition=(event)=>{
        event.preventDefault();
        console.log(newDesc, newAmount);
        addTransaction({
            amount: newAmount,
            desc: newDesc
        })
    }
    return (
        <div className='container'>
            <h2 className='pt-3'> Expense Tracker App </h2>


            <h3>Current Balance</h3>
            <h2>0.00</h2>

            <div className="inc-exp-container shadow p-3 mb-5 bg-white rounded">
                <div>
                    <h4>Income</h4>
                    <p className='money plus' >
                        $0.00
                    </p>
                </div>
                <div>
                    <h4>Expense</h4>
                    <p className='money minus'>
                        $0.00
                    </p>
                </div>
            </div>

            
            <h3>Transaction History</h3>
            <ul  className = 'list'>
                {transactions.map((transObj, ind)=>{
                    return(
                        <li key = {ind}>
                            <span>{transObj.description}</span>
                            <span>{transObj.amount}</span>
                        </li>
                    )
                })}
            </ul>


            <div id = 'transaction'>
            <h3>Add New Transaction</h3>
            <form onSubmit={handleAddition}>
                <div className = 'form-control padding-left'>
                    <label htmlFor = 'description'>
                        Description
                        <input type = 'text'
                                id= 'description'
                                placeholder = 'Add Details'
                                required
                                onChange={(ev)=>setDesc(ev.target.value)}
                        />
                    </label>
                </div>
                <div className = 'form-control padding-left'>
                    <label htmlFor = 'addAmount'>
                        Add Amount
                        <input  type = 'number'
                                id= 'addAmount'
                                placeholder = 'Add Amount'
                                required
                                onChange={(ev)=>setAmount(ev.target.value)}
                        />
                    </label>

                    <input type="submit" 
                            value= "Add Transaction"
                            className="btn btn-primary"></input>
                </div>

            </form>
        </div>

            
        </div>
    )
}

export default Starter;