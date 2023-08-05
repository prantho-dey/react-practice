import React from "react";
import logo from '../logo.svg';

function Me() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                Hello World
                </p>
                <p>
                    We use ads to keep our content free for you.
                    Thank you!
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
            </header>
        </div>
    );
}


// const Me = () => <h1>Hello Prantho</h1>
// export const Greet = () => <h1>Hello Bangladesh</h1>


export default Me; 