import { Link } from "react-router";
const Card = ({recipes}) => {
  return (
    <>
      {recipes.map(recipe => {
        return (
          <Link to={`/recipes/${recipe.id}`} key={recipe.name} className="recipe-card">
            <img src={recipe.img[0]} alt={recipe.name} />
            <h2>{recipe.name}</h2>
            <p>{recipe.description}</p>
          </Link>
        )
      })}
    </> 
  )
}

export default Card