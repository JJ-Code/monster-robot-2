import React from 'react';


const Card = ({ id, name, username, email }) => {

  return (
    <div className='card-container bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5'>
      <img alt="monster" src={`https://robohash.org/${id}?set=set3&size=200x200`} />
      <h2>{name}</h2>
      {/* <p>{username}</p> */}
      <p>{email}</p>

    </div>
  )
}

export default Card;