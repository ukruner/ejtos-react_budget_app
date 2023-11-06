import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import "./currency.css";

const Currency = () => {
  const {dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    

  return (
        <div className="alert" style={{backgroundColor:"limegreen"}} > {
      <select name="currency" id="currency" onChange={event=>changeCurrency(event.target.value)}>
        <option value="$">($)Dollar</option>
        <option value="£" selected>(£)Pound</option>
        <option value="€">(€)Euro</option>
        <option value="₹">(₹)Ruppee</option>
        
      </select>	
      }	
    </div>
    );
};

export default Currency;