import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Navbar from "./components/Navbar"


const  App = ()  => {

  return (
   <nav className="bg-black">
    <Navbar/> 
    <Hero />
    <Highlights />
   </nav>
  )
}

export default App
