import { useForm } from 'react-hook-form'
import { createTask, getTask, updateTask} from '../api/task.api'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'

const TaskFormPage = () => {

  const { register, handleSubmit, formState: {
    errors
  },
  setValue
  } = useForm()

  const navigate = useNavigate()
  const params = useParams()
  console.log(params)

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const res = await getTask(params.id)
        setValue("title", res.data.title)
        setValue("description", res.data.description)
      }
    }
    loadTask();
  }, [params])

  const onSubmit = handleSubmit(async data => {
    if (params.id){
      await updateTask(params.id, data)
      toast.success("Task update!", {
        position: "bottom-right",
        
      } )
    }else {
      await createTask(data)
      toast.success("Task create!", {
        position: "bottom-right",

      } )
    }
    navigate('/')
  })

  return (
    <form onSubmit={onSubmit} className="bg-zinc-800 max-w-sm p-4">
      <label htmlFor="title" className="block text-sm font-bold mb-1">Name Task:</label>
      <input type='text' placeholder='Title'
        {...register("title", { required: true })}
        className="w-full p-2 rounded-md bg-zinc-600 "
      />
      {errors.title && <span className='block text-xs text-red-600'>This file is required</span>}
      <label htmlFor="description" className="block text-sm font-bold mb-1">Description:</label>
      <textarea rows={3} placeholder='Description'
        {...register("description", { required: true })}
        className="w-full p-2 rounded-md bg-zinc-600"
      ></textarea>
      {errors.description && <span className='block text-xs text-red-600 mb-2'>This file is required</span>}

      <button className="bg-indigo-600 px-2 py-1 rounded-sm text-sm">Save</button>
    </form>
  )
}

export default TaskFormPage