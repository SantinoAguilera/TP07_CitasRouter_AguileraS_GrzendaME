import React from 'react'
import { useParams } from 'react-router';
import './MisCitas.css'

export default function MisCitas() {
  const {listaCitas, setLista} = useParams();
  
  return (
    <div>
      <Listado listaCitas={listaCitas} setLista={setLista} />
    </div>
  )
}