import "./App.css";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Reviews from "./components/Reviews";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Products />
      <Categories />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
