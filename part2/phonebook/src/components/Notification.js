const Notification = ({ message, type }) => {
  const color = type === 'error' ? 'red' : 'green'
  const messageStyle = {
    fontSize: 20,
    color: color,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    background: 'lightGrey'
  }
  if (message === null) {
    return null
  }
  return (
    <div style={messageStyle}>
      {message}
    </div>
  )
}

export default Notification