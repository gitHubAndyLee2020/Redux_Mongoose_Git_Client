import React, {useState} from 'react'

import { useDispatch } from 'react-redux'

import { getTodos, createTodo, updateTodo, deleteTodo } from '../../actions/todos'

export default function Form() {
    const [post, setPost] = useState({ content: '', num: 0 })
    
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createTodo(post))
        setPost({ content: '', num: 0 })
    } 

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input required type='text' value={post.content} onChange={e => setPost({ ...post, content: e.target.value })} />            
                <input required type='number' value={post.num} onChange={e => setPost({ ...post, num: parseInt(e.target.value) })} />            
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
