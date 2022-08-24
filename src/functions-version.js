import React from 'react';
// Components
import Hole from './components/Hole';
// Styles
import './assets/css/index.css';
// Data
import Course from './assets/data/course-info.js';

function calcTotals() {
    var totalYards = 0;
    var totalPar = 0;

    for(var i = 0; i < Course.length; i++) {
        totalYards += parseInt(Course[i].yards);
        totalPar += parseInt(Course[i].par);
    }

    const totals = [];
    totals[0] = totalYards;
    totals[1] = totalPar;

    return (totals);
}

const courseInfo = {
    yards: calcTotals()[0],
    par: calcTotals()[1]
};

function handleScore() {
    var holeScores = document.getElementsByClassName('js-holeScore');
    var scoreSum = document.getElementById('js-scoreSum');
    var total = 0;

    for (var i = 0; i < holeScores.length; i++) {
        var score = holeScores[i].value;
        total = +total + +score;
    }

    if (total === 0) {
        scoreSum.innerHTML = "";
    } else {
        scoreSum.innerHTML = total;
    }
}

function ScoreCard() {
    return (
        <div className="scorecard">

            <div className="holes">
                <div className="labels">
                    <div className="square-label label__hole">Hole</div>
                    <div className="square-label label__yards">Yards</div>
                    <div className="square-label label__par">Par</div>
                    <div className="square-label label__score">Score</div>
                </div>

                {/* Loop through the course data and display a hole component for each one */}
                {Course.map((hole, index) => (
                    <Hole
                        key={index}
                        num={hole.number}
                        yards={hole.yards}
                        par={hole.par}
                        setScore={handleScore}
                    />
                ))}
                
                <div className="labels">
                    <div className="square-label label__hole"></div>
                    <div className="square-label label__yards">{courseInfo.yards}</div>
                    <div className="square-label label__par">{courseInfo.par}</div>
                    <div className="square-label label__score" id="js-scoreSum"></div>
                </div>
            </div>

            <ul>
                <li><strike>Get the hole number and hole par to be pulled in via JSON data</strike></li>
                <li><strike>Get the total par to be calculated from the JSON data pulled in</strike></li>
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
                <li><strike>Maybe add hole yardage in JSON data and pull that into scorecard as well</strike></li>
                <li><strike>Try and see if holes can be looped through instead of statically rendering each one in Hole class/function</strike></li>
                <li><strike>Adjust the format of the files to use functions instead of classes and have the functions broken out into their own files</strike></li>
            </ul>
        </div>
    )
}

export default ScoreCard;