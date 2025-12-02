// Ícones
import { IoCartOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { FaEllipsisV } from "react-icons/fa";

const ItemCard = ({ currentView, itemName, deleteFunction }) => {

  // Pegando o Id do item a ser excluído e enviando para o componente pai (App.js)
  const getItemId = (id) => {
    deleteFunction(id)
  }

  const optionsVisibility = () => {
    const optionsBox = document.querySelector('.options')
    optionsBox.classList.toggle('hidden')
    optionsBox.classList.toggle('flex')
  }

  return (
    <div className="relative">
      {currentView === 'tasks'
        ?
        <div className="bg-(--light-card) p-5 w-70 h-20 rounded-xl shadow-xl border-b-3 border-(--secondary) flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="bg-linear-to-b from-blue-400 to-blue-500 w-2 shrink-0 h-10 rounded-xl"></div>
            <span className="font-semibold text-start break-all">{itemName.text}</span>
          </div>
          <button
            className="bg-(--secondary) w-8 h-8 rounded-full flex items-center justify-center text-white"
            onClick={() => optionsVisibility()}
          >
            <FaEllipsisV />
          </button>
        </div>
        :
        <div className="bg-(--light-card) p-5 w-70 h-20 rounded-xl shadow-xl border-b-3 border-(--primary) flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="bg-gray-100 p-2.5 rounded-full">
            <IoCartOutline size={22} className="text-(--primary)" />
            </div>
            <span className="font-semibold text-start break-all">{itemName.text}</span>
          </div>
          <button
            className="bg-(--primary) w-8 h-8 rounded-full flex items-center justify-center text-white"
            onClick={() => optionsVisibility()}
          >
            <FaEllipsisV />
          </button>
        </div>
      }

      {/* Box dropdown */}
      <div className="options hidden border border-gray-200 bg-(--light-card)/80 absolute mt-1 right-0 p-5 rounded-lg gap-2">
        <button
          className="bg-red-800 p-2 rounded-lg flex items-center justify-center gap-1 text-white"
          onClick={() => getItemId(itemName.id)}
        >
          <MdDelete />
          Excluir
        </button>

        <button
          className="bg-gray-500 p-2 rounded-lg flex items-center justify-center gap-1 text-white"
          // onClick={() => getItemId(itemName.id)}
        >
          <MdEdit />
          Editar
        </button>
      </div>
    </div>        
  )
}

export default ItemCard