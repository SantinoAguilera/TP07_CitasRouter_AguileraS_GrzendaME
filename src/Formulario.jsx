import React, { useState } from 'react'
import Subtitulo from './Subtitulo.jsx'
import Titulo from './Titulo.jsx'
import './Formulario.css'

export default function Formulario(props) {
    const [mascotaText, setMascota] = useState(), [duenoText, setDueno] = useState(), [fechaText, setFecha] = useState(), [horaText, setHora] = useState(), [sintomasText, setSintomas] = useState();

    const agregarCita = (e) => {
        e.preventDefault();
        let cita = { nombreMascota: e.target.mascota.value, nombreDueño: e.target.propietario.value, fecha: e.target.fecha.value, hora: e.target.hora.value, sintomasText: e.target.sintomas.value };
        props.setLista([...props.listaCitas, cita]);
        setMascota("");
        setDueno("");
        setFecha("");
        setHora("");
        setSintomas("");
    }

    return (
        <div className="container">
            <Titulo titulo="Sistema de Gestión de Citas" />
            <Subtitulo subtitulo="Crear mi Cita" />
            <form onSubmit={agregarCita}>
                <label>Nombre Mascota</label>
                <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" onChange={() => setMascota(value)} value={mascotaText}></input>
                <label>Nombre Dueño</label>
                <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" onChange={() => setDueno(value)} value={duenoText}></input>
                <label>Fecha</label>
                <input type="date" name="fecha" className="u-full-width" onChange={() => setFecha(value)} value={fechaText}></input>
                <label>Hora</label>
                <input type="time" name="hora" className="u-full-width" onChange={() => setHora(value)} value={horaText}></input>
                <label>Sintomas</label>
                <textarea name="sintomas" className="u-full-width" onChange={() => setSintomas(value)} value={sintomasText}></textarea>
                <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
            </form>
        </div>
    )
}
