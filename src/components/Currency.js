import React, { useContext, useState} from 'react';
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
        background: 'forestgreen', // Change to your desired background color
        color: '#ffffff', // Change to your desired text color
        border: '1px solid #2980b9', // Change to your desired border color
        padding: '5px',
      }),
      option: (base, state) => ({
        ...base,
        backgroundColor: state.isFocused ? 'white' : "forestgreen", // Change to your desired background color on hover
        color: state.isFocused ? 'black' : base.color, // Change to your desired text color on hover
  }),
      };

      const options = [
        {value:'$', label:"($)Dollar"},
        {value:'£', label: "(£)Pound"},
        {value:'€', label:"(€)Euro"},
        {value:'₹', label:"(₹)Ruppee"},
      ];
    const defaultOption = options[1]; 
    const [selectedOption, setSelectedOption] = useState(defaultOption);

    const CustomDropdown = () => {
      const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        console.log(selectedOption.label)
          dispatch({
              type: 'CHG_CURRENCY',
              payload: selectedOption.value,
          });
          return(selectedOption); 
      };
      return (
        <Select
        options={options}
        // defaultValue={defaultOption}
        value={selectedOption}
        styles={customStyle}
        onChange={handleChange}/>
      );
    };

  return (
    <CustomDropdown></CustomDropdown>

    );
};

export default Currency;
    //     <div className="alert" style={{backgroundColor:"limegreen"}} > {
    //   <select name="currency" id="currency" onChange={event=>changeCurrency(event.target.value)}>
    //     <option id="currency option" value="$">($)Dollar</option>
    //     <option id="currency option" value="£" selected>(£)Pound</option>
    //     <option id="currency option" value="€">(€)Euro</option>
    //     <option id="currency option" value="₹">(₹)Ruppee</option>
        
    //   </select>	
    //   }	
    // </div>