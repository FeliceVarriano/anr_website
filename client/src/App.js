import React from "react";
import Navbar from "./components/Navbar";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import "./Css/App.css";
import Services from "./components/pages/Services";
import Gallery from "./components/pages/Gallery";
import Profile from "./components/pages/Profile";
import ContactUs from "./components/pages/ContactUs";
import AboutUs from "./components/pages/AboutUs";
import Services4Hour from "./components/pages/Services4Hour";
import Services8Hour from "./components/pages/Services8Hour";
import OurProcess from "./components/pages/OurProcess";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/services4hour" component={Services4Hour} />
        <Route path="/services8hour" component={Services8Hour} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/stream" component={Profile} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/ourprocess" component={OurProcess} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
