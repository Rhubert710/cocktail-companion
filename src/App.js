import './App.css';
import DrinkList from './components/DrinkList';
import Header from './components/Header';


import SearchBar from './components/SearchBar';
import TopDrinks from './components/TopDrinks';

function App() {
  return (
    <div className="App">

      <Header />
      
      <h1>Drink Companion</h1>

      <SearchBar/>

      <TopDrinks/>

      <DrinkList/>



      
    </div>
  );
}

export default App;
