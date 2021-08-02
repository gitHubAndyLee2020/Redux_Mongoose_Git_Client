import Form from './components/form/Form'
import Todos from './components/todos/Todos'

import { useEffect } from 'react'

import { useDispatch } from 'react-redux'

import { getTodos } from './actions/todos'

function App() {
  const dispatch = useDispatch()  

  useEffect(() => {
    dispatch(getTodos())
  }, [])

  return (
    <div>
      <Form />
      <Todos />
    </div>
  )
}

export default App
