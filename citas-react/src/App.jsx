import { useState } from 'react'
import Formulario from "./componentes/Formulario"
import ListadoPacientes from "./componentes/ListadoPacientes"
import Header from "./componentes/Header"



function App() {
  
  const [pacientes, setPacientes] = useState([])

  return (    
    <div className="container mx-auto mt-20">
      <Header/>

      <div className="mt-14 md:flex">
        <Formulario
        
          pacientes={pacientes}  
          setPacientes={setPacientes}
          
        />
        <ListadoPacientes
          pacientes={pacientes}
        />
      </div>
      
    </div>
  )
}

export default App
