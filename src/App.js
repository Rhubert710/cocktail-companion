import './App.css';


import SearchBar from './components/SearchBar';
import TopDrinks from './components/TopDrinks';

function App() {
  return (
    <div className="App">
      
      <h1>Drink Companion</h1>

      <SearchBar/>

      <TopDrinks/>

      
    </div>
  );
}

export default App;
