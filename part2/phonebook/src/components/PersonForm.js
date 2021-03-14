import React from 'react'

const PersonForm = ({ onSubmit, newName, handleNewName, newNumber, handleNewNumber }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name: <input type="text" value={newName} onChange={handleNewName}/>
      </div>
      <div>
        number: <input type="text" value={newNumber} onChange={handleNewNumber}/>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm