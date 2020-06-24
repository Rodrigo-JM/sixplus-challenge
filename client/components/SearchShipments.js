import React, { useState } from "react";
import { connect } from "react-redux";

import {
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

import { getShipments } from '../redux/allShipments'

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "35ch",
  },
  select: {
    width: "25ch",
  },
}));

export const SearchShipments = (props) => {
  const [searchField, changeSearchField] = useState("");

  const [searchVal, changeSearchVal] = useState("");

  const submitSearch = (searchField, searchVal) => {
    props.addToSharedQuery({...props.sharedQuery, search: {[`${searchField}_like`]: searchVal}})  
    props.getShipments(1, {...props.sharedQuery, search: {[`${searchField}_like`]: searchVal}})
  }

  const classes = useStyles();


  return (
    <form
      className="search-form"
      noValidate
      autoComplete="off"
      onSubmit={(e) => console.log(e)}
    >
      <TextField
        name="searchVal"
        className={classes.textField}
        label="Search"
        onChange={(e) => changeSearchVal(e.target.value)}
        value={searchVal}
      />
      <FormControl className={classes.select}>
        <InputLabel id="demo-simple-select-label">Field</InputLabel>
        <Select
          name="searchField"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={searchField}
          onChange={(e) => changeSearchField(e.target.value)}
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
      <IconButton onClick={() => submitSearch(searchField, searchVal)}>
        <SearchIcon fontSize="large" />
      </IconButton>
    </form>
  );
};

const mapDispatchToProps = dispatch => {
    return {
        getShipments: (page, view) => dispatch(getShipments(page, view))
    }
};

export default connect(null, mapDispatchToProps)(SearchShipments);
