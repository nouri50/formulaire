import React from 'react';
import { Link } from 'react-router-dom';
import '../style/header.css';

const Header = () => {
  return (
    <header className="header-container">
      <h1 className="header-title">Formulaire</h1>
      <nav>
        <ul className="header-nav">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/about">À propos</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};




export default Header;
