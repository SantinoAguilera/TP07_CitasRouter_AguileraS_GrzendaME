import { Link } from 'react-router';
import './Navbar.css';

export default function Navbar(props) {
    return (
        <div className="nav">
            <Link to="/TP07_CitasRouter_AguileraS_GrzendaME/" className="boton">Home</Link>
            <Link to="/TP07_CitasRouter_AguileraS_GrzendaME/MisCitas" className="boton">Mis Citas</Link>
            <Link to="/TP07_CitasRouter_AguileraS_GrzendaME/NuevasReservas" className="boton">Reservar</Link>
        </div>
    )
}