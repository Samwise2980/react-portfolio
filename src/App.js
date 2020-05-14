import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import Nav from "./components/Navbar"
import Footer from "./components/Footer"


const App = () => {
  document.title = "User Directory";
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/react-portfolio/home">
            <Home />
          </Route>
          <Route exact path="/react-portfolio/">
            <Home />
          </Route>
          <Route exact path="/react-portfolio/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/react-portfolio/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
