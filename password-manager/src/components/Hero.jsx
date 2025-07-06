import Navbar from "./components/Navbar"
import Manager from "./components/manager"
import Hero from "./components/Hero"

function App() {

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center max-[500px]:my-4 my-8 max-[500px]:text-[10px]">
        <Hero />
        <p className="text-gray-600">Your own password manager</p>
      </div>
      <Manager />
    </>
  )
}

export default App
