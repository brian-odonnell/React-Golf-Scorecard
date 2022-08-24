import React from 'react';
import './assets/css/index.css';

class HoleNum extends React.Component {
	render() {
		return (
			<div className="square">{this.props.value}</div>
		)
	}
}

class Par extends React.Component {
	render() {
		return (
			<div className="square square__par">{this.props.value}</div>
		);
	}
}

class Score extends React.Component {
	render() {
		return (
			<input className="square square__score"></input>
		);
	}
}

class TotalPar extends React.Component {
	render() {
		return (
			'To-Do'
			// Calculate Par
		);
	}
}

class TotalScore extends React.Component {
	render() {
		return (
			'To-Do'
			// Calculate total score based off inputs
		)
	}
}

class Hole extends React.Component {
	renderHoleNum(i) {
		return <HoleNum value={i}/>;
	}

	renderPar(n) {
		return <Par value={n}/>;
	}

	renderScore() {
		return <Score />;
	}

	render() {
		return (
			<div className="hole">
				{this.renderHoleNum(this.props.number)}
				{this.renderPar(this.props.par)}
				{this.renderScore()}
			</div>
		)
	}
}

class Card extends React.Component {
	renderHole(i,n) {
		return <Hole number={i} par={n}/>;
	}

	renderTotalPar() {
		return <TotalPar />;
	}

	renderTotalScore() {
		return <TotalScore />;
	}

	render() {
		return (
			<div className="scorecard">
				<div className="holes">
					<div className="labels">
						<div className="square-label label__hole">Hole</div>
						<div className="square-label label__par">Par</div>
						<div className="square-label label__score">Score</div>
					</div>
					{this.renderHole(1,4)}
					{this.renderHole(2,4)}
					{this.renderHole(3,3)}
					{this.renderHole(4,4)}
					{this.renderHole(5,3)}
					{this.renderHole(6,5)}
					{this.renderHole(7,4)}
					{this.renderHole(8,4)}
					{this.renderHole(9,5)}
					<div className="labels">
						<div className="square-label label__hole"></div>
						<div className="square-label label__par"></div>
						<div className="square-label label__score"></div>
					</div>
					{this.renderHole(10,4)}
					{this.renderHole(11,4)}
					{this.renderHole(12,3)}
					{this.renderHole(13,3)}
					{this.renderHole(14,5)}
					{this.renderHole(15,4)}
					{this.renderHole(16,4)}
					{this.renderHole(17,4)}
					{this.renderHole(18,5)}
					<div className="labels">
						<div className="square-label label__hole"></div>
						<div className="square-label label__par">{this.renderTotalPar()}</div>
						<div className="square-label label__score">{this.renderTotalScore()}</div>
					</div>
				</div>

				<ul>
					<li>Get the hole number and hole par to be pulled in via JSON data</li>
					<li>Get the total par to be calculated from the JSON data pulled in</li>
					<li>Get the score inputs working</li>
					<li>Get the total score to be calculated by the current scores entered</li>
					<li>
						<ul>
							<li>Try to have the score be +/- par until the round is finished</li>
							<li>Once the round has finished then switch it to total number</li>
						</ul>
					</li>
					<li>If possible, try to add the par, bogey, and other score symbols over scores based on score entered</li>
					<li>If possible, try to add the score and par after 9 holes</li>
					<li>Maybe add hole yardage in JSON data and pull that into scorecard as well</li>
					<li>Try and see if holes can be looped through instead of statically rendering each one in Hole class/function</li>
					<li>Adjust the format of the files to use functions instead of classes and have the functions broken out into their own files</li>
				</ul>
			</div>
		);
	}
}

export default Card;

// ========================================

// ReactDOM.render(
// 	<ScoreCard />,
// 	document.getElementById('root')
// );
