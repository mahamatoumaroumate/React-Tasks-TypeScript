import React, { ReactNode, useState } from 'react'
import { Task } from './types'
type FormProp = {
  addTask: (text: string) => void
}
const Form = ({ addTask }: FormProp) => {
  const [text, setText] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    if (!text) alert('please provide some values')
    addTask(text)
    setText('')
  }
  return (
    <>
      <h2>Task </h2>
      <form className='form' onSubmit={handleSubmit}>
        <input
          type='text'
          value={text}
          onChange={(e) => setText(() => e.target.value)}
        />
        <button className='submit'>Submit</button>
      </form>
    </>
  )
}
export default Form
