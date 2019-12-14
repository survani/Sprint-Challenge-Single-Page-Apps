//Imports from other parties...
import React from 'react';
import { Route } from 'react-router-dom';

//Imports of my components...
import Header from './components/Header.js';
import CharacterList from './components/CharacterList';


export default function App() {
  return (
    <main>
      <Header />
      <CharacterList/> {/* I added this like this to see how my API is being 
      displayed in the homepage of the SPA I will remove and added only to the Route
      to display it at the right time...*/}
      <Route exact path='/characters' component={CharacterList}/>
      

    </main>
  );
}
