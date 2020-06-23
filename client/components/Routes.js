import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllShimpents from './AllShipments'


const Routes = () => {
  return (
    <Router>
       <Fragment>
          {/* <Route path="/" component={Navbar} /> */}
          {/* <Route path="/" component={MiniBar} /> */}
          <Route path="/" component={AllShimpents} />
          {/* <Route path="/:id" component={SingleShipment} /> */}
          {/* <Route path="/:id/update" component={SingleShipmentForm} /> */}
       </Fragment>
     </Router>
  );
};

export default Routes;
