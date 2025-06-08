import React from 'react'
import './MisCitas.css'
import Listado from '../Listado.jsx'

export default function MisCitas(props) {

  return (
    <div>
      <Listado listaCitas={props.listaCitas} setLista={props.setLista} />
    </div>
  )
}