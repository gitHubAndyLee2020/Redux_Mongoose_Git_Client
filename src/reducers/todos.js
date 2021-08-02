import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/todos'

function bubblesort(todos) {
    for (let i=0;i<todos.length-1;i++) {
        let swap = false
        for (let j=0;j<todos.length-1;j++) {
            if (todos[j].num > todos[j+1].num) {
                let temp = todos[j]
                todos[j] = todos[j+1]
                todos[j+1] = temp
                swap = true
            }
        }
        if (!swap) {
            break
        }
    }
    return todos
}

export default (todos = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload
        case CREATE:
            return bubblesort([...todos, action.payload])
        case UPDATE:
            return bubblesort(todos.map(todo => todo._id === action.payload._id ? action.payload : todo))
        case DELETE:
            return todos.filter(todo => todo._id !== action.payload)
        default:
            return todos
    }    
}