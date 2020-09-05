import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipebox}>
      <h1 className={style.title}>{title}</h1>
      <ul className={style.text}>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <p className={style.calories}>Calories: {Math.trunc(calories)}</p>
      <img className={style.image} src={image} alt="" />
    </div>
  );
};

export default Recipe;
