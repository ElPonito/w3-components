import { Component } from 'react'

export default class Counter extends Component {
    constructor() {
        super()
        this.state = {
            counterValue: 0
        }
    }

    addOne = () => {
        this.setState({counterValue: this.state.counterValue + 1})
    }

    removeOne = () => {
        this.setState({counterValue: this.state.counterValue - 1})
    }

    render = () => (
        <div>
            {this.state.counterValue}<br/>
            <button onClick={this.addOne}>+1</button>
            <button onClick={this.removeOne}>-1</button>
        </div>
    )
}



