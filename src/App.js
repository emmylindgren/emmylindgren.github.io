import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Occento from './components/pages/Occento';
import GoToTop from './components/GoToTop';
import Fridge from './components/pages/Fridge';
import Thirty from './components/pages/Thirty';
import GreetUp from './components/pages/GreetUp';


function App() {
  /* <Navbar/>  låg innan mellan router och routes. Då hamnade den på alla sidor!*/
  return (
    <>
    <Router>
      <GoToTop/>
      <Navbar/>
      <Routes>
        <Route path ='/' element= {<Home/>}/>
        <Route path ='/GreetUp' element= {<GreetUp/>}/>
        <Route path ='/Occento' element= {<Occento/>}/>
        <Route path ='/Fridge' element= {<Fridge/>}/>
        <Route path ='/Thirty' element= {<Thirty/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
