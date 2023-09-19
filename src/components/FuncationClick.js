import React from 'react'

function FuncationClick() {

    function clickHandeler() {
        console.log("Button Clicked")
    }

  return (
    <div>
        <button onClick={clickHandeler}>Click</button>
    </div>
  )
}

export default FuncationClick