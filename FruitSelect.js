import React from 'react';
import Select from 'react-select';

const FruitSelect = () => {
  const options = [
    {value: 'durian', label: 'Durian'},
    {value: 'rambutan', label: 'Rambuton'},
    {value: 'mongo', label: 'Mongo'},
  ]
  return (
    <div>
      <Select options={options} />
    </div>
  )
}

export default FruitSelect;
