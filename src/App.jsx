import './App.css'
import { useState } from 'react'

// Componentes
import ListToggle from './components/ListToggle'
import ItemCard from './components/ItemCard'
import ItemForm from './components/ItemForm'

function App() {
  const [currentView, setCurrentView] = useState('tasks')

  return (
    <div className='h-full w-78 flex flex-col items-center justify-center'>
      <div>
        <h2 className='font-semibold text-[1.7rem]'>TASK MASTER PRO</h2>
        <h3 className='text-gray-400 font-light text-lg'>3D-Gamified Edition</h3>
      </div>

      {/* Conteúdo principal */}
      <div className='flex flex-col items-center justify-between gap-20 py-15 h-150'>
        {/* Container do Toggle e Card de Tarefa/Item */}
        <div className='flex flex-col items-center gap-12'>
          <ListToggle currentView={currentView} setCurrentView={setCurrentView} />
          <ItemCard currentView={currentView} />
        </div>

        {/* Form */}
        <ItemForm currentView={currentView} />
      </div>
    </div>
  )
}

export default App
