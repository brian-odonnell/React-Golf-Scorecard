import React from 'react';

function Score(props) {
    return (
        <input
            className="square square__score js-holeScore"
            name="holeScore"
            type="text"
            onChange={props.setScore}
        />
    )
}

export default Score;