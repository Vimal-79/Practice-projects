import { useState, useRef, useEffect } from 'react'
import { stringify, v4 as uuidv4 } from 'uuid';
import './App.css'

function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setShowFinished] = useState(false)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = localStorage.getItem("todos")
      setTodos(JSON.parse(todos))
    }
  }, [])

  const handelTime = () => {
    const time = new Date()
    let hour = time.getHours()
    if (hour > 12) {
      hour = hour - 12;
    }
    let min = time.getMinutes()
    if (min < 10) {
      min = `0${min}`
    }
    return `${hour} : ${min}`
  }

  const handelEdit = (e, id) => {

    let t = todos.filter(item => {
      return item.id === id
    })
    setTodo(t[0].todo)

    setTodos(todos.filter(item => {
      return item.id !== id
    }))
  }

  const handeldelete = (e, id) => {

    let newTodos = todos.filter(item => {
      return item.id !== id
    })

    setTodos(newTodos)
  }

  const handelChange = (e) => {
    setTodo(e.target.value)
  }

  const handleAdd = () => {
    setTodos([...todos, { todo, isCompleted: false, id: uuidv4(), time: handelTime() }])
    setTodo("")
  }

  const handelCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
  }


  const toggleFinished = (e) => {
    setShowFinished(!showFinished)
  }

  return (
    <>
      <div className="my-5 mx-auto min-h-[70vh] max-[900px]:w-[95vw] max-lg:w-[80vw] w-[70vw] border-[5px] border-gray-800 bg-emerald-400 p-6 flex flex-col items-center gap-6 rounded-2xl ">
        <div className="top text-center py-2 font-bold text-[60px] w-full text-white bg-emerald-600 border-b-2 rounded-t-lg border-black max-md:text-[40px]">Todo App</div>
        <div className="task_container buttons w-[70%] flex flex-col gap-6 max-sm:w-[90%]">
          <div className=" flex justify-center items-center">
            <button onClick={toggleFinished} className={showFinished ? " text-white bg-green-700 hover:bg-green-800 w-fit px-2 py-1 rounded-md" : "bg-emerald-200 hover:bg-emerald-300 w-fit px-2 py-1 rounded-md max-sm:text-[10px]"} >Show Finished</button>
          </div>
          <div className="new_tasks flex justify-between max-md:flex-col">
            <h2 className="text-[25px] font-bold text-white" >Tasks</h2>
            <div className="flex gap-2 w-full justify-end max-md:justify-center max-[500px]:flex-col">
              <input onChange={handelChange} value={todo} className="bg-emerald-100 rounded-md px-2 text-emerald-950 min-w-[50%] max-[500px]:placeholder:text-[13px] placeholder:text-gray-500" type="text" placeholder="New Task . . ." />
              <button onClick={handleAdd} disabled={todo.length < 3} className="flex justify-center items-center gap-1 text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-1 rounded-md box-border max-sm:text-[10px]" > <img className="max-sm:w-2" src="./src/assets/add.svg" alt="+" />Add Task</button>
            </div>
          </div>
          <div className="all_tasks flex flex-col gap-3 ">

            {todos.length === 0 && <div className="text-[20px] text-gray-300 font-bold capitalize" >No Todos to display</div>}

            {todos.map(item => {
              { localStorage.setItem("todos", JSON.stringify(todos)) }
              return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex justify-between px-3 py-4 bg-medium-teal rounded-md shadow-md">
                <div className="min-[900px]:w-[40%] min-[900px]:pr-2 flex items-center gap-3 break-normal text-[10px] min-[900px]:text-[14px] min-[1100px]:text-[18px] max-sm:w-[calc(100%_-_50px)]">
                  <input className="cursor-pointer" name={item.id} checked={item.isCompleted} onChange={handelCheckbox} type="checkbox" />
                  <h2 className="text-white font-bold capitalize" > {item.todo}</h2>
                </div>
                <p className="text-sm text-emerald-100 cursor-pointer flex gap-1 items-center max-[900px]:hidden"> <img src="./src/assets/clock.svg" alt="" />{item.time}</p>
                <div className="options flex items-center gap-1 w-[55px] max-sm:w-10">
                  <button className="cursor-pointer" onClick={(e) => { handelEdit(e, item.id) }} ><img src="./src/assets/edit.svg" alt="" /></button>
                  <button className="cursor-pointer" onClick={(e) => { handeldelete(e, item.id) }} ><img src="./src/assets/delete.svg" alt="" /></button>

                </div>
              </div>
            })}


          </div>
        </div>
      </div>
    </>
  )
}

export default App