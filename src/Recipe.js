import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title,ingredients,calories,image}) =>{

  return (
    <div  className={style.recipe}>
      <h1 className='title'>{title}</h1>
      <h4>Recipe</h4>
      <hr></hr>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      
      <p>Calories: {calories}</p>
      <img className='img' src={image} alt=''/>

    </div>
  );
}

export default Recipe;