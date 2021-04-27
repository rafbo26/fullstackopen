import React, { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/person'
import Notification from './components/Notification'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')
  const [ notice, setNotice ] = useState(null)
  const [ noticeType, setNoticeType ] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPhonebook => {
        setPersons(initialPhonebook)
      })
  },[])

  

  const handleSubmit = (event) => {
    event.preventDefault()
    if (doesExist(newName)) {
      const personToUpdate = persons.find(person => person.name === newName)
      const updatedPerson = {...personToUpdate, number: newNumber}
      const confirmChange = window.confirm(`${updatedPerson.name} is already added to phonebook, replace the old number with a new one?`)
      if (confirmChange) {
        personService
          .update(updatedPerson.id, updatedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id === returnedPerson.id ? returnedPerson : person))
          })
        setNoticeType('notice')
        setNotice(`Phone number changed for ${updatedPerson.name}`)
        setTimeout(() => {
          setNotice(null)
        }, 5000)
      }
    } else {
      const newNameObject = { name: newName, number: newNumber }
      personService
        .create(newNameObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNoticeType('notice')
          setNotice(`Added ${newNameObject.name}`)
          setTimeout(() => {
            setNotice(null)
          }, 5000)
          setNewNumber('')
          setNewName('')
        })
    }
  }
  
  const handleDelete = (event) => {
    const id = event.target.value
    const name = persons.find(person => person.id === id).name
    if (window.confirm(`Delete ${name}?`)) {
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
          setNoticeType('notice')
          setNotice(`${name} deleted`)
          setTimeout(() => {
            setNotice(null)
          }, 5000) 
        })
        .catch((error) => {
          setNoticeType('error')
          setNotice(`Information of ${name} has already been removed from server`)
          setTimeout(() => {
            setNotice(null)
          }, 5000)
        })
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
      <Notification message={notice} type={noticeType}/>
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

      <Persons persons={persons} filter={filter} onClick={handleDelete}/>

    </div>
  )
}

export default App