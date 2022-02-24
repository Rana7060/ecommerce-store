import "./App.css";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import SignIn from "./components/SignIn";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App organize">
      <Navbar />
      <br />
      <br />

      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <br />
      <Footer className="item-3" />
    </div>
  );
}

export default App;
