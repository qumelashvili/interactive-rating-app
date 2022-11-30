import React, {useState, useEffect} from 'react';
import './App.css';
import RatingComponent from './components/RatingComponent';
import ThanksComponent from './components/ThanksComponent/ThanksComponent';

function App() {

  const [score, setScore] = useState(0);
  const [isClicked, setIsClicked] = useState(false);


  function scoreValue(data){
    setScore(data);
  }
  function clicked(){
    setIsClicked(!isClicked);
  }

  return (
    <div>
      {(isClicked && score!== 0)  ? <ThanksComponent score={score} /> : <RatingComponent score={scoreValue} handleClick={clicked} />}
    </div>
  );
}

export default App;
