import React, { useState } from 'react';
import "../style/form.css";


const Form = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [adresse, setAdresse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form data here
    console.log("Nom :", nom);
    console.log("Prénom :", prenom);
    console.log("Email :", email);
    console.log("Téléphone :", telephone);
    console.log("Adresse :", adresse);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nom:
          <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
        </label>
        <br />
        <label>
          Prénom:
          <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Téléphone:
          <input type="tel" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
        </label>
        <br />
        <label>
          Adresse:
          <textarea value={adresse} onChange={(e) => setAdresse(e.target.value)}></textarea>
        </label>
        <br />
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default Form;
