import {useState} from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState<number | String>(5)

  const changeNumber = () => {
    setNumber("2")
  }

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
