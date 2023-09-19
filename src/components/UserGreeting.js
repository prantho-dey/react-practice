import React, { Component } from "react";


class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        // if else Condation ======== Approach 1 ==============
        /* if (this.state.isLoggedIn) {    
            return (
                 <h1>Welcome Prantho</h1>
            )
        }else {
            return (
                <h1>Welcome Guest</h1>
           )
        } */


        // Element Variables ======== Approach 2 ==============

        /* 
        let Message
        if(this.state.isLoggedIn) {
            Message = <h1>Welcome Prantho</h1>
        }else {
            Message = <h1>Welcome Guest</h1>
        }

        return <div>{Message}</div>
        */

        // Ternary Conditional Operator ======== Approach 3 ============== ** Prefearence

        /*
        return this.state.isLoggedIn ? (
            <h1>Welcome Prantho</h1>
        ) : (
            <h1>Welcome Guest</h1>
        )
        */

        // Short Cercuite Operator ======== Approach 4 ============== * Prefearence
        return this.state.isLoggedIn && <h1>Welcome Prantho</h1>
    }
}

export default UserGreeting