import "./App.css";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import Detail from "./components/Detail/Detail";
import About from "./components/About/About";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const {pathname} = useLocation();

  return (
    <div className="App">
      {pathname !== '/' && <Nav/>}
        <Routes>
          <Route path="/home" element={<Cards />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </div>
  );
}

export default App;
