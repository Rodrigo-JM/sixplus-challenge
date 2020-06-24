import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AllShipments from "./AllShipments";
import SingleShipment from "./SingleShipment";
import Cover from "./Cover";
import Navbar from "./NavBar";
import MiniBar from "./MiniBar";
import Footer from "./Footer";

const Routes = () => {
  return (
    <Router>
      <div className="page">
        <Route path="/" component={Navbar} />
        <Route path="/" component={Cover} />
        <Route path="/" component={MiniBar} />
        <Route exact path="/" component={AllShipments} />
        <Route exact path="/:id" component={SingleShipment} />
        <Route path="/" component={Footer} />
      </div>
    </Router>
  );
};

export default Routes;
