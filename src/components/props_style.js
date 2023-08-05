import React from 'react'

// Funcational Compontent
const propsStyle = props => {
  return (
    <div>
      <h1>I am {props.name} & Im a {props.profession}</h1>
      {props.children}
    </div>
  )
}

export default propsStyle;