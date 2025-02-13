import logo from './Images/Chihuahua.jpg'
import './App.css';
import Header from './components/Header.tsx';
import React from "react";
import Pages from './pages.tsx'

function App() {
  return (
    <div className="App">
      <Pages/>
      <Header/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
