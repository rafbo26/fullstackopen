import React from 'react'

const Filter = ({ type, value, onChange }) => {
  return (
    <div>
      filter shown with: <input type={type} value={value} onChange={onChange}/>
    </div>
  )   
}

export default Filter