//import { useState } from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import vikalp from './pages/vikalp';
import Tailwind from './pages/Tailwind';
import card from './Component/card';
import Counter from './pages/Counter';
import Project from './pages/Project';
import Effect from './UseEffect/Effect';
import CompA from './Contextapi/CompA';
import CompB from './Contextapi/CompB';
import CompC from './Contextapi/CompC';
function App() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path='/about' Component={About}/>
      <Route path='/vikalp' Component={vikalp}/>
      <Route path='/Tailwind' Component={Tailwind}/>
      <Route path='/card' Component={card}/>
      <Route path='/Counter' Component={Counter}/>
      <Route path='/Project' Component={Project}/>
      <Route path='/Effect' Component={Effect}/>
      <Route path='/CompA' Component={CompA}/>
      <Route path='/CompB' Component={CompB}/>
      <Route path='/CompC' Component={CompC}/>
  


   
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
