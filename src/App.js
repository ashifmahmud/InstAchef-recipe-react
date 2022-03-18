import logo from './logo.png';
import './App.css';
import React,{useEffect,useState} from "react";
import Recipe from "./Recipe";



const App = () =>{

const[recipes,setRecipe] = useState([]);
const[search,setSearch] = useState('');
const [query, setQuery] = useState('chicken');

const APP_ID = '2279a779';
const APP_KEY = '4fc042defde9d20babf24fc8bd6515f0';
const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;



useEffect(() => {
  getRecipes();
},[query]);


  const getRecipes = async () =>{
  const response = await fetch(exampleReq);
  const data = await response.json();
  setRecipe(data.hits);
  console.log(data.hits);
  
};

  const updateSearch = e =>{
    setSearch(e.target.value);
  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');

  }

  return(
    
    <div className='App'>
      <div className='logo-container'>
      <img className='logo' src={logo} ></img>
      </div>
      <form onSubmit = {getSearch} className = "search-form"> 
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button">Search</button>
      </form>
      <div className = 'recipes'>
      {recipes.map(recipe =>(
        <Recipe
        key = {recipe.recipe.label} 
        title = {recipe.recipe.label}
        ingredients = {recipe.recipe.ingredients}
        calories = {recipe.recipe.calories}
        image = {recipe.recipe.image}
        
        />
      ))}
      </div>
    </div>
  );
};

export default App;
