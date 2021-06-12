import React, {useState, useEffect} from 'react';
import './App.css';
import { RecipeList } from './components/recipes-list';

function App() {
 
  const [recipes, setRecipes] = useState([])
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  
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

  const recipeClicked = recipe =>{
    setSelectedRecipe(recipe);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Recipe search</h1>
      </header>
      <div className="layout">
          <input type="text" placeholder="Search.." />
          <div className="select-fields">
            <select required>
              {/* <option disabled selected hidden>Protein type</option> */}
              <option value="beef">Beef</option>
              <option value="chicken">Chicken</option>
              <option value="turkey">Turkey</option>
              <option value="fish">Fish</option>
              <option value="sea-food">Sea food</option>
              <option value="vegan">Vegan</option>
            </select>
            <input type="text" placeholder="Nutrition" />
          </div>
          <div className="recipe-layout">
            <div>
              <RecipeList recipes={recipes} recipeClicked={recipeClicked}/>
            </div>
            <div>Recipe Details </div>
          </div>
        </div>
    </div>
  );
}

export default App;
