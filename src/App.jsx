import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <h1 className="text-6xl">Vite + React</h1>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
