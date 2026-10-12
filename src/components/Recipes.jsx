import { Link } from "react-router";
import { useEffect, useState } from "react";
import { getRecipes } from "../data";
import Card from "./Card";

const Recipes = () => {
  const [allRecipes, setAllRecipes] = useState(null);

  useEffect(() => {
    const foundRecipes = getRecipes();
    setAllRecipes(foundRecipes);
  }, [])

  if (!allRecipes) return <h1>Loading...</h1>
  return (
    <>      
    <section className="recipes-all">
      <div className="breadcrumbs">
        <Link to="/">Home</Link>
        <p>{">"}</p>
        <Link to="/recipes">All</Link>
      </div>
      <div className="home-cards">
          <Card recipes={allRecipes} />
      </div>
    </section>
    </>

  )
}

export default Recipes;