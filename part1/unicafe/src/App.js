import React, { useState } from 'react'

const Header = ({ text }) => {
    return (
      <h1>{text}</h1>
    )
  }

const Button = ({ text, clickHandle}) => {
  return (
    <button onClick={clickHandle}>{text}</button>
  )
}

const Statistics = ({ text, num, all }) => {
  if (text === 'good' && all === 0) {
    return (
      <tr>
        <td>No feedback given</td>
      </tr>
    )
  } else if ( all === 0) {
    return <></>
  } else {
    return (
      <tr>
        <td>{text}</td>
        <td>{num}</td>
      </tr>
    )
  }
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState([])
  
  const goodHandler = () => {
    setGood(good + 1)
    setAll(all.concat(1))
  }
  const neutralHandler = () => {
    setNeutral(neutral + 1)
    setAll(all.concat(0))
  }
  const badHandler = () => {
    setBad(bad + 1)
    setAll(all.concat(-1))
  }

  const getPercent = () => {
    if (all.length > 0) {
      return (good / all.length * 100).toFixed(0) + '%'
    } 
    return 0 * 100 + '%'
  }

  const getAvg = () => {
    if (all.length === 0) {
      return 0
    } 
    return (all.reduce((a,b) => a + b, 0) / all.length).toFixed(2)
  }

  return (
    <div>
      <Header text='give feedback'/>
      <Button clickHandle={goodHandler} text='good' />
      <Button clickHandle={neutralHandler} text='neutral' />
      <Button clickHandle={badHandler} text='bad' />
      <Header text='statistics' />
      <table>
        <tbody>
          <Statistics text='good' num={good} all={all.length}/>
          <Statistics text='netural' num={neutral} all={all.length}/>
          <Statistics text='bad' num={bad} all={all.length} />
          <Statistics text='all' num={all.length} all={all.length} />
          <Statistics text='avg' num={getAvg()} all={all.length} />
          <Statistics text='positive' num={getPercent()} all={all.length} />
        </tbody>
      </table>
    </div>
  )
}

export default App
