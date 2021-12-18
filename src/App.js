import "./App.css";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Reviews from "./components/Reviews";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Products />
      <Categories />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
