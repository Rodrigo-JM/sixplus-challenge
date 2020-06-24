import React, { useState } from "react";
import { connect } from "react-redux";

import { Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import { getShipments } from "../redux/allShipments";

const useStyles = makeStyles((theme) => ({
  active: {
    backgroundColor: "cornflowerblue",
    marginLeft: 10
  },
  new: {
    backgroundColor: "yellow",
    marginLeft: 10
  },
  completed: {
    backgroundColor: "lightgreen",
    marginLeft: 10
  },
}));

export const StatusLegend = (props) => {
  const submitSearch = (status) => {
    props.addToSharedQuery({
      ...props.sharedQuery,
      statusSearch: { [`status_like`]: status },
    });
    props.getShipments(1, {
      ...props.sharedQuery,
      statusSearch: { [`status_like`]: status },
    });
  };

  const classes = useStyles();

  return (
    <div className="status-legend">
      <Button variant="contained" onClick={() => submitSearch("")}>
        All
      </Button>
      <Button className={classes.active} variant="contained" onClick={() => submitSearch("active")}>
        Active
      </Button>
      <Button className={classes.new} variant="contained" onClick={() => submitSearch("new")}>
        New
      </Button>
      <Button className={classes.completed} variant="contained" onClick={() => submitSearch("completed")}>
        Completed
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getShipments: (page, view) => dispatch(getShipments(page, view)),
  };
};

export default connect(null, mapDispatchToProps)(StatusLegend);
