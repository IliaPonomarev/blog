export default (value, type) => {
  const date = new Date(value)

  if (type === 'date') {
    return date.toLocaleDateString()
  } else if (type === 'time') {
    return new Date(value).toLocaleTimeString()
  }

  return new Date(value).toLocaleString()
}
