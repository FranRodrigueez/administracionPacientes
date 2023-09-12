import { useState, useEffect } from 'react'
import Formulario from "./componentes/Formulario"
import ListadoPacientes from "./componentes/ListadoPacientes"
import Header from "./componentes/Header"



function App() {
  
  //Iniciamos la lista de pacientes guardada en el LS y si no, array vacío
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes' ?? [])))

  //Variable para guardar algún paciente en particular como objeto
  const[paciente, setPaciente] = useState({})

  //Convertimos el arreglo en string para guardar los pacientes en local storage
  useEffect(() =>{
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])


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
