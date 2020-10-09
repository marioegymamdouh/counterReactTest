import React from "react";
import styles from "./Reset.css";


const reset = (props) => {

    return (
        <button disabled={props.disabled} className={styles.reset} onClick={props.click} type='button'>Reset</button>
    )
};

export default reset;