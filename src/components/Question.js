import Data from '../data/data.json';
import './Question.css';

const Question = (props) => {
	const answer = props.answer;

	return (
		<div className="question-wrapper">
			<h1 className="question"><span className="highlight">{Data[answer].character}</span></h1>
				<span>{Data[answer].character} = {Data[answer].char_id} </span>
		</div>
	);
}
 
export default Question;