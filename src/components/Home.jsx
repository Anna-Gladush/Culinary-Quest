import { useEffect, useState } from "react";
import { getRecipeByID } from "../data";
import Card from "./Card";
const Home = () => {
  const [recipes, setRecipes] = useState(null)
  useEffect(() => {
    const foundRecipes = []
    for (let i = 1; i < 5; i++) {
      const recipe = getRecipeByID(i)
      foundRecipes.push(recipe)
    }
    setRecipes(foundRecipes)
  }, [])

  if (!recipes) return <h1>Loading...</h1>
  return (
    <section className="home">
      <div className="bg-img">
        {/* capslock */}
        <p>Delicious</p>
        <p>Simple</p>
        <p>Made with love</p>
      </div>
      <div>
        <h1>Recipes</h1>
        <p>Recipes for every occasion</p>
      </div>
      <div>
        <Card recipes={recipes} />
      </div>
    </section>
  )
}

export default Home;