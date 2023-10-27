const Human = ({ wrongs }) => {
	return (
		<div className="human">
			<div className="human__all">
				{wrongs >= 1 && <div className="human__head"></div>}
				{wrongs >= 2 && <div className="human__body"></div>}
				{wrongs >= 3 && <div className="human__arm--left"></div>}
				{wrongs >= 4 && <div className="human__arm--right"></div>}
				{wrongs >= 5 && <div className="human__leg--left"></div>}
				{wrongs >= 6 && <div className="human__leg--right"></div>}
			</div>
		</div>
	)
}

export default Human
