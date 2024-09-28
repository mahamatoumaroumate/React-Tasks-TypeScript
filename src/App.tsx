import { useEffect, useState } from 'react'
import Form from './Form'
import List from './List'
import { Task } from './types'
const setLocalStorage = (tasks: Task[]) => {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}
const getLocalStorage = () => {
  const tasks = localStorage.getItem('tasks')
  return tasks ? JSON.parse(tasks) : []
}
const App = () => {
  const [tasks, setTasks] = useState<Task[]>(getLocalStorage)
  const completedTask = (id: string) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted }
        } else {
          return task
        }
      })
    )
  }
  useEffect(() => {
    setLocalStorage(tasks)
  }, [tasks])
  const deleteTask = (id: string): void => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  const addTask = (text: string): void => {
    const task: Task = {
      id: new Date().getTime().toString(),
      description: text,
      isCompleted: false,
    }
    setTasks([...tasks, task])
  }
  return (
    <section className='home'>
      <Form addTask={addTask} />
      <List
        tasks={tasks}
        completedTask={completedTask}
        deleteTask={deleteTask}
      />
    </section>
  )
}
export default App
