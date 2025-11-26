import { IoCartOutline } from "react-icons/io5";

const ItemCard = ({ currentView }) => {
  return (
    <>
      {currentView === 'tasks'
        ?
        <div className="bg-(--light-card) p-5 w-70 h-20 rounded-xl shadow-xl border-b-3 border-(--secondary) flex items-center justify-start gap-3">
          <div className="bg-linear-to-b from-blue-400 to-blue-500 w-2 shrink-0 h-10 rounded-xl"></div>
          <span className="font-semibold text-start break-all">Varrer o quarto</span>
        </div>
        :
        <div className="bg-(--light-card) p-5 w-70 h-20 rounded-xl shadow-xl border-b-3 border-(--primary) flex items-center justify-start gap-3">
          <div className="bg-gray-100 p-2.5 rounded-full">
            <IoCartOutline size={22} className="text-(--primary)" />
          </div>
          <span className="font-semibold text-start break-all">3 detergentes</span>
        </div>
      }
    </>        
  )
}

export default ItemCard