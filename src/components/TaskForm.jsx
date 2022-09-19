import { useState, useContext } from "react"
import { TaskContext } from '../context/TaskContext'

function TaskForm({}) {

  //Se inicia un hook de estado que inicialmente tiene el valor de un string vacío
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const { createTask } = useContext(TaskContext) // Aquí decimos que de todo el TaskContext solo obtenemos createTask y lo almacenamos en ese mismo valor
  
  //Declaramos una función flecha para manejar el onSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description
    });
    setDescription("")
    setTitle("");
  }

  return (
      <div className="max-w-md mx-auto">
        <form onSubmit={ handleSubmit } className="bg-slate-800 p-10 mb-4">
          <h1 className="text-2xl mb-3 font-bold text-white">Crea tu tarea</h1>
          {/* En el evento onchange indicamos que ese valor que se está tipeando se está guardando en la variable de estado title, a través del método setTitle*/}
          <input placeholder="Escribe una tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus className="bg-slate-300 p-3 w-full mb-2"/>
          <br></br><br></br>
          <textarea placeholder="Escribe la descripción de la tarea" onChange={e => setDescription(e.target.value)} value={description} className="bg-slate-300 p-3 w-full mb-2"></textarea>
          <br></br><br></br>
          <button className="bg-indigo-500 px-3 py-1 text-white">
            Agregar
          </button>
        </form>
      </div>
    
  )
}

export default TaskForm