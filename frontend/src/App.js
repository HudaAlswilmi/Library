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

export default App;
