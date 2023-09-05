import Formulario from "./componentes/Formulario"
import ListadoPacientes from "./componentes/ListadoPacientes"
import Header from "./componentes/header"



function App() {
  
  return (    
    <div className="container mx-auto mt-20">
      <Header/>
      <Formulario/>
      <ListadoPacientes/>
    </div>
  )
}

export default App
