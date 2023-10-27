import { useState } from 'react'
import Message from './Message'

const Alphabet = ({ onClick, wrong, reset, word }) => {
	const [alphabet, setAlphabet] = useState([
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z',
	])

	return (
		<>
			{wrong < 6 ? (
				<div className="alphabet">
					{alphabet.map((letter) => (
						<button
							key={letter}
							onClick={onClick}
							data-letter={letter}
						>
							{letter}
						</button>
					))}
				</div>
			) : (
				<>
					<p style={{ textAlign: 'center', fontSize: '1.5rem', margin: 0 }}>
						The word was <span style={{ color: 'crimson', fontWeight: 700 }}>{word}</span>
					</p>
					<Message
						message="lose"
						reset={reset}
					/>
				</>
			)}
		</>
	)
}

export default Alphabet
