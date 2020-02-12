import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
        <Nav logo={logo}/>
        <Main/>
        <aside></aside>
      <Footer/>
    </div>
  );
}

export default App;
