import React from 'react'

const Word = ({ word, correct }) => {
	return (
		<div className="word">
			{word.map((el, index) => (
				<span
					key={index}
					className="letter"
				>
					{correct.includes(index) && el}
				</span>
			))}
		</div>
	)
}

export default Word
