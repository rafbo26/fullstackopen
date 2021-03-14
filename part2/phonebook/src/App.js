import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (doesExist(newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const newNameObject = { name: newName, number: newNumber}
      setPersons(persons.concat(newNameObject))
      setNewNumber('')
      setNewName('')
    }
  }
  
  const handleNewName = (event) => {
    setNewName(event.target.value)
  }
  
  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }
  
  const handleFilter = (event) => {
    setFilter(event.target.value)
  }
  
  const doesExist = (name) => {
    const names = persons.map(person => person.name)
    return names.includes(name)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      
      <Filter type="text" value={filter} onChange={handleFilter} />
      
      <h3>Add a new</h3>

      <PersonForm 
        onSubmit={handleSubmit} 
        newName={newName} 
        handleNewName={handleNewName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
      />

      <h3>Numbers</h3>

      <Persons persons={persons} filter={filter} />

    </div>
  )
}

export default App