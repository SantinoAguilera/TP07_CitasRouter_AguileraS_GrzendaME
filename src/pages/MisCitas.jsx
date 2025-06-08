import React from 'react'

export default function MisCitas(props) {

  return (
    <div>
      <Listado listaCitas={props.listaCitas} setLista={props.setLista} />
    </div>
  )
}
