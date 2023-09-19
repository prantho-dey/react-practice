import React, { Component } from "react";
import ChildComponent from "./ChildComponent";


class ParentComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            parentName: 'Parent'
        }

        // For Binding
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName) {
        // Es6 feature for concatenate (+)
        // alert(`hello ${this.state.parentName}`)
        alert(`hello ${this.state.parentName} from ${childName}`)

    }
 

    render() {
        return (
            <div>
                <ChildComponent greetHandel={this.greetParent} />
            </div>
        )
    }
}


export default ParentComponent;