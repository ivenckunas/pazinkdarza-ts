import {useState} from 'react';
import './quiz.scss';

function Quiz({questionsArr}) {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [answerIndex, setAnswerIndex] = useState(null);
	const [answer, setAnswer] = useState(false);
	const {question, choices, correctAnswer} = questionsArr[currentQuestion];

	const onAnswerClick = (answer, index) => {
		setAnswerIndex(index);
		if (answer === correctAnswer) {
			setAnswer(true);
		} else {
			setAnswer(false);
		}
	};

	return (
		<div className='quiz-container'>
			<>
				<span className='active-question-no'>{currentQuestion + 1}</span>
				<span className='total-questions'>/{questionsArr.length}</span>
				<h2>{question}</h2>

				<ul>
					{choices.map((answer, index) => (
						<li onClick={() => onAnswerClick(answer, index)}>{answer}</li>
					))}
				</ul>
			</>
		</div>
	);
}

export default Quiz;
