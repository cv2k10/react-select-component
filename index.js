import React, { useState } from 'react';
import { render } from 'react-dom';
import FruitSelect from './FruitSelect';
import './style.css';

import Select from 'react-select';

const App = () => {
  const [name, setName] = useState('Calvin');
    return (
      <div>
        <FruitSelect />
      </div>
    );
}

render(<App />, document.getElementById('root'));
