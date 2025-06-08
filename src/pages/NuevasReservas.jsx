import React from 'react'
import './NuevasReservas.css'

export default function NuevasReservas(props) {

  return (
    <div>
      <Formulario listaCitas={props.listaCitas} setLista={props.setLista} />
    </div>
  )
}