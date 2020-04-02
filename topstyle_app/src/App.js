import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Components/Main';
import Navigation from './Components/Navigation';
import ProductState from './Contexts/Product/ProductState';

function App() {
  return (<React.Fragment>
      <Navigation/>
      <Main/>
  </React.Fragment>);
}

export default App;
