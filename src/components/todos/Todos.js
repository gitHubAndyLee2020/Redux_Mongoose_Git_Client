import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { updateTodo, deleteTodo } from '../../actions/todos'

export default function Todos() {
    const [update, setUpdate] = useState(false)
    const [updatedTodo, setUpdatedTodo] = useState({ content: '', num: 0 })
    const [selectedId, setSelectedId] = useState('')

    const dispatch = useDispatch()

    const todos = useSelector(state => state.todos)

    const handleUpdate = (todo) => {
        if (update) {
            dispatch(updateTodo(todo._id, updatedTodo))
            setUpdatedTodo({ content: '', num: 0 })
            setSelectedId('')
        } else {
            setUpdatedTodo({ content: todo.content, num: todo.num })
            setSelectedId(todo._id)
        }
        setUpdate(!update)
    }

    const handleDelete = (todo) => {
        dispatch(deleteTodo(todo._id))
    }

    return (
        <div>
            {todos.map(todo => {
                return (
                    <div>
                        {update && selectedId === todo._id ? <input type='text' value={updatedTodo.content} onChange={e => setUpdatedTodo({ ...updatedTodo, content: e.target.value })} /> : <p>{todo.content}</p>} 
                        {update && selectedId === todo._id ? <input type='number' value={updatedTodo.num} onChange={e => setUpdatedTodo({ ...updatedTodo, num: parseInt(e.target.value) })}/> : <p>{todo.num}</p>}
                        <button onClick={() => handleUpdate(todo)}>{ update && selectedId === todo._id ? 'Update' : 'Edit' }</button> 
                        <button onClick={() => handleDelete(todo)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}
