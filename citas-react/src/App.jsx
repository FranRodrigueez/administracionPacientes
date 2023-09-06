import Formulario from "./componentes/Formulario"
import ListadoPacientes from "./componentes/ListadoPacientes"
import Header from "./componentes/Header"



function App() {
  
  return (    
    <div className="container mx-auto mt-20">
      <Header/>

      <div className="mt-14 md:flex">
        <Formulario/>
        <ListadoPacientes/>
      </div>
      
    </div>
  )
}

export default App
