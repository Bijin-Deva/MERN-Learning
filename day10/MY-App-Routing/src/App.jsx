import {BrowserRouter,Routes,Route, Link} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App(){
  return(
    <BrowserRouter>
    <nav>
      <Link to="/">Home</Link> &nbsp;&nbsp;
      <Link to="/about">About</Link>  &nbsp;&nbsp;
      <Link to="/contact">Contact</Link>   &nbsp;&nbsp;
    </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;