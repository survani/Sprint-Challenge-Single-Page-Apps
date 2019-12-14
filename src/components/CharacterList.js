import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';


import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  //adding useState! I decided to go with characters and setCharacter because it refrences what I am going to do in the SPA!
  const [characters, setCharacters] = useState([]);
  const [dataIsFiltered, dataIsUpdated] = useState([])

  const searching = allcharacters => {
    dataIsUpdated(allcharacters)
  }

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    // I went here to get all characters from the API: https://rickandmortyapi.com/documentation/#get-all-characters
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then((response) => {
        //Checked Data Here!
        console.log('response: ', response);

        setCharacters(response.data.results)
        //Checked  a specific part of the data I wanted!
        console.log('response.data.results: ', response.data.results);

        dataIsUpdated(response.data.results);
      })

      .catch(error => {
        console.log('error : ', error);
      })
  }, []);

  return (
    <section>
      <Link className='links' to={'/'}>Home</Link>
      <SearchForm searching={searching} character={characters}/>
      {/*Maps over all the data inside response.data.results so I can go over all the things... 
      I also chosed these three elements to show in the front-end*/}
      {/*used dataIsFiltered to make the search work instead of characters*/}
      {dataIsFiltered.map(character => (
        <CharacterCard
          key={character.id}
          name={character.name}
          species={character.species}
          gender={character.gender}
        />
      ))}
    </section>
  );
}
