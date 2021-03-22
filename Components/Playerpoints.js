import React from 'react'
import '../myStyles/Table.css'
import '../myStyles/Input.css'

export default function Playerpoints(props) {
  return (
    <div className="input">
    <table class="table">
  <thead>
    <th>id</th>
    <th>Number</th>
    <th>points</th>
  </thead>
  <tbody>
    {props.indivPoints}
  </tbody>
</table></div>
  )
}
