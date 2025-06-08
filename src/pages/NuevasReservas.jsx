import React from 'react'

export default function NuevasReservas(props) {

  return (
    <div>
      <Formulario listaCitas={props.listaCitas} setLista={props.setLista} />
    </div>
  )
}
