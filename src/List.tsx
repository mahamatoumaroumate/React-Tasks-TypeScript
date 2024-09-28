import { Task } from './types'
import { FaTrash } from 'react-icons/fa'

type Props = {
  tasks: Task[]
  completedTask: (id: string) => void
  deleteTask: (id: string) => void
}
const List = ({ tasks, completedTask, deleteTask }: Props) => {
  return (
    <ul className='tasks'>
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            <h3
              style={{
                textDecoration: `${task.isCompleted ? 'line-through' : ''}`,
              }}
            >
              {task.description}
            </h3>
            <div>
              <input
                type='checkbox'
                className='completed'
                checked={task.isCompleted}
                onChange={(e) => completedTask(task.id)}
              />

              <button
                type='button'
                className='delete'
                onClick={() => deleteTask(task.id)}
              >
                {<FaTrash />}{' '}
              </button>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
export default List
