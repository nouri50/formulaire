import React from 'react';
import Header from './Header';
import Form from './Form';
import Footer from './Footer';
import { BrowserRouter } from 'react-router-dom';






function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Form />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;





