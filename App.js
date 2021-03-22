/* eslint-disable no-const-assign */
import React, { Component } from 'react'
import Playerscored from './Components/Playerscored'
import Playerpoints from './Components/Playerpoints';
import {nanoid} from 'nanoid' 

export default class App extends Component {

    state = {
      shooter: [
        {id: nanoid(4), number:9, points: 21},
        {id: nanoid(4), number:5, points: 15},
        {id: nanoid(4), number:15, points: 17},
        
      ]
    };
onDelete = (playerIndex) => {
  const player = [...this.state.shooter]
  player.splice(playerIndex,1)
this.setState({ shooter: player });
}
   
    renderIndivPoints = () => {
      const shooter = this.state.shooter

      let sortedShooter = [...shooter]
      sortedShooter.sort((a,b) => {
        if (a.number - b.number) {
          return -1
        }
        if (b.number - a.number) {
          return 1
        }
        return 0

      })
     return this.state.shooter.map(
       (player, id) =>{
        return (<tr
           key={id}
           onClick={this.onDelete}>
          <td>{player.id}</td>
          <td>{player.number}</td>
          <td>{player.points}</td>
        </tr>)
      })
    }
onePointMade =(id, e) => {
  const playerIndex = this.state.shooter.find(p => {
    return p.id === id //if true playerIndex holds the index
  });

  const player = {
    ...this.state.shooter[playerIndex]
  }
player.number = e.target.value;
player.points = this.state.shooter.points + 1;
player.id = nanoid(4);

const newShooter = [...this.state.shooter]
newShooter[playerIndex]=player
this.setState({ shooter: newShooter });

};

  onInput = (e) => {
    this.setState({
      shooter: [
     {number: e.target.value, points: 3}
   ] 
 })

  }
onUpdate = () => {
  this.setState({
     shooter: [
    {number: 12, points: 9}
  ] 
})
}
  render() {
    return (
      <div>
        <h4>My app</h4>
        <Playerscored 
          player={this.state.shooter[0].number}
          score={this.state.shooter[0].points}
          klick={this.onUpdate}
          changed={this.onInput}
          onePoint={this.onePointMade}
        />
        <hr/>
        <Playerpoints 
          indivPoints={this.renderIndivPoints()} />
      </div>
    )
  }
}
