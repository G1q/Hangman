import { useEffect, useState } from 'react'
import Word from './components/Word'
import Human from './components/Human'
import Alphabet from './components/Alphabet'
import { words } from './data/words'
import Message from './components/Message'

function App() {
	const [word, setWord] = useState([])
	const [wrong, setWrong] = useState(0)
	const [correct, setCorrect] = useState([])

	useEffect(() => {
		setWord(words[Math.floor(Math.random() * words.length)].toUpperCase().split(''))
	}, [])

	const findIndexes = (arr, element) => {
		const idxs = []
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === element) idxs.push(i)
		}
		return idxs
	}

	const handleClick = (e) => {
		if (word.includes(e.target.textContent)) {
			e.target.dataset.guess = true
			setCorrect([...correct, ...findIndexes(word, e.target.textContent)])
		} else {
			e.target.dataset.guess = false
			setWrong((prev) => prev + 1)
		}
	}

	const handleReset = () => {
		setWrong(0)
		setCorrect([])
		setWord(words[Math.floor(Math.random() * words.length)].toUpperCase().split(''))
	}

	return (
		<main>
			<section className="game">
				<Word
					word={word}
					correct={correct}
				/>
				<Human wrongs={wrong} />
			</section>
			{word.length !== correct.length ? (
				<Alphabet
					wrong={wrong}
					onClick={handleClick}
					reset={handleReset}
					word={word}
				/>
			) : (
				<Message
					message="WIN"
					reset={handleReset}
				/>
			)}
		</main>
	)
}

export default App
