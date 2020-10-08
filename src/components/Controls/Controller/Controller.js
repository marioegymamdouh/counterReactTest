import React from "react";

const reset = (props) => {
    return (
        <button onClick={props.click} type='button'>{props.children}</button>
    )
};

export default reset;