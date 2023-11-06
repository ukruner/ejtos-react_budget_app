import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import "./currency.css";
import Select from 'react-select';

const Currency = () => {
  const {dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    const customStyle = {
      control: (base) => ({
        ...base,
        background: 'limegreen', // Change to your desired background color
        color: '#ffffff', // Change to your desired text color
        border: '1px solid #2980b9', // Change to your desired border color
        padding: '5px',
      }),
      option: (base, state) => ({
        ...base,
        backgroundColor: state.isFocused ? 'white' : "limegreen", // Change to your desired background color on hover
        color: state.isFocused ? 'black' : base.color, // Change to your desired text color on hover
  }),
      };
    const defaultOption = options[1];  
    const CustomDropdown = () => {
      const options = [
        {value:'$', label:"($)Dollar"},
        {value:'£', label: "(£)Pound"},
        {value:'€', label:"(€)Euro"},
        {value:'₹', label:"(₹)Ruppee"},
      ];

      
      return (
        <Select
          options={options}
          
          styles={customStyle}/>
      );
    };

  return (
    <CustomDropdown></CustomDropdown>
    //     <div className="alert" style={{backgroundColor:"limegreen"}} > {
    //   <select name="currency" id="currency" style={customStyle} onChange={event=>changeCurrency(event.target.value)}>
    //     <option id="currency option" value="$">($)Dollar</option>
    //     <option id="currency option" value="£" selected>(£)Pound</option>
    //     <option id="currency option" value="€">(€)Euro</option>
    //     <option id="currency option" value="₹">(₹)Ruppee</option>
        
    //   </select>	
    //   }	
    // </div>
    );
};

export default Currency;