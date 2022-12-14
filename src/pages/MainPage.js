import '../App.css';
import DrinkList from '../components/DrinkList';

import Header from '../components/Header';
import LoginModal from '../components/LoginModal';
import SearchBar from '../components/SearchBar';
import TopDrinks from '../components/TopDrinks';
import { Routes, Route, Link } from "react-router-dom";

function MainPage(props) {

  

  return (
    <div className="App">

      
      
      <h1>Drink Companion</h1>

      <SearchBar/>

      <TopDrinks/>

      <LoginModal/>

      <DrinkList currentDrink = { props.currentDrink }/>

    

      
    </div>
  );
}

export default MainPage;
