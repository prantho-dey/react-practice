import React, {Component} from 'react'


// Class Based Componente
class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Welcome Visitor'
        }
    }
    changeMessage() {
        this.setState({
            message: 'Congratulations'
        })
    }

  render() {
    return (
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={() => this.changeMessage()}>subscribe</button>
        </div>
    )
  }
}

export default Message;

