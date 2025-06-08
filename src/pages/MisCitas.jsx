import React from 'react'
import './MisCitas.css'

export default function MisCitas(props) {

  return (
    <div>
      <Listado listaCitas={props.listaCitas} setLista={props.setLista} />
    </div>
  )
}