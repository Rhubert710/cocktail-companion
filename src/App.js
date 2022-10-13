import './App.css';
import DrinkList from './components/DrinkList';

import Header from './components/Header';
import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import MainPage from './pages/MainPage';
import DrinkPage from './pages/DrinkPage';

function App() {

  const [user, setUser] = useState();
  const [currentDrink, setCurrentDrink] = useState();

  return (
    <div className="App">

        <Header user = { user } setUser = { setUser }/>

        <Routes>
          <Route path="/" element={<MainPage user = { user} currentDrink = { currentDrink}/>} setCurrentDrink = { setCurrentDrink }/>
          <Route path="/drink" element={<DrinkPage user = { user} currentDrink = { currentDrink}/>} />
        </Routes>     

    </div>
  );
}

export default App;
