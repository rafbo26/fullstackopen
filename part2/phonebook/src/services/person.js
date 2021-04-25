import axios from 'axios'
const url = '/api/persons'

const getAll = () => {
  const request = axios.get(url)
  return request.then(response => response.data)
}

const create = (person) => {
  const request = axios.post(url, person)
  return request.then(response => response.data)
}

const update = (id, person) => {
  const request = axios.put(`${url}/${id}`, person)
  return request.then(response => response.data)
}

const remove = (id) => {
  return axios.delete(`${url}/${id}`)
}


export default { getAll, create, update, remove }