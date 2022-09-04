import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import Question from './components/Question';
import { useState, useEffect } from 'react';
import Data from './data/data.json';


function App() {
  let randomArray = [];
  let finalArray = [];

  const randomizeButtonAnswer = () => {
    let previousArray = randomArray;
    randomArray = [];
      for (let i=0; i < 5; i++){
        let randomNumber = Math.floor(Math.random() * Data.length); 
          if (!randomArray.includes(randomNumber) && !previousArray.includes(randomNumber)) {
            randomArray.push(randomNumber); 
          } else {
            i--;
          }
        }
    finalArray = randomArray.sort(() => Math.random() - 0.5);
}

  if (typeof window !== 'undefined') {
    randomizeButtonAnswer();
  }
  
  const [index, setIndex] = useState(Math.floor(Math.random() * 5)); // index da questão certa
  const [question, setQuestion] = useState(finalArray[index]); // questão pega um item do array aleatório que vai pra <Question/>
  const [randomOptions, setRandomOptions] = useState([]); // array aleatório com itens de data.json que vai pros botões

  const checkAnswer = (value) => {
    if ( value === index) {
      console.log('certo');
      setIndex(Math.floor(Math.random() * 5));
    } else { 
      console.log('wrong');
    }
  }
  
  useEffect(() => {
    console.log('render'); // chamar a funcao que randomiza aqui!!!
    }, [index])
  
  return (
    <div className="App">
        <Header />
        <Question answer={question}/>
        <Button randomOptions={finalArray} rightIndex={index} checkAnswer={checkAnswer}/>
    </div>
  );
}

export default App;
