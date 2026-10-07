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
    console.log(foundRecipe)
  }, [id, navigate])

  if (!recipe) return <h2>Loading...</h2>

  const linksList = recipe.category.map(category => {
          return (
            <div key={recipe.category}>
              <p>{">"}</p>
              <Link href={`/recipes/${category}`}>{category}</Link>
            </div>
          )
      })

  const ingredientList = Object.keys(recipe.ingredients).map(ingr => {
    return (
      <>
        {recipe.ingredients[ingr] === "all" ? "" : recipe.ingredients[ingr]}
        <ul key={recipe.ingredients[ingr]}>
          {recipe.ingredients[ingr].map(item => {
            return (
              <li key={item}>{item}</li>
            )
          })}
        </ul>
      </>
    )
  })

  const instructionList = recipe.instruction.map(step => {
    return (
      <li key={step}>{step}</li>
    )
  })



  return (
    <section className="recipe-card"> 
      <div className="breadcrumbs">
        <Link href="/">Home</Link>
        <p>{">"}</p>
        <Link href="/recipes">All</Link>
        {linksList}
      </div>
      <div>
        <div className="recipe-basic-info">
          <h2 className="recipe-name">{recipe.name}</h2>
          <p className="recipe-description">{recipe.description}</p>
        </div>
        <div className="recipe-ingredients">
          <h3>Ingredients</h3>
          {ingredientList}
        </div>
        <div>
          <h3>Instruction: </h3>
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