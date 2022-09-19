import TaskCard from './TaskCard'
import { useContext } from "react"
import { TaskContext } from '../context/TaskContext'

// el as data se utiliza para renombrar como en mysql
function TaskList() {

  const { tasks } = new useContext(TaskContext)
  
  //validamos si el arreglo viene vacío para mandar un mensaje
  if(tasks.length === 0){
    return <h1 className='text-4xl text-white font-bold text-center'>No hay tareas aún</h1>
  }

  return (
    <div className='grid grid-cols-4 gap-2'>
      {/*Recorremos el arreglo tasks con map, indicando en una función flecha que con el parámetro task accederemos a las propiedades del arreglo */}
      {tasks.map((task) => (       
        <TaskCard key={task.id} task={task}/>
      ))}
    </div>
  )
}

export default TaskList