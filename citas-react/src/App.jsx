import { useState } from 'react'
import Formulario from "./componentes/Formulario"
import ListadoPacientes from "./componentes/ListadoPacientes"
import Header from "./componentes/Header"



function App() {
  
  const [pacientes, setPacientes] = useState([])
  const[paciente, setPaciente] = useState({})

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)

    setPacientes(pacientesActualizados)
  }

  return (    
    <div className="container mx-auto mt-20">
      <Header/>

      <div className="mt-14 md:flex">
        <Formulario
        
          pacientes={pacientes}  
          setPacientes={setPacientes}
          paciente = {paciente}
          setPaciente={setPaciente}
          
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
      
    </div>
  )
}

export default App
