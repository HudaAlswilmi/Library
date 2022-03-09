import React from 'react';
import Navbar from './component/Navbar';
import Home from './component/Home'
import  {Route ,Routes} from "react-router-dom"
import Books from './component/Books';
import Dbook from './component/Dbook';

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <Navbar/>
      <Routes>
      <Route
        exact
        path="/" element={<Home/>}/>
    
    <Route
        exact
        path="/Books" element={<Books/>}/>

<Route
        exact
        path="/Dbook/:_id" element={<Dbook/>}/>
    </Routes>
    </div>
  );
}

export default App;
