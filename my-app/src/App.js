import React from 'react';
import { Container } from 'react-bootstrap';
import CardValidator from './components/CardValidator';
import './App.scss';

function App() {
  return (
    <Container className="App">
      <CardValidator/>
    </Container>
  );
}

export default App;
