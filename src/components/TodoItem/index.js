import './index.css'

const TodoItem = props => {
  const {initialTodoList} = props
  const {title} = initialTodoList

  return (
    <li className="list-item">
      <div className="todo-container">
        <p className="todo">{title}</p>
        <button type="button" className="button">
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
