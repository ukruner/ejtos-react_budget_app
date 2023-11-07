import React, {useContext, useEffect, useState} from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {

    const { expenses, dispatch, currency} = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
   
        return (total += item.cost);
    }, 0);

    const [editableContent, setEditableContent] = useState(totalExpenses);

    useEffect(() => {
        if (totalExpenses !== editableContent) {
            console.log(totalExpenses);
          // Dispatch an action to update the store if the content has changed
          dispatch({
            type: 'ADD_DATA',
            payload: totalExpenses
            });
        }
      }, [editableContent, totalExpenses, dispatch]);
    
        const handleSpanChange = (event) => {
            const newContent = event.target.textContent;
            setEditableContent(newContent);
          };

    return (
        <div className='alert alert-primary'>
                <span contentEditable='true' onInput={handleSpanChange}>Spent so far: {currency}{totalExpenses}</span>
        </div>
    );
    
};
export default ExpenseTotal;
