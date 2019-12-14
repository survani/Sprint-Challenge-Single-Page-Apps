import React from "react";

const CharacterCard = props => {
  return (
    <div>

      {/* This Will Display All The Characters Names.. */}
      <h1>{props.name}</h1>

      {/* This Will Display All The Characters Gender & Species.. */}
      <p>{props.gender}</p>
      <p>{props.species}</p>
      
    </div>
  )
}

export default CharacterCard;
