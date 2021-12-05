import React from "react";
//Components and pages
import Home from "./pages/Home";
import Searched from "./pages/Searched";
import Nav from "./components/Nav";
//Styles
import GlobalStyles from "./components/GlobalStyles";
//Router
import { Route } from "react-router-dom";

function App1() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Searched/>
      <Route path={["/game/:id", "/"]}>
        <Home />
       
      </Route>
    </div>
  );
}

export default App1;



