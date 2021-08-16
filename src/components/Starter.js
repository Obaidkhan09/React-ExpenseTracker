import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


//STYLING IMPORTS
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from 'react-bootstrap'
import '../App.css'

function Starter() {

    let transactions = useContext(GlobalContext);

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
                        <li>
                            <span>{transObj.description}</span>
                            <span>{transObj.amount}</span>
                        </li>
                    )
                })}
            </ul>


            <div id = 'transaction'>
            <h3>Add New Transaction</h3>
            <form>
                <div className = 'form-control padding-left'>
                    <label htmlFor = 'description'>
                        Description
                        <input type = 'text'
                                id= 'description'
                                placeholder = 'Add Details'
                                required='true'
                        />
                    </label>
                </div>
                <div className = 'form-control padding-left'>
                    <label htmlFor = 'addAmount'>
                        Add Amount
                        <input  type = 'number'
                                id= 'addAmount'
                                placeholder = 'Add Amount'
                                required='true'
                        />
                    </label>
                </div>

                <Button className = 'btn'>
                    Add Transacrion
                </Button>

            </form>
        </div>

            
        </div>
    )
}

export default Starter;