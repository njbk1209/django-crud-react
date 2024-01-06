import React, { useEffect, useState } from 'react'
import { getAllTasks, deleteTask } from '../api/task.api'
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast'


const TasksList = () => {

    const [tasks, setTasks] = useState();

    async function loadTasks() {
        const res = await getAllTasks()
        setTasks(res.data)
    }

    useEffect(() => {
        loadTasks()
    }, [])

    const handleDelete = async (id) => {
        const accepted = window.confirm("Are you sure?")
        if (accepted) {
            await deleteTask(id)
            toast.success("Task delete!", {
                position: "bottom-right",
            })
        }
        loadTasks()
    }

    return (
        <div className='w-5/6 lg:w-4/6 '>
            <header className="flex justify-between items-center py-4">
                <h1 className='text-lg'>Pending Task {tasks && tasks.length} </h1>
                <Link to='/tasks-create' className="bg-indigo-600 px-2 py-1 rounded-sm text-sm">Create task</Link>
            </header>
            <section className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {tasks && tasks.map((task, index) => (
                    <article key={index} className="bg-neutral-800 p-4 rounded-md">
                        <header className="mb-2">
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                        </header>
                        <div className="flex gap-x-2">
                            <button onClick={() => handleDelete(task.id)} className="bg-red-500 px-2 py-1 text-xs rounded-md self-center">Delete</button>
                            <Link to={`/edit-task/${task.id}`} className="bg-zinc-600 px-2 py-1 text-xs rounded-md">Edit task</Link>
                        </div>
                    </article>
                ))}
            </section>
        </div>
    )
}

export default TasksList