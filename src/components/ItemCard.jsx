// Hooks
import { useState, useEffect, useRef } from "react";

// Ícones
import { IoCartOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { FaEllipsisV } from "react-icons/fa";

const ItemCard = ({ currentView, itemName, deleteFunction }) => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const menuRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [])

  // Pegando o Id do item a ser excluído e enviando para o componente pai (App.js)
  const getItemId = (id) => {
    deleteFunction(id)
  }

  return (
    <div className="relative">
      {currentView === 'tasks'
        ?
        <div className="bg-(--light-card) p-5 w-70 h-20 rounded-xl shadow-xl border-b-3 border-(--secondary) flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="bg-linear-to-b from-blue-400 to-blue-500 w-2 shrink-0 h-10 rounded-xl"></div>
            <span className="font-semibold text-start break-all w-42">{itemName.text}</span>
          </div>
          <button
            className="bg-(--secondary) w-8 h-8 rounded-full flex items-center justify-center text-white"
            onClick={() => setMenuOpen(prev => !prev)}
            ref={buttonRef}
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
            onClick={() => setMenuOpen(prev => !prev)}
            ref={buttonRef}
          >
            <FaEllipsisV />
          </button>
        </div>
      }

      {/* Box dropdown */}
      <div
        className={`
          opções-comuns absolute right-0 z-1 flex border border-gray-300 bg-(--light-card)/80 mt-1 p-5 rounded-lg gap-2 w-50
          ${isMenuOpen 
            ? 'opacity-100 translate-y-0' // Estado ATIVO: Visível e sem deslocamento
            : 'opacity-0 -translate-y-2 pointer-events-none' // Estado INATIVO: Invisível, levemente deslocado e sem interação
          }
          transition-all duration-200 ease-out
        `}
        ref={menuRef}
      >
        <button
          className="bg-red-800 p-2 rounded-lg flex items-center justify-center gap-1 text-white"
          onClick={() => getItemId(itemName.id)}
        >
          <MdDelete />
          <p className="text-sm">Excluir</p>
        </button>

        <button
          className="bg-gray-500 p-2 rounded-lg flex items-center justify-center gap-1 text-white"
          // onClick={() => getItemId(itemName.id)}
        >
          <MdEdit />
          <p className="text-sm">Editar</p>
        </button>
      </div>
    </div>        
  )
}

export default ItemCard