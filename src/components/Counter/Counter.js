import React, {Component} from "react";
import Reset from '../Controls/Reset/Reset'
import Controller from '../Controls/Controller/Controller'

class Counter extends Component{
    state = {
        counter: 0
    };

    resetHandler = () => {
        this.setState({counter: 0})
    };

    increaseHandler = () => {
        let current = this.state.counter;
        this.setState({counter: current+1})
    };

    decreaseHandler = () => {
        let current = this.state.counter;
        this.setState({counter: current-1})
    };

    render() {
        return (
            <React.Fragment>
                <h2>{this.state.counter}</h2>
                <Reset click = {this.resetHandler}/>
                <Controller click = {this.increaseHandler}>+</Controller>
                <Controller click = {this.decreaseHandler}>-</Controller>
            </React.Fragment>
        )
    }
}

export default Counter;