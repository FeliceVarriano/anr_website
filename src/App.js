import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Gallery from "./components/pages/Gallery";
import Profile from "./components/pages/Profile";
import ContactUs from "./components/pages/ContactUs";
import AboutUs from "./components/pages/AboutUs";
import Services4Hour from "./components/pages/Services4Hour";
import Services8Hour from "./components/pages/Services8Hour";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/services4hour" component={Services4Hour} />
          <Route path="/services8hour" component={Services8Hour} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/profile" component={Profile} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/aboutus" component={AboutUs} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
