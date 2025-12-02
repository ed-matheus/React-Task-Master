import { useEffect, useState } from "react";

// Ícone
import { FaPlus } from "react-icons/fa6";

const ItemForm = ({ currentView, handleAddItem }) => {  
  const getItem = (e) => {
    e.preventDefault();

    // pegando o input
    const itemInput = document.querySelector('.task-input');

    // pegando o valor do input
    const item = document.querySelector('.task-input').value;

    // mensagem de aviso
    const message = document.querySelector('.message');

    if (item === "") {
      itemInput.classList.add('border', 'border-red-700')
      message.classList.remove('hidden')      
    } else {
      handleAddItem(item)
      itemInput.classList.remove('border', 'border-red-700')
      message.classList.add('hidden')   
    }

  }

  return (
    <form action="" className='flex items-center justify-between gap-4 relative'>
      <input
        type="text"
        placeholder='Nova tarefa ou item...'
        className={`task-input p-4 w-60 rounded-full bg-(--light-card) shadow-xl focus:outline-1 ${currentView === 'tasks' ? 'focus:outline-(--secondary)' : 'focus:outline-(--primary)'}`}
      />

      <span className="message hidden absolute -bottom-9 left-15 text-md text-red-700">Vc precisa digitar algo 🤨</span>

      <button
        type="submit"
        onClick={(e) => getItem(e)}
        className={`${currentView === 'tasks' ? 'bg-(--secondary)' : 'bg-(--primary)'} w-10 h-10 rounded-full flex items-center justify-center`}
      >
        <FaPlus size={25} color={'white'} />
      </button>

      {/* <input type="date" />
      
      <select name="" id="">
        <option disabled>Escolha um horário</option>
        <option value="">10:00</option>
        <option value="">11:00</option>
        <option value="">12:00</option>
      </select> */}
    </form>
  )
}

export default ItemForm