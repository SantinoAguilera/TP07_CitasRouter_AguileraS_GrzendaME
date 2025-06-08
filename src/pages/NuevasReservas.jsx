import React from 'react'
import './NuevasReservas.css'
import Formulario from '../Formulario.jsx'

export default function NuevasReservas(props) {

  return (
    <div>
      <Formulario listaCitas={props.listaCitas} setLista={props.setLista} />
    </div>
  )
}