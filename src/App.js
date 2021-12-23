import { useState } from 'react';
import './App.css';
import MultipleValuesInput from './MultipleValuesInput';

function App() {
  const [values, setValues] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        <div style={{background: "white", width: 300}}>
          <MultipleValuesInput values={values} setValues={setValues} />
        </div>
        <ul>
          {values.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
