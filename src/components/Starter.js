import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';


//STYLING IMPORTS
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'

function Starter() {

    let {transactions, addTransaction, deleteTransactions} = useContext(GlobalContext);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState("");
    // let [getIndex, setIndex] = useState("");

    //handleAddition Function using in Form
    const handleAddition=(event)=>{
        event.preventDefault();
        console.log(newDesc, newAmount);

        addTransaction({
            amount: Number(newAmount),
            desc: newDesc
        });

        setDesc("");
        setAmount("");
    }

    const handleDeleteion=(num)=>{
        deleteTransactions(num);

    }

    const getIncome = ()=>{
        let income=0;
        for(var i =0; i< transactions.length; i++){
            if(transactions[i].amount>0)
                income += transactions[i].amount;
        }
        return income;
    }

    const getExpense=()=>{
        let expense=0;
        for (var i=0; i< transactions.length; i++){
            if(transactions[i].amount<0)
                expense += transactions[i].amount;
        }
        return expense;
    }

    return (
        <div className='container'>
            <h2 className='pt-3'> Expense Tracker App </h2>


            <h3>Current Balance</h3>
            <h2>${getIncome() + getExpense()}</h2>

            <div className="inc-exp-container shadow p-3 mb-5 bg-white rounded">
                <div>
                    <h4>Income</h4>
                    <p className='money plus' >
                        ${getIncome()}
                    </p>
                </div>
                <div>
                    <h4>Expense</h4>
                    <p className='money minus'>
                        ${getExpense()}
                    </p>
                </div>
            </div>

            
            <h3>Transaction History</h3>
            <ul  className = 'list money'>
                {transactions.map((transObj, ind)=>{
                    return(
                        <li key = {ind} className={transObj.amount >0?
                            "plus rounded border border-primary" :
                            "minus rounded border border-danger"}>
                            <span>{transObj.desc}</span>
                            <span>${transObj.amount}</span>
                            <button className='delete-btn'
                                    onClick={()=>{handleDeleteion(ind);}}
                                    value={ind}>x</button>
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
                                value={newDesc}
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
                                value={newAmount}
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