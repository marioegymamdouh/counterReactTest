import Counter from "../../Counter";
import Counter2Context from "../../../../context/counter2-context";

class Counter2 extends Counter{
    static contextType = Counter2Context;

    constructor(props, context) {
        super(props, context);
        this.state.buttonsState = true;
        this.state.counter = this.context.counter;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.setState({counter: this.context.counter})
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.state.counter !== this.context.counter;
    }
}

export default Counter2