import "./App.css";
import Footer from "./containers/Footer/Footer";
import Navbar from "./containers/Navbar/Navbar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
