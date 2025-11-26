const ListToggle = ({ currentView, setCurrentView }) => {
  const handleToggle = (view) => {
    setCurrentView(view)
    // console.log(currentView)
  }

  return (
    <div className="flex items-center justify-between bg-(--light-card) text-gray-400 rounded-full shadow-lg p-1.5">
      <button
        type="button"
        className={`
          ${currentView === 'tasks'
            ? 'py-3 px-5 bg-(--secondary) rounded-full text-white'
            : 'py-3 px-5 rounded-full'
          }
        `}
        onClick={() => handleToggle('tasks')}
      >
        <span className="text-sm">TAREFAS</span>
      </button>

      <button
        type="button"
        className={`
          ${currentView === 'groceries'
            ? 'py-3 px-5 bg-(--primary) rounded-full text-white'
            : 'py-3 px-5 rounded-full'
          }
        `}
        onClick={() => handleToggle('groceries')}
      >
        <span className="text-sm">COMPRAS</span>
      </button>
    </div>
  )
}

export default ListToggle