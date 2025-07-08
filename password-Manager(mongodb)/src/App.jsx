import Navbar from "./components/Navbar"
import Manager from "./components/Manager"
import Hero from "./components/Hero"
import Footer from "./components/Footer"

function App() {

  return (
    <main className="bg-gradient-to-r from-purple-50 to-purple-400 min-h-[100vh]">
      <Navbar />
      <div className="flex flex-col items-center justify-center max-[500px]:my-4 my-8 max-[500px]:text-[10px]">
        <Hero />
        <p className="text-gray-600">Your own password manager</p>
      </div>
      <Manager />
      <Footer />
    </main>
  )
}

export default App
