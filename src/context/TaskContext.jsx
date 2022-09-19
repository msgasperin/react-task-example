// En react, una palabra reservada es children, con ella indicas que dentro de ese componente vienen más componentes hijos
// createContext es un componente "global" de react para hacer uso de estados en cualquiera de los componentes hijos
import { useState, useEffect, createContext } from "react";
import { tasks as data } from "../task";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  //Se inicia un hook para declarar una variable denomindada tasks
  const [tasks, setTasks] = useState([]);

  //Se inicia un hook useEffect para determinar lo que se hará cuando inicie el componente, en este caso ejecutar la función setTasks del useState
  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    // los puntos indican que copiará todos los elementos actuales del arreglo tasks y despues de la coma se agregará un nuevo elemento
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    //Por cada tarea que se va recorriendo, compara si es igual el id de la tarea con el taskId pasado y con el setTask asignamos ese nuevo arreglo
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  return (
    // En el value está pasando un parámetro de tipo objeto
    <TaskContext.Provider
      value={{
        tasks: tasks, // envía lo que almacena el estado task useState
        deleteTask: deleteTask, //Envía la función deleteTask
        createTask, //Envía la función createTask, al poner solo createTask sin los dos puntos equivale a lo mismo porque se entiendo que es la misma palábra la que iría despues
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
