import React, { useState, Fragment } from "react";
import Pagination from "./Pagination";
import SearchShipments from "./SearchShipments";
import OrderShipments from "./OrderShipments";
import StatusLegend from "./StatusLegend";
import { CSSTransition } from "react-transition-group";

import {IconButton} from '@material-ui/core'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

//I usually call minibar the component that sits on top of grids and holds navigation tools like pagination, filters, and ordering

//This is my take on the minibar for the current project
//I basically created a state that is going to be converted into a queryString (in the redux side) and appended to the GET request
//I also created three components that are going to be responsible for changing this state and making requests
export default function MiniBar(props) {
  const [sharedQuery, addToSharedQuery] = useState({
    search: {},
    order: {},
    statusSearch: {},
  });

  return (
    <Fragment>
      <CSSTransition
        in={props.location.pathname === "/"}
        timeout={300}
        classNames="menu-primary"
        unmountOnExit
      >
        <div className="mini-bar">
          <SearchShipments
            sharedQuery={sharedQuery}
            addToSharedQuery={addToSharedQuery}
          />
          <OrderShipments
            sharedQuery={sharedQuery}
            addToSharedQuery={addToSharedQuery}
          />
          <StatusLegend
            sharedQuery={sharedQuery}
            addToSharedQuery={addToSharedQuery}
          />
          {/* Although the pagination component doesn't change the shareQuery state, it needs to be aware of the query to change pages accordingly */}
          <Pagination sharedQuery={sharedQuery}/>
        </div>
      </CSSTransition>
      <CSSTransition
        in={props.location.pathname !== "/"}
        timeout={300}
        classNames="menu-secondary"
        unmountOnExit
      >
        <div className="mini-bar">
          <IconButton onClick={() => props.history.push("/")}>
            <ArrowBackIcon fontSize="large" />
          </IconButton>
        </div>
      </CSSTransition>
    </Fragment>
  );
}
