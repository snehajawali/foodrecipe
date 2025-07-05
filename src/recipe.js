import React from 'react';
import './Recipe.css';

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="recipe">
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p><strong>Calories:</strong> {Math.round(calories)}</p>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recipe;
