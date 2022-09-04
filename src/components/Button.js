import './Button.css';
import Data from '../data/data.json';

const Button = ({ randomOptions, checkAnswer }) => {	
	return (
		<div className="button-wrapper">
			<button onClick={() => checkAnswer(0)}> {Data[randomOptions[0]].char_id} </button>
			<button onClick={() => checkAnswer(1)}> {Data[randomOptions[1]].char_id} </button>
			<button onClick={() => checkAnswer(2)}> {Data[randomOptions[2]].char_id} </button>
			<button onClick={() => checkAnswer(3)}> {Data[randomOptions[3]].char_id} </button>
			<button onClick={() => checkAnswer(4)}> {Data[randomOptions[4]].char_id} </button>
		</div>
	);
}
 
export default Button;