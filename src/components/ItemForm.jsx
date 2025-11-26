import { FaPlus } from "react-icons/fa6";

const ItemForm = ({ currentView }) => {
  const getItem = (e) => {
    e.preventDefault();

    const itemField = document.querySelector('.task-input');
    const item = document.querySelector('.task-input').value;
    console.log(item);

    itemField.value = '';
  }

  return (
    <form action="" className='flex items-center justify-between gap-4'>
      <input
        type="text"
        placeholder='Nova tarefa ou item...'
        className={`task-input p-4 w-60 rounded-full bg-(--light-card) shadow-xl focus:outline-1 ${currentView === 'tasks' ? 'focus:outline-(--secondary)' : 'focus:outline-(--primary)'}`}
      />

      <button type="submit" onClick={(e) => getItem(e)} className={`${currentView === 'tasks' ? 'bg-(--secondary)' : 'bg-(--primary)'} w-10 h-10 rounded-full flex items-center justify-center`}>
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