import React, {Component} from "react";
import Reset from '../Controls/Reset/Reset';
import Controller from '../Controls/Controller/Controller';
import Range from "../Controls/Range/Range";
import styles from './Counter.css';

class Counter extends Component{
    state = {
        counter: 0,
        buttonsState: false,
        step: 1,
        changesCounter: 0,
        changesValue: 0,
        increaseIntervalState: 0,
        decreaseIntervalState: 0
    };

    increaseInterval;
    decreaseInterval;

    resetHandler = () => {
        this.setState({counter: 0})
    };

    stepHandler = (event) => {
        let newValue = parseInt(event.target.value);
        this.setState({step: newValue})
    };

    logKey = (event) => {
        if(event.code === 'ArrowLeft' && !this.state.buttonsState){
            this.decreaseHandler();
        }
        else if(event.code === 'ArrowRight' && !this.state.buttonsState){
            this.increaseHandler()
        }
    };

    render() {

        let style = {
            backgroundColor: 'rgb(255,255,255)'
        };
        if(this.state.counter > 0){
            style={
                backgroundColor: 'rgb(255,' + (255 - (this.state.counter*5)) + ',' + (255 - (this.state.counter*5)) + ')'
            }
        }
        else if(this.state.counter < 0){
            style={
                backgroundColor: 'rgb(' + (255 + (this.state.counter*5)) + ',255,' + (255 + (this.state.counter*5)) + ')'
            }
        }

        document.addEventListener('keydown', this.logKey);



        return (
            <div className={styles.counter}>
                <h2 style={style}>{this.state.counter}</h2>
                <div>
                    <label htmlFor={this.props.togglerId}>Controls</label>
                    <input id={this.props.togglerId} type='checkbox'/>
                    <div>
                        <div className={styles.btnsContainer}>
                            <Reset disabled = {this.state.buttonsState} click = {this.resetHandler}/>
                            <Controller styleClasses={'danger'} disabled = {this.state.buttonsState} click = {this.decreaseHandler}>-</Controller>
                            <Controller styleClasses={'primary'} disabled = {this.state.buttonsState} click = {this.increaseHandler}>+</Controller>
                        </div>
                        <div className={styles.btnsContainer}>
                            <Controller intervalState={this.state.decreaseIntervalState} styleClasses={'danger'} disabled = {this.state.buttonsState} click = {this.autoDecreaseHandler}>auto -</Controller>
                            <Controller intervalState={this.state.increaseIntervalState} styleClasses={'primary'} disabled = {this.state.buttonsState} click = {this.autoIncreaseHandler}>auto +</Controller>
                        </div>
                        <Range disabled = {this.state.buttonsState} step = {this.state.step} stepChanger = {this.stepHandler}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Counter;