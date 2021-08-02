import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/todos'

import * as api from '../api/todos'

export const getTodos = () => async (dispatch) => {
    try {
        const { data } = await api.getTodos()
        
        dispatch({ type: FETCH_ALL, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const createTodo = (todo) => async (dispatch) => {
    try {
        const { data } = await api.createTodo(todo)
        
        dispatch({ type: CREATE, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const updateTodo = (id, todo) => async (dispatch) => {
    try {
        const { data } = await api.updateTodo(id, todo)
        
        dispatch({ type: UPDATE, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const deleteTodo = (id) => async (dispatch) => {
    try {
        await api.deleteTodo(id)
        
        dispatch({ type: DELETE, payload: id })
    } catch (error) {
        console.log(error.message)
    }
}
