import './App.css'
import { useState } from 'react'

// Componentes
import ListToggle from './components/ListToggle'
import ItemCard from './components/ItemCard'

function App() {
  const [currentView, setCurrentView] = useState('tasks')

  return (
    <div className='border border-red-500 h-full w-78 flex flex-col items-center justify-between'>
      <header className='flex flex-col'>
        <h2 className='font-semibold text-[1.7rem]'>TASK MASTER PRO</h2>
        <h2 className='text-gray-400 font-medium text-lg'>3D-Gamified Edition</h2>
      </header>

      <ListToggle currentView={currentView} setCurrentView={setCurrentView} />

      {/* Tasks */}
      <main>
        <ItemCard currentView={currentView} />
      </main>

      {/* Input */}
      <input type="text" placeholder='Add new task or item...' className='border' />
    </div>
  )
}

export default App
