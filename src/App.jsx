import { Routes, Route} from 'react-router'
import { React, useEffect, useState } from 'react'
import './App.css'
import Navbar from './Navbar';
import Home from './pages/Home';
import MisCitas from './pages/MisCitas';
import NuevasReservas from './pages/NuevasReservas';

function App() {
  const [listaCitas, setLista] = useState(JSON.parse(localStorage.getItem("lista")) || []);

  useEffect(() => {
    localStorage.setItem("lista", JSON.stringify(listaCitas));
  });

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"></link>
      <link href="https://fonts.googleapis.com/css?family=Staatliches" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"></link>
      <Navbar listaCitas={listaCitas} setLista={setLista}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MisCitas/:listaCitas/:setLista" element={<MisCitas />} />
        <Route path="/NuevasReservas/:listaCitas/:setLista" element={<NuevasReservas />} />
      </Routes>
    </>
  )
}
/* honestly no idea what to do with this.
function App() {
      <Titulo titulo="Administración de Pacientes" />
      <div className="container">
        <div className="row">
          <Formulario listaCitas={listaCitas} setLista={setLista} />
          <Listado listaCitas={listaCitas} setLista={setLista} />
        </div>
      </div>
  )
}
*/
export default App;
