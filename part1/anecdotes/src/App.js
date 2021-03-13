import React, { useState } from 'react'


const Header = ({ text }) =>{
  return <h1>{text}</h1>
}

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>
}

const Para = ({ anecdote }) => {
  return <p>{anecdote}</p>
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  const emptyArray = new Array(anecdotes.length + 1).join('0').split('').map(parseFloat)
  const [votes, setVotes] = useState(emptyArray)

  const anecdoteHandler = () => {
    let randomNumber = getRandomNumber()
    while (randomNumber === selected) {
      randomNumber = getRandomNumber()
    }
    setSelected(randomNumber)
  }

  const voteHandler = () => {
    const voteArray = [...votes]
    voteArray[selected] += 1
    setVotes(voteArray)
  }

  const getRandomNumber = () => {
    return Math.floor(Math.random() * anecdotes.length)
  }

  const getHighestVoteAnecdote = () => {
    const max = Math.max.apply(Math, votes)
    const i = votes.indexOf(max)
    return anecdotes[i]
  }

  return (
    <div>
      <Header text="Anecdote of the day" />
      <Para anecdote={anecdotes[selected]} />
      <Button text="Vote" handleClick={ voteHandler } />
      <Button text="Next anecdote"handleClick={ anecdoteHandler } />
      <Header text="Anecdote with most votes" />
      <Para anecdote={ getHighestVoteAnecdote() } />
    </div>
  )
}

export default App