const ListToggle = (currentView, setCurrentView) => {


  return (
    <div className="flex items-center justify-between bg-(--light-card) text-(--text-gr) rounded-full shadow-lg p-1.5">
      <button className="py-3 px-5 bg-(--secondary) rounded-full text-white" onClick={setCurrentView('tasks')}>
        <span className="text-sm">TAREFAS</span>
      </button>

      <button className="py-3 px-5 rounded-full">
        <span className="text-sm">COMPRAS</span>
      </button>
    </div>
  )
}

export default ListToggle