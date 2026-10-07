import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Recipe from "./components/Recipe";
import Recipes from "./components/Recipes";
import Home from "./components/Home";
import { Routes, Route } from 'react-router';

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route 
        path='/'
        element={<Home />}
      />
      <Route 
        path='/recipes'
        element={<Recipes />}
      />
      <Route 
        path='/recipes/:id'
        element={<Recipe />}
      />
      <Route 
        path='*'
        element={<h2>404: Not Found</h2>}
      />
    </Routes>
    <Footer />
    </>
  )
}

export default App
