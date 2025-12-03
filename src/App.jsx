import './App.css'
import { useEffect, useState, useRef } from 'react'

// Componentes
import ListToggle from './components/ListToggle'
import ItemCard from './components/ItemCard'
import ItemForm from './components/ItemForm'

// Ícones
import { IoIosWarning } from "react-icons/io";

function App() {
  const [currentView, setCurrentView] = useState('tasks')
  const [items, setItems] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false)

  const modalRef = useRef(null)

  useEffect(() => {
    // Obtendo a lista do local storage
    const itemsList = localStorage.getItem('tasksList');

    // Condição: caso a lista exista, converte de string JSON para objeto JS e manda pro state
    itemsList ? setItems(JSON.parse(itemsList)) : console.log('não existem dados guardados')
    // console.log(itemsList)

    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        setModalOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
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
    let updatedItems = '';

    if (currentView === "tasks") {
      updatedItems = items.filter(items => items.type !== 'tasks')
    } else {
      updatedItems = items.filter(items => items.type !== 'groceries')
    }


    setItems(updatedItems)
    // console.log(updatedItems)
    localStorage.setItem('tasksList', JSON.stringify(updatedItems))
  }

  const handleModal = (event) => {
    toggleModal()

    if (event.target.value === "sim") {
      clearAll()
      setModalOpen(false)
      console.log('ele apagou')
    } else {
      setModalOpen(false)
      console.log('ele cancelou')
    }
  }

  const toggleModal = () => {
    setModalOpen(prev => !prev)
  }

  return (
    <div className='h-full w-78 flex flex-col items-center justify-center relative'>
      <div>
        <h2 className='font-semibold text-[1.7rem]'>TASK MASTER <span className='text-(--secondary)'>PRO</span></h2>
        <h3 className='text-gray-400 font-light text-lg'>3D-Gamified Edition</h3>
      </div>

      {/* Fundo do modal */}
      {isModalOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-1 transition-opacity duration-300"
          />
      )}

      {/* Modal de aviso antes de apagar tudo */}
      <div
        className={`
          bg-(--light-card) rounded-lg p-6 absolute bottom-80 top-80 z-2 flex flex-col items-center justify-center gap-8 w-75
          ${isModalOpen 
            ? 'opacity-100 translate-y-0' // Estado ATIVO: Visível e sem deslocamento
            : 'opacity-0 -translate-y-2 pointer-events-none' // Estado INATIVO: Invisível, levemente deslocado e sem interação
          }
          transition-all duration-600 ease-out absolute
        `}
        ref={modalRef}
      >
        
        <div className='flex flex-col items-center gap-2'>
          <IoIosWarning size={28} className='text-red-800' />
          <h3 className='font-bold'>Quer mesmo apagar tudo?</h3>
        </div>

        <div className='flex gap-5'>
          <button
            className='bg-red-800 py-2 px-4 rounded-md text-white font-bold w-25'
            value={'sim'}
            onClick={(event) => handleModal(event)}
          >
            Sim
          </button>
          <button
            className='bg-(--secondary) py-2 px-4 rounded-md text-white font-bold w-25'
            value={'cancelar'}
            onClick={(event) => handleModal(event)}
          >
            Cancelar
          </button>
        </div>

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
                  onClick={() => toggleModal()}
                >
                  Limpar lista
                </button>
                :
                ''
            }

            <ul className='flex flex-col gap-4'>
              {filteredItems.map(item => (
                <li key={item.id}>
                  <ItemCard currentView={currentView} itemName={item} deleteFunction={handleDeleteItem} clearAllFunction={clearAll} />
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
