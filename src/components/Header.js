import React from 'react';
import '../style/header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="title">formulaire</h1>
      <nav>
        <ul className="navList">
          <li className="navItem"><a href="/">Accueil</a></li>
          <li className="navItem"><a href="/about">À propos</a></li>
          <li className="navItem"><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
