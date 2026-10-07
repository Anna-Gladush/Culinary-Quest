import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Recipe from "./components/Recipe";
import { Routes, Route } from 'react-router';

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route 
        path='/'
        element={<h1>Index</h1>}
      />
      <Route 
        path='/recipes'
        element={<h1>Recipes</h1>}
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
