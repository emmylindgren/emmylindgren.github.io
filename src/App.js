import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Occento from './components/pages/Occento';
import GoToTop from './components/GoToTop';
import Thirty from './components/pages/Thirty';
import GreetUp from './components/pages/GreetUp';
import LabPlant from './components/pages/LabPlant';


function App() {
  return (
    <>
    <Router>
      <GoToTop/>
      <Navbar/>
      <Routes>
        <Route path ='/' element= {<Home/>}/>
        <Route path ='/GreetUp' element= {<GreetUp/>}/>
        <Route path ='/Occento' element= {<Occento/>}/>
        <Route path ='/Thirty' element= {<Thirty/>}/>
        <Route path = '/PlantInfo' element ={<LabPlant/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
