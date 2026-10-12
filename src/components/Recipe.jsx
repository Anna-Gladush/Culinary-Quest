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

  const ingredientList = Object.keys(recipe.ingredients).map(ingr => {
    return (
      <div key={ingr}>
        <p style={{textTransform: "capitalize", fontWeight: "bold"}}>{ingr === "all" ? "" : ingr}</p>
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
        <p>{">"}</p>
        <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
      </div>
      <div className="recipe-view">
        <div className="info-ingr">
          <div className="recipe-basic-info">
            <h1 className="recipe-name">{recipe.name}</h1>
            <p className="recipe-description">{recipe.description}</p>
          </div>
          <div className="recipe-ingredients">
            <h2>Ingredients</h2>
            {ingredientList}
          </div>
        </div>
        <div>
          <img src={recipe.img[0]} alt={recipe.name} />
        </div>
      </div>
      <div className="instruction">
        <h2>Instruction: </h2>
        <ul>
          {instructionList}
        </ul>
    </div>
    </section>
  )
}

export default Recipe;