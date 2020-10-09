import React from "react";
import styles from "./Controller.css"

const reset = (props) => {

    let appliedClasses = [styles.btn];

    if (props.styleClasses === 'primary'){
        appliedClasses.push(styles.increment)
    }

    if(props.styleClasses === 'danger'){
        appliedClasses.push(styles.decrement)
    }

    if(props.intervalState){
        appliedClasses.push(styles.active)
    }


    return (
        <button disabled={props.disabled} className={appliedClasses.join(' ')} onClick={props.click} type='button'>{props.children}</button>
    )
};

export default reset;