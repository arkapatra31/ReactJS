import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="flex flex-col justify-between h-screen">
          <Navbar />
          <main>Content</main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
