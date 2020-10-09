import React, {Component} from 'react';
import styles from './App.css';
import Counter1 from "./components/Counter/instances/Counter1/Counter1";
import Counter2 from "./components/Counter/instances/Counter2/Counter2";
import Counter2Context from "./context/counter2-context";

class App extends Component{
    state = {
        counter2: 0
    };

    updateCounter2 = (step) => {
        let current = this.state.counter2;
        this.setState({counter2: current + step});
    };

    render() {
        return (
            <div className={styles.App}>
                <Counter2Context.Provider value={{
                    counter: this.state.counter2,
                    updateCounter2: (val) => this.updateCounter2(val),
                }}>
                    <Counter1 togglerId='controlsToggler1'/>
                    <Counter2 togglerId='controlsToggler2'/>
                </Counter2Context.Provider>
            </div>
        );
    }
}

export default App;
