import React, { useState, useEffect } from "react";
import Recipe from "../Recipe";
import style from "../Header/header.module.css";

const Header = () => {
  const My_id = "fc4407ee";
  const App_key = "62bf3a45607ac3710b0324dce2aa9a57";

  const [search, setSearch] = useState("");
  const [recipe, setRecipe] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const FetchData = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${My_id}&app_key=${App_key}`
      );
      const data = await response.json();
      setRecipe(data.hits);
    };
    FetchData();
  }, [query]);

  const ChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const SearchButton = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <div className={style.App}>
      <div className={style.header}>
        <form onSubmit={SearchButton} className={style.searchForm}>
          <img src={require("./logo1.png")} className={style.logo} />
          <input
            className={style.searchBar}
            type="text"
            value={search}
            onChange={ChangeSearch}
            placeholder="type for Search"
          />

          <button className={style.searchButton} type="submit">
            Search
          </button>
        </form>
      </div>
      <div className={style.List}>
        {recipe.map((recipeitem) => (
          <Recipe
            key={recipeitem.recipe.label}
            title={recipeitem.recipe.label}
            calories={recipeitem.recipe.calories}
            image={recipeitem.recipe.image}
            ingredients={recipeitem.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
