const Message = ({ message, reset }) => {
	return (
		<div className="message">
			<p>You {message}!</p>
			<button onClick={reset}>RESET</button>
		</div>
	)
}

export default Message
