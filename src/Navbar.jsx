import { Link } from 'react-router';

export default function Navbar(props) {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to={"/MisCitas/" + props.listaCitas}>Mis Citas</Link>
            <Link to={"/NuevasReservas/" + props.listaCitas + "/" + props.setLista}>Reservar</Link>
        </>
    )
}