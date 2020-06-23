import React, { Component } from "react";
import { connect } from "react-redux";

import { Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { getShipments } from "../redux/allShipments";

export const Pagination = (props) => {
  return (
    <div className="pagination">
      <Typography variant="body1">
        {((props.page - 1) * 20 + 1 <= props.totalShipments) ? (props.page - 1) * 20 + 1 : props.totalShipments}-{(props.page * 20 <= props.totalShipments) ? props.page * 20 : props.totalShipments} of {props.totalShipments}
      </Typography>
      <div>
        <IconButton disabled={(props.page - 1 > 0) ? false : true} onClick={() => props.getShipments(props.page - 1)}>
          <ArrowBackIcon fontSize="small" />
        </IconButton>
        <IconButton disabled={(props.page + 1 <= props.totalPages) ? false : true} onClick={() => props.getShipments(props.page + 1)}>
          <ArrowForwardIcon fontSize="small" />
        </IconButton>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  shipments: state.allShipments.shipments,
  totalShipments: state.allShipments.totalShipments,
  page: state.allShipments.page,
  totalPages: state.allShipments.totalPages,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getShipments: (page) => dispatch(getShipments(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
