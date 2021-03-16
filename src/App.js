import { useState } from 'react';
import './App.scss';
import Star from './components/star';

const App = () => {
  const [starState, setStarState] = useState([0,0,0,0,0]);

  const selectStarValue = (index) => {
    const restStarVal = [...starState].filter((item, i) => i !== index);
    const precedentStarVal = restStarVal.slice(index).map(item => item = !starState[index]);
    setStarState([...restStarVal.slice(0, index), !starState[index], ...precedentStarVal]);
  }
  return (
    <div className='App'>
      {
        [1,2,3,4,5].map(item=> (
          <Star key={item} selectStarValue={() => selectStarValue(item-1)} starValue={starState[item-1]} />
        ))
      }
    </div>
  );
}

export default App;
