import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/home/Home" ;
import About from "./components/about/About";
import NavBarComponent from "./components/navbar/NavBarComponent";

function App() {
  return (
    <div>
    <BrowserRouter>
     <NavBarComponent/>
       <Routes>
        <Route path = "/homepage" element = {<Home />} />
        <Route path = "/aboutpage" element = {<About />} />
       </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
