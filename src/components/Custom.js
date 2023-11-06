import React from 'react';
import Select from 'react-select';

const customStyle = {
  option: (base) => ({
    ...base,
    background: 'blue', // Change to your desired background color
    color: '#ffffff', // Change to your desired text color
  }),
};

const CustomDropdown = () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  return (
    <Select
      options={options}
      styles={customStyle}
    />
  );
};

export default CustomDropdown;
