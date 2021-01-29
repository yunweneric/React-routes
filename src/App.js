import "./App.css";
import Nav from "./components/nav";
import Footer from "./components/footer";
import About from "./components/about"
import Home from "./components/home"
import Contact from "./components/contact"
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Route exact path = '/' component = {Home}></Route>
        <Route  path = '/home' component = {Home}></Route>
        <Route  path = '/about' component = {About}></Route>
        <Route  path = '/contact' component = {Contact}></Route>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
