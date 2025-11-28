// Ícones
import { IoCartOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const ItemCard = ({ currentView, itemName, deleteFunction }) => {

  // Pegando o Id do item a ser excluído e enviando para o componente pai (App.js)
  const getItemId = (id) => {
    deleteFunction(id)
  }

  return (
    <>
      {currentView === 'tasks'
        ?
        <div className="bg-(--light-card) p-5 w-70 h-20 rounded-xl shadow-xl border-b-3 border-(--secondary) flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="bg-linear-to-b from-blue-400 to-blue-500 w-2 shrink-0 h-10 rounded-xl"></div>
            <span className="font-semibold text-start break-all">{itemName.text}</span>
          </div>
          <button
            className="bg-red-900 w-8 h-8 rounded-full flex items-center justify-center text-white"
            onClick={() => getItemId(itemName.id)}
          >
            <MdDelete />
          </button>
          {/* <button
            className="bg-(--secondary) w-7 h-7 rounded-full flex items-center justify-center text-white"
          >
            <IoIosArrowDown />
          </button> */}
        </div>
        :
        <div className="bg-(--light-card) p-5 w-70 h-20 rounded-xl shadow-xl border-b-3 border-(--primary) flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="bg-gray-100 p-2.5 rounded-full">
            <IoCartOutline size={22} className="text-(--primary)" />
            </div>
            <span className="font-semibold text-start break-all">{itemName.text}</span>
          </div>
          {/* <button
            className="bg-(--primary) w-7 h-7 rounded-full flex items-center justify-center text-white"
          >
            <IoIosArrowDown />
          </button> */}
          <button
            className="bg-red-900 w-8 h-8 rounded-full flex items-center justify-center text-white"
            onClick={() => getItemId(itemName.id)}
          >
            <MdDelete />
          </button>
        </div>
      }
    </>        
  )
}

export default ItemCard