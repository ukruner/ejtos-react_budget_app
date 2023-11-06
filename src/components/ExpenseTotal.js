import React, {useContext, useSelector, useEffect, useState} from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
    
    // const [totalExpenses, setTotalExpenses] = useState(0);

    const { expenses, dispatch} = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
   
        return (total += item.cost);
    }, 0);

    // const editableContent = totalExpenses;
    const [editableContent, setEditableContent] = useState(totalExpenses);
    // useEffect(() => {
    //         sending_data();
    //   }, [sending_data, totalExpenses]);

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
                <span contentEditable='true' onInput={handleSpanChange}>Spent so far: £{totalExpenses}</span>
        </div>
    );
    
};
export default ExpenseTotal;
