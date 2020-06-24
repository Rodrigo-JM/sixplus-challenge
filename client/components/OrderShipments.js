import React, { useState } from "react";
import { connect } from "react-redux";

import {
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Button,
  IconButton,
} from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { makeStyles } from "@material-ui/core/styles";
import CancelIcon from "@material-ui/icons/Cancel";

import { getShipments } from "../redux/allShipments";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "35ch",
  },
  select: {
    width: "25ch",
  },
  button: {
    width: "10ch",
  },
}));

export const OrderShipments = (props) => {
  const [orderField, changeorderField] = useState("");

  let ordered = !!Object.keys(props.sharedQuery.order).length;

  const [orderDirection, changeorderDirection] = useState("asc");

  const submitSearch = (orderField, orderDirection) => {
    props.addToSharedQuery({
      ...props.sharedQuery,
      order: { [`_sort`]: orderField, [`_order`]: orderDirection },
    });
    props.getShipments(1, {
      ...props.sharedQuery,
      order: { [`_sort`]: orderField, [`_order`]: orderDirection },
    });
  };

  const cancelSearch = () => {
    props.addToSharedQuery({
      ...props.sharedQuery,
      order: {},
    });
    props.getShipments(1, {
      ...props.sharedQuery,
      order: {},
    });
  };

  const classes = useStyles();

  return (
    <form className="order-form" noValidate autoComplete="off">
      <FormControl className={classes.select}>
        <InputLabel id="demo-simple-select-label">Field</InputLabel>
        <Select
          name="orderField"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={orderField}
          onChange={(e) => changeorderField(e.target.value)}
        >
          <MenuItem value={"id"}>Id</MenuItem>
          <MenuItem value={"name"}>Name</MenuItem>
          <MenuItem value={"mode"}>Mode</MenuItem>
          <MenuItem value={"type"}>Type</MenuItem>
          <MenuItem value={"destination"}>Destination</MenuItem>
          <MenuItem value={"origin"}>Origin</MenuItem>
          <MenuItem value={"total"}>Total</MenuItem>
          <MenuItem value={"status"}>Status</MenuItem>
          <MenuItem value={"userId"}>User Id</MenuItem>
        </Select>
      </FormControl>

      {orderDirection === "asc" ? (
        <IconButton onClick={() => changeorderDirection("desc")}>
          <ArrowUpwardIcon fontSize="default" />
        </IconButton>
      ) : (
        <IconButton onClick={() => changeorderDirection("asc")}>
          <ArrowDownwardIcon fontSize="default" />
        </IconButton>
      )}
      
      <Button
        className={classes.button}
        variant="contained"
        onClick={() => submitSearch(orderField, orderDirection)}
      >
        Order By
      </Button>

      {ordered && (
        <IconButton onClick={() => cancelSearch()}>
          <CancelIcon fontSize="default" />
        </IconButton>
      )}
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getShipments: (page, view) => dispatch(getShipments(page, view)),
  };
};

export default connect(null, mapDispatchToProps)(OrderShipments);
