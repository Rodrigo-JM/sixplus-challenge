import { connect } from 'react-redux'
import React, { Component } from "react";
import { getShipmentById } from "../redux/singleShipment";

import { Grid } from "@material-ui/core";

class SingleShipment extends Component {

  componentDidMount() {
    this.props.getShipmentById(this.props.match.params.id);
  }

  render() {
    return this.props.shipment.id ? (
      <Grid container justify="space-around">
        <ShipmentInfo data={this.props.shipment} />
        <Grid item container md={5} sm={12}>
          <ShipmentCargo data={this.props.shipment} />
          <ShipmentServices data={this.props.shipment} />
        </Grid>
      </Grid>
    ) : (
      <h1>Loading...</h1>
    );
  }
}

const ShipmentInfo = (props) => {
  const infoArray = Object.keys(props.data).filter(
    (info) => info !== "cargo" && info !== "services"
  );

  return (
    <Grid item md={5} sm={12}>
      <h2>Info:</h2>
      {infoArray.map((info) => {
        return (
          <h3>
            {info}: {props.data[info]}
          </h3>
        );
      })}
    </Grid>
  );
};

const ShipmentCargo = (props) => {
  return (
    <Grid item xs={12}>
      <h2>Cargo:</h2>
      {props.data.cargo.map((allot) => {
        return (
          <div>
            <h4>Type: {allot.type}</h4>
            <h4>Description: {allot.description}</h4>
            <h4>Volume: {allot.volume}</h4>
          </div>
        );
      })}
    </Grid>
  );
};

const ShipmentServices = (props) => {
  return (
    <Grid item xs={12}>
      <h2>Services:</h2>
      {props.data.services.map((service) => {
        return (
          <div>
            <h4>Type: {service.type}</h4>
            {
             (service.value) && <h4>Value: {service.value}</h4>
            }
          </div>
        );
      })}
    </Grid>
  );
};



const mapStateToProps = (state) => ({
    shipment: state.singleShipment
})

const mapDispatchToProps = dispatch => {
    return {
        getShipmentById: (id) => dispatch(getShipmentById(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleShipment)
