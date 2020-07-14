import React from 'react'
import Card from "../card/Card";


const CardList = ({robots}) => {
  return (
    <div className='card-list'>
      {robots.map((robot, index) => {
        return <Card key={index} id={robot.id} name={robot.name} username={robot.username} email={robot.email} />
      })}
    </div>
  )
}

export default CardList
