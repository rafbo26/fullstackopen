import React from 'react'
import Person from './Person'


const Persons = ({ persons, filter, onClick }) => {
  const filteredPeople = persons.filter((person) => {
    return person.name.toLowerCase().includes(filter.toLowerCase())
  })
  return (
    <Person people={filteredPeople} onClick={onClick}/>
  )
}

export default Persons