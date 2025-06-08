import { Link } from 'react-router';
import './Navbar.css';

export default function Navbar(props) {
    return (
        <div className="nav">
            <Link to="/" className="boton">Home</Link>
            <Link to="/MisCitas" className="boton">Mis Citas</Link>
            <Link to="/NuevasReservas" className="boton">Reservar</Link>
        </div>
    )
}