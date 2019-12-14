//Imports from other parties...
import React from 'react';
import { Route } from 'react-router-dom';

//Imports of my components...
import Header from './components/Header.js';
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';



export default function App() {
  return (
      <main>
      <Header />
      <Route exact path='/' component={WelcomePage}/>
      <Route path='/characters' component={CharacterList}/>
    </main>
  );
}
