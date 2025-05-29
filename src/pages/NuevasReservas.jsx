import React from 'react'
import { useParams } from 'react-router';

export default function NuevasReservas() {
  const {listaCitas, setLista} = useParams();

  return (
    <div>
      <Formulario listaCitas={listaCitas} setLista={setLista} />
    </div>
  )
}
