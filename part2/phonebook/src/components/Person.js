import React from 'react'

const Person = ({ people, onClick }) => {
  return (
    <div>
      {people.map(person => {
          return (
            <li key={person.name}>{person.name} {person.number}
              <button 
                key={person.name} 
                onClick={onClick} 
                value={person.id}>
                delete
              </button>
            </li>
          )
        }
      )}
    </div>
  )
}

export default Person