import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Note from './components/Note'

const Button = (props) => {
  return <button type={props.type} onClick={props.handler}>{props.text}</button>
}

const App = (props) => {
  const [notes, setNotes] = useState( [] )
  const [input, setInput] = useState('')
  const [showAll, setShowAll] = useState(true)
  
  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }
  
  useEffect(hook, [])

  console.log('render', notes.length, 'notes')

  const handleSubmit = (event) => {
    event.preventDefault()
    const newNote = {
      id: notes.length + 1,
      content: input,
      date: new Date().toISOString,
      important: Math.random() < 0.5
    }
    setNotes(notes.concat(newNote))
    setInput('')
  }

  const handleNoteChange = (event) => {
    setInput(event.target.value)
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
        <Button text={showAll ? 'show important' : 'show all'} handler={() => setShowAll(!showAll)} />
      <ul>
        {notesToShow.map(note => {
          return <Note key={note.id} note={note} />
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleNoteChange}></input>
        <Button type="submit" text="save" />
      </form>
    </div>
  )
}

export default App