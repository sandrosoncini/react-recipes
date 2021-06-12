import React from 'react';

export function RecipeList(props) {
    
    const recipeClicked = recipe =>  {
        props.recipeClicked(recipe)
    }

    return (
        <div> 
            {props.recipes && props.recipes.map(recipe => {
                return (
                    <div key={recipe.id}>
                        <h2 onClick={ evt => recipeClicked(recipe)}>{recipe.name}</h2>
                    </div>
                )
            })}
        </div>
    )
}