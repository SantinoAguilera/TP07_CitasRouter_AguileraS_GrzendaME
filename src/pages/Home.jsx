import React from 'react'
import { Link } from 'react-router';
import './Home.css'
import Titulo from '../Titulo'

export default function Home() {
  return (
    <div className='Home'>
      <Titulo titulo="Sistema de Gestión de Citas" />
      <div className='HomeBody'>
        <Link to={"/TP07_CitasRouter_AguileraS_GrzendaME/MisCitas"} className='LinkBox'>Mis Citas</Link>
        <Link to={"/TP07_CitasRouter_AguileraS_GrzendaME/NuevasReservas"} className='LinkBox'>Reservar</Link>
      </div>
    </div>
  )
}