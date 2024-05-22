import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Model from "./components/Model"
import Navbar from "./components/Navbar"


const  App = ()  => {

  return (
   <nav className="bg-black">
    <Navbar/> 
    <Hero />
    <Highlights />
    <Model />
   </nav>
  )
}

export default App
