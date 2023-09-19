import React from "react"

function ChildComponent (props) {
    return (
        <div>
            {/* <button onClick={props.greetHandel}>Greet Parent</button> */}
            <button onClick={() => props.greetHandel('Child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent