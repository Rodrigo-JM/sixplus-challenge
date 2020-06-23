import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AllShimpents from './AllShipments'
import SingleShipment from './SingleShipment'

const Routes = () => {
  return (
    <Router>
       <Fragment>
          {/* <Route path="/" component={Navbar} /> */}
          {/* <Route path="/" component={MiniBar} /> */}
          <Route exact path="/" component={AllShimpents} />
          <Route exact path="/:id" component={SingleShipment} />
          {/* <Route path="/:id/update" component={SingleShipmentForm} /> */}
       </Fragment>
     </Router>
  );
};

export default Routes;
