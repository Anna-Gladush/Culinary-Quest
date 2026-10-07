import { Link, useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { getRecipeByID } from "../data";
const Recipe = () => {
    const navigate = useNavigate();
    const [ recipe, setRecipe ] = useState(null);
    const { id } = useParams();
    
  useEffect(() => {
    const foundRecipe = getRecipeByID(Number(id))
    if (!foundRecipe) {
      navigate("/recipes");
      return
    }
    setRecipe(foundRecipe)
  }, [id, navigate])

  if (!recipe) return <h1>Loading...</h1>

  const linksList = recipe.category.map(category => {
          return (
            <div key={category}>
              <p>{">"}</p>
              <Link to={`/recipes/${category}`}>{category}</Link>
            </div>
          )
      })

  const ingredientList = Object.keys(recipe.ingredients).map(ingr => {
    return (
      <div key={ingr}>
        {recipe.ingredients[ingr] === "all" ? "" : ingr}
        <ul>
          {recipe.ingredients[ingr].map(item => {
            return (
              <li key={item}>{item}</li>
            )
          })}
        </ul>
      </div>
    )
  })

  const instructionList = recipe.instruction.map(step => {
    return (
      <li key={step}>{step}</li>
    )
  })

  return (
    <section className="recipe"> 
      <div className="breadcrumbs">
        <Link to="/">Home</Link>
        <p>{">"}</p>
        <Link to="/recipes">All</Link>
        {linksList}
      </div>
      <div>
        <div className="recipe-basic-info">
          <h1 className="recipe-name">{recipe.name}</h1>
          <p className="recipe-description">{recipe.description}</p>
        </div>
        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          {ingredientList}
        </div>
        <div>
          <h2>Instruction: </h2>
          <ol>
            {instructionList}
          </ol>
        </div>
      </div>
      <img src={recipe.img[0]} alt={recipe.name} />
    </section>
  )
}

export default Recipe;