import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { FormControl, InputGroup } from 'react-bootstrap'

function fetchTodos() {
  return [
    {
      id: 1,
      title: '吃饭',
      completed: false,
    },
    {
      id: 2,
      title: '刷牙',
      completed: false,
    },
    {
      id: 3,
      title: '喝水',
      completed: true,
    },
    {
      id: 4,
      title: '洗澡',
      completed: true,
    },
  ]
}

function TodoItem(props) {
  return (
    <InputGroup key={props.id}>
      <InputGroup.Checkbox
        checked={props.completed}
        onChange={props.onToggle}
      />
      <FormControl
        value={props.title}
        onChange={() => {}}
        style={{
          textDecoration: props.completed ? 'line-through 4px' : 'none',
        }}
      />
      <Button variant='outline-danger' onClick={props.onDelete}>
        x
      </Button>
    </InputGroup>
  )
}

function TodoList() {
  const [todos, setTodos] = useState(fetchTodos())

  return (
    <>
      <Container>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            title={todo.title}
            completed={todo.completed}
            onDelete={() => {
              setTodos(todos.filter((x) => x.id !== todo.id))
            }}
            onToggle={() => {
              setTodos(
                todos.map((x) =>
                  x.id === todo.id ? { ...x, completed: !x.completed } : x
                )
              )
            }}
          />
        ))}
      </Container>
    </>
  )
}

export default TodoList
