import './App.css'
import { useEffect, useState } from 'react'

// Componentes
import ListToggle from './components/ListToggle'
import ItemCard from './components/ItemCard'
import ItemForm from './components/ItemForm'

function App() {
  const [currentView, setCurrentView] = useState('tasks')
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Obtendo a lista do local storage
    const itemsList = localStorage.getItem('tasksList');

    // Condição: caso a lista exista, converte de string JSON para objeto JS e manda pro state
    itemsList ? setItems(JSON.parse(itemsList)) : console.log('não existem dados guardados')
    // console.log(itemsList)
  }, [])

  const handleAddItem = (item) => {
    const itemsObject = {
      id: Date.now(),
      text: item,
      type: currentView,
      isCompleted: false,
    }

    const newItems = [...items, itemsObject]
    
    // Adicionando tarefa/item no array
    setItems(newItems)
    console.log(newItems);

    // Guardando no local storage
    localStorage.setItem('tasksList', JSON.stringify(newItems))
    
    // Apagando o campo após registrar tarefa ou item
    const itemField = document.querySelector('.task-input');
    itemField.value = '';
  }

  const filteredItems = items.filter(item => item.type == currentView)

  const handleDeleteItem = (id) => {
    // console.log(id)

    const updatedItems = items.filter(item => item.id !== id)

    // Atualizando na tela com useState
    setItems(updatedItems)

    // Atualizando no localStorage para persistência
    localStorage.setItem('tasksList', JSON.stringify(updatedItems))

    // console.log(updatedItems)
  }

  const clearAll = () => {
    setItems([])
    localStorage.setItem('tasksList', '')
  }

  return (
    <div className='h-full w-78 flex flex-col items-center justify-center'>
      <div>
        <h2 className='font-semibold text-[1.7rem]'>TASK MASTER <span className='text-(--secondary)'>PRO</span></h2>
        <h3 className='text-gray-400 font-light text-lg'>3D-Gamified Edition</h3>
      </div>

      {/* Conteúdo principal */}
      <div className='flex flex-col items-center justify-between py-15 h-150'>
        {/* Container do Toggle e Card de Tarefa/Item */}
        <div className='flex flex-col items-center gap-12 pb-35'>
          <ListToggle currentView={currentView} setCurrentView={setCurrentView} />

          <div className='flex flex-col items-center gap-5'>
            {
              filteredItems.length >= 1
                ?
                <button
                  className='bg-red-800 text-white font-medium w-30 p-2 rounded-lg shadow-lg'
                  onClick={() => clearAll()}
                >
                  Limpar lista
                </button>
                :
                ''
            }

            <ul className='flex flex-col gap-4'>
              {filteredItems.map(item => (
                <li key={item.id}>
                  <ItemCard currentView={currentView} itemName={item} deleteFunction={handleDeleteItem} />
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Form */}
        <ItemForm currentView={currentView} handleAddItem={handleAddItem} />
      </div>
    </div>
  )
}

export default App
