import { useRemeshDomain, useRemeshQuery, useRemeshSend } from 'remesh-react'

import { TodoListDomain } from '../../../domains/todo/domains/TodoList'
import { TodoAppDomain } from '../../../domains/todo/domains/TodoApp'

import { TodoItem } from './TodoItem'

export const TodoList = () => {
  const todoAppDomain = useRemeshDomain(TodoAppDomain())
  const filteredTodoKeyList = useRemeshQuery(todoAppDomain.query.FilteredTodoListQuery())

  return (
    <section className="main">
      <ToggleAllInput />
      <ul className="todo-list">
        {filteredTodoKeyList.map((todo) => (
          <TodoItem key={todo.id} item={todo} />
        ))}
      </ul>
    </section>
  )
}

const ToggleAllInput = () => {
  const send = useRemeshSend()
  const todoListDomain = useRemeshDomain(TodoListDomain())
  const isAllCompleted = useRemeshQuery(todoListDomain.query.IsAllCompletedQuery())

  const handleToggleAll = () => {
    send(todoListDomain.command.ToggleAllCommand())
  }
  return (
    <>
      <input
        id="toggle-all"
        type="checkbox"
        className="toggle-all"
        checked={isAllCompleted}
        onChange={handleToggleAll}
      />
      <label htmlFor="toggle-all" />
    </>
  )
}
