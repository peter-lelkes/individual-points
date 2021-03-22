import React from 'react'
import '../myStyles/Input.css'


export default function Playerscored(props) {
    return (
        <div className="input">
          <h4>Player #{props.player} scored {props.score} points</h4> 
          <button 
          onClick={e => props.onePoint(props.id, e)}
          >1 p</button><br/>
          <input type="text" 
          onChange={props.changed}
          value={props.player}/>
        </div>
    )
}
