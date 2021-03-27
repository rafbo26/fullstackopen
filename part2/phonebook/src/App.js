import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
    axios
    .get("http://localhost:3001/persons")
    .then(response => {
      setPersons(response.data)
    })
  },[])


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