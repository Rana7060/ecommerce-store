import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home className="p-5 mt-5 bg-light" />
    </div>
  );
}

export default App;
