import React, {Component} from "react";

class Counter extends Component {

    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }

    Increment() {
        // this.setState ({
        //     counter: this.state.counter + 1
        // })

        this.setState(prevState => ({
            counter: prevState.counter + 1
        }))
    }

    Decriment() {
        this.setState(prevState => ({
            // counter: prevState.counter > 0 ? prevState.counter - 1 : 0
            counter: prevState.counter - 1
        }))
    }

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={() => this.Increment()}>Increment</button>
                <button onClick={() => this.Decriment(0)}>Decriment</button>
            </div>
        )   
    }
}

export default Counter;