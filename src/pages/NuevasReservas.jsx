import React from 'react'
import { useParams } from 'react-router';
import './NuevasReservas.css'

export default function NuevasReservas() {
  const {listaCitas, setLista} = useParams();

  return (
    <div>
      <Formulario listaCitas={listaCitas} setLista={setLista} />
    </div>
  )
}