import React from 'react'

const Person = ({ people }) => {
  return (
    <div>
      {people.map(person => <li key={person.name}>{person.name} {person.number}</li>)}
    </div>
  )
}

export default Person