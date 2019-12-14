import React from 'react';
import RickWelcome from './styles/WelcomePageStyle';
import { Link } from 'react-router-dom';

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <RickWelcome
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <Link className='links'to={'/characters'}>See Characters</Link>
      </header>
    </section>
  );
}
