import { useState } from 'react';
import './App.css';
import { Text } from './Text'; 

function App() {
  
  const[showText, setshowText] = useState(false);
  
  return (
    <div className='App'>
          <button onClick={() => {
            setshowText(!showText);
          }}
          >
            Show Text

          </button>
          {showText && <Text/>}
    </div>
  )

}

export default App;
