import React, {useContext, useState} from "react";
import {AppContext} from '../context/AppContext';


const Budget = () => { 
    const {budget, totalExpenses} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    };
    return (
        <div className = 'alert alert-secondary'>
        <span>Budget: £{budget} </span>
        <input type = "number" step = "10" min = {totalExpenses} max = "20000" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;


