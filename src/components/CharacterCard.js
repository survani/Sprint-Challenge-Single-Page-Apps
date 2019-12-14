import React from "react";
import CharacterCardStyle from './styles/CharacterCardStyle';

const CharacterCard = props => {
  return (
    <CharacterCardStyle>
      {/* This Will Display All The Characters Names.. */}
        <h1>{props.name}</h1>

        {/* This Will Display All The Characters Gender & Species.. */}
        <p>{props.gender}</p>
        <p>{props.species}</p>


    </CharacterCardStyle>
  )
}

export default CharacterCard;
