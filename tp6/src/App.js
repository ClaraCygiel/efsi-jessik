import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Nosotros from "./components/Nosotros";
import Contacto from "./components/Contacto";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}></Route> 
          <Route path="/home" element={<Home />}></Route>
          <Route path="/quienes-somos" element={<Nosotros />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;