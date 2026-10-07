import { Link } from "react-router";
import { useEffect, useState } from "react";
import { getRecipes } from "../data";
import Card from "./Card";

const Recipes = () => {
  const [allRecipes, setAllRecipes] = useState(null)
  useEffect(() => {
    const foundRecipes = getRecipes()
    setAllRecipes(foundRecipes)
  }, [])
  if (!allRecipes) return <h1>Loading...</h1>
  return (
    <>
      <div className="breadcrumbs">
        <Link to="/">Home</Link>
        <p>{">"}</p>
        <Link to="/recipes">All</Link>
      </div>
      <section className="recipes-all">
        <Card recipes={allRecipes} />
      </section>
    </>

  )
}

export default Recipes;