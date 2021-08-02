import axios from 'axios'

const url = 'https://redux-mongoose-git.herokuapp.com/todos'

export const getTodos = () => axios.get(url)
export const createTodo = (todo) => axios.post(url, todo)
export const updateTodo = (id, todo) => axios.patch(`${url}/${id}`, todo)
export const deleteTodo = (id) => axios.delete(`${url}/${id}`)