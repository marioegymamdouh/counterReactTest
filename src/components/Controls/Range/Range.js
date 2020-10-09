import React from "react";

const Range = (props) => {
    return (
        <input disabled={props.disabled} type="range" min="1" max="100" value={props.step} onChange={props.stepChanger}/>
    )
};

export default Range;