import React from 'react'
import { Link } from 'react-router';
import './Home.css'
import Titulo from '../Titulo'

export default function Home() {
  return (
    <div className='Home'>
      <Titulo titulo="Sistema de Gestión de Citas" />
      <div className='HomeBody'>
        <Link to={"/MisCitas"}>Mis Citas</Link>
        <Link to={"/NuevasReservas"}>Reservar</Link>
      </div>
    </div>
  )
}