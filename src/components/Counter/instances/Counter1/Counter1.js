import Counter from "../../Counter";
import Counter2Context from "../../../../context/counter2-context";

class Counter1 extends Counter{

    static contextType = Counter2Context;

    increaseHandler = () => {
        let current = this.state.counter;
        let changesValue = this.state.changesValue;
        let step = this.state.step;
        this.setState({
            counter: current + step,
            changesValue: changesValue - step
        }, this.checkChanges);
    };

    decreaseHandler = () => {
        let current = this.state.counter;
        let changesValue = this.state.changesValue;
        let step = this.state.step;
        this.setState({
            counter: current - step,
            changesValue: changesValue + step
        }, this.checkChanges);
    };

    autoIncreaseHandler = () => {
        if(this.state.increaseIntervalState){
            clearInterval(this.increaseInterval);
            this.setState({increaseIntervalState: 0})
        }
        else {
            this.increaseInterval = setInterval(this.increaseHandler, 2000);
            this.setState({increaseIntervalState: 1})
        }
    };

    autoDecreaseHandler = () => {
        if(this.state.decreaseIntervalState){
            clearInterval(this.decreaseInterval);
            this.setState({decreaseIntervalState: 0})
        }
        else {
            this.decreaseInterval = setInterval(this.decreaseHandler, 2000);
            this.setState({decreaseIntervalState: 1})
        }
    };

    checkChanges = () => {
        if(this.state.changesCounter === 9){
            this.context.updateCounter2(this.state.changesValue);
            this.setState({
                changesCounter: 0,
                changesValue: 0
            })
        }
        else {
            let currentChanges = this.state.changesCounter;
            this.setState({
                changesCounter: currentChanges + 1
            })
        }
    }

}

export default Counter1