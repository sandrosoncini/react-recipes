import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
 
  const [recipes, setRecipes] = useState([])
  
  useEffect (() => {
    fetch("http://127.0.0.1:8000/api/recipes/", {
      method: "GET",
      headers: {
        'Content-Type' : 'application/json',
      }
    }).then(resp => resp.json())
      .then(resp => setRecipes(resp))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Recipe search</h1>
      </header>
      <div className="layout">
          <input type="text" placeholder="Search.." />
          <div className="select-fields">
            <select required>
              <option value="" disabled selected hidden>Protein type</option>
              <option>Beef</option>
              <option>Chicken</option>
              <option>Turkey</option>
              <option>Fish</option>
              <option>Sea food</option>
              <option>Vegan</option>
            </select>
            <input type="text" placeholder="Nutrition" />
          </div>
          <div className="recipe-layout">
            <div>
              {recipes.map(recipe => {
                return (<h2>{recipe.name}</h2>)
              })}
            </div>
            <div>Recipe Details </div>
          </div>
        </div>
    </div>
  );
}

export default App;
