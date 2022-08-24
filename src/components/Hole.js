import React from 'react';
// Components
import HoleNum from './HoleNum';
import Par from './Par';
import Yards from './Yards';
import Score from './Score';

function Hole(props) {
    return (
        <div className="hole">
            <HoleNum num={props.num} />
            <Yards yards={props.yards} />
            <Par par={props.par} />
            <Score
                num={props.num}
                setScore={props.setScore}
            />
        </div>
    )
}

export default Hole;