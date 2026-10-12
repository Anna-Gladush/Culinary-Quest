import { Link } from "react-router";

const NavBar = () => {
  return (
    <nav>
      <div>
        <img src="/logo.png" alt="Logo" width="40px"/>
        <Link to="/" className="logo-heading">Culinary Quest</Link>
        <Link to="/">Home</Link>
        <Link to="/recipes">All Recipes</Link>
      </div>
      <div>
      </div>
    </nav>
  )
}

export default NavBar;