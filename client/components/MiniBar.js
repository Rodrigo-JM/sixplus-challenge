import React, { useState, Fragment } from "react";
import Pagination from "./Pagination";
import SearchShipments from "./SearchShipments";
import OrderShipments from "./OrderShipments";
import StatusLegend from "./StatusLegend";
import { CSSTransition } from "react-transition-group";

import {IconButton} from '@material-ui/core'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

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
          <Pagination />
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
