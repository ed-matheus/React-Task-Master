import { IoCartOutline } from "react-icons/io5";

const ItemCard = ({ currentView }) => {
  return (
    <>
      {currentView === 'tasks'
        ?
        <div className="bg-(--light-card) p-5 w-70 h-30 rounded-xl shadow-xl flex items-center justify-start gap-3">
          <div className="bg-linear-to-b from-blue-400 to-blue-500 w-3 shrink-0 h-full rounded-xl"></div>
          <span className="font-semibold text-start break-all">Varrer o quarto</span>
        </div>
        :
        <div className="bg-(--light-card) p-5 w-70 h-30 rounded-xl shadow-xl border-b-3 border-(--primary) flex items-center justify-start gap-3">
          <div className="bg-gray-100 p-2.5 rounded-full">
            <IoCartOutline size={22} className="text-(--secondary)" />
          </div>
          <span className="font-semibold text-start break-all">3 detergentes</span>
        </div>
        
      }
    </>        
  )
}

export default ItemCard