import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Project from "./components/project";

import "./App.css";

import Prompt from "./components/prompt";
import Links from "./components/links";
import { PathProvider } from "./components/pathContext";

const App = () => {
  return (
    <>
      <Router>
        <PathProvider>
          <div className="container">
            <Prompt />
            <div className="box-container">
              <div className="box">
                <Links />
                <div className="actual-content">
                  <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/projects" exact component={Project} />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </PathProvider>
      </Router>
    </>
  );
};

export default App;
