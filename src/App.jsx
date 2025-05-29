import { React, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App'
import Titulo from './Titulo.jsx'
import Formulario from './Formulario.jsx'
import Listado from './Listado.jsx'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  )
}
/* honestly no idea what to do with this.
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
      <Titulo titulo="Administración de Pacientes" />
      <div className="container">
        <div className="row">
          <Formulario listaCitas={listaCitas} setLista={setLista} />
          <Listado listaCitas={listaCitas} setLista={setLista} />
        </div>
      </div>
    </>
  )
}
*/
export default App;
