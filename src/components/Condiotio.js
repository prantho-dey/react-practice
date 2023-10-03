import React, { Component } from "react";


class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn : true
        }
    }

    render() {
        // if else Condation ======== Approach 1 ==============
        /*
        if(this.state.isLoggedIn) {
            return (
                <h1>Hello Prantho</h1>
            )
        } else {
            return (
                <h1>Hello Guest</h1>
            )
        }
        */

        // Element Variables ======== Approach 2 ==============
        /*
        let message;

        if (this.state.isLoggedIn) {
            message = <h1>Hello Prantho</h1> 
        } else {
            message = <h1>Hello Guest</h1>
        }
        
        return (message)
        */
       

        // Ternary Conditional Operator ======== Approach 3 ============== ** Prefearence

        /*
        return (
            this.state.isLoggedIn ? (
                <h1>Welcome Prantho</h1> 
            ) : (
                <h1>Welcome Guest</h1>
            )
        )
        */
        

        // Short Cercuite Operator ======== Approach 4 ============== * Prefearence
        return this.state.isLoggedIn && <h1>Welcome Prantho</h1>
        
    }
}

export default UserGreeting
