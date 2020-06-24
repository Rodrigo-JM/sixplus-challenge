import { connect } from "react-redux";
import React, { Component } from "react";
import Bouncer from "react-data-bouncer";

import { Grid } from "@material-ui/core";

import ShipmentCard from "./ShipmentCard";
import { getShipments } from "../redux/allShipments";

class AllShipments extends Component {
  constructor() {
    super();

    this.goToShipment = this.goToShipment.bind(this);
  }

  componentDidMount() {
    //get first page shipments when mounting
    this.props.getShipments(1);
  }

  goToShipment(id) {
    this.props.history.push(`/${id}`);
  }

  render() {
    return (
      <div>
        <Bouncer>
          <Grid container spacing={2}>
            {this.props.shipments.map((shipment) => {
              return (
                <Grid item md={4} sm={12}>
                  <ShipmentCard
                    item
                    data={shipment}
                    goToShipment={this.goToShipment}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Bouncer>
      </div>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(AllShipments);
