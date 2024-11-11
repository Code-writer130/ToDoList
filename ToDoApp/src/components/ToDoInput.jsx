import React from 'react'

export default function ToDoInput() {
  return (
    <div>
      <h2 className='font-bold text-5xl text-center mt-6'>To Do App</h2>
      <div className='mt-4'>
      <input type="text" className='border border-black p-2 m-4 rounded' placeholder='Enter new task...' 
      // value={newTask}
      // onChange={(e) => setNewTask(e.target.value)}
      />
      <button className='border rounded bg-red-300 p-2 -ml-2'>Add Task</button>
      </div>
      </div>
    
  )
}
