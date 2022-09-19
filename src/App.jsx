import TaskList from "./components/TaskList"
import TaskForm from './components/TaskForm'

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        {/* Se está indicando que en la propiedad createTask se pasará la función createTask  y deleteTask en el caso del compoenente TaskList*/}
        <TaskForm/>
        <TaskList/>
      </div>
    </main>
  )
}

export default App
