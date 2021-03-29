import React, {useEffect, useState} from 'react'
import Note from './components/Note'
import noteServices from './services/notes'

const Button = (props) => {
  return <button type={props.type} onClick={props.handler}>{props.text}</button>
}

const App = (props) => {
  const [notes, setNotes] = useState( [] )
  const [input, setInput] = useState('')
  const [showAll, setShowAll] = useState(true)
  
  useEffect(() => {
    noteServices
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])


  const handleSubmit = (event) => {
    event.preventDefault()
    const newNote = {
      id: notes.length + 1,
      content: input,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }

    noteServices
      .create(newNote)
      .then(returnedNotes => {
        setNotes(notes.concat(returnedNotes))
      })
    
  }

  const toggleImportanceOf = (id) => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }
    
    noteServices
      .update(id, changedNote)
      .then(returnedNotes => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNotes))
      })

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
          return <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)}/>
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