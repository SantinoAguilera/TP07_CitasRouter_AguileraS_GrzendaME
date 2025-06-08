import { Link } from 'react-router';

export default function Navbar(props) {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to={"/MisCitas"}>Mis Citas</Link>
            <Link to={"/NuevasReservas"}>Reservar</Link>
        </>
    )
}