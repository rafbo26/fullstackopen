import React from 'react'

const Hello = (props) => {
  return (
    <div>
      <p>Hello world { props.name }</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Mark"/>
    </div>
  )
}

export default App