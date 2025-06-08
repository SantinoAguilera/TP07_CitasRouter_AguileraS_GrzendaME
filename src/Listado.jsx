import Cita from "./Cita.jsx"
import Subtitulo from './Subtitulo.jsx'
import Titulo from './Titulo.jsx'
import './Listado.css'

export default function Listado(props) {

    let cards = props.listaCitas.map((cita, index) => <Cita key={index} nombreMascota={cita.nombreMascota} nombreDueño={cita.nombreDueño} fecha={cita.fecha} hora={cita.hora} sintomasText={cita.sintomasText} listaCitas={props.listaCitas} setLista={props.setLista} index={index} />);
    return (
        <div className="container">
            <Titulo titulo="Sistema de Gestión de Citas" />
            <Subtitulo subtitulo="Administra tus citas" />
            {cards}
        </div>
    )
}