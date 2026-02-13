import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero"
import fondo from "./assets/fondo.png"
function App() {

  const bgImagen = {
    backgroundImage: `url(${fondo})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundSize: "Cover",
    position:"relative"
    

  }
  
  return (
    <div style={bgImagen} className="overflow-hidden min-h-screen">
    <Navbar/>
    <Hero/>

    </div>
    
    
   
  )
}

export default App
