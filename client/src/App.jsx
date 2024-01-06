import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TasksPage from './pages/TasksPage'
import TaskFormPage from './pages/TaskFormPage'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div className="flex items-center justify-center h-full">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<TasksPage />} />
            <Route path='/tasks-create' element={<TaskFormPage />} />
            <Route path="/edit-task/:id" element={<TaskFormPage />} />
          </Routes>
          <Toaster />
        </BrowserRouter>
      </div>
    </div>

  )
}

export default App
