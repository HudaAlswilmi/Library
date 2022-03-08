<<<<<<< HEAD
import React from "react";
import { Route, Routes } from "react-router-dom";

import Nav from "./component/Nav";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Auth from "./component/Auth";

const App = () => {
  return (
    <>
      <Nav />

      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/auth" element={<Auth/>}/>
      </Routes>


      <Footer />
    </>
  );
};
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
>>>>>>> 89a16d0aa2f94dc6c69ad6e108b6f9271b870fc5

export default App;
