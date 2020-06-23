import React, { Component } from "react";
import { getShipmentsByPage } from "../../utils/functions/requests";
import { totalPages } from "../../utils/functions/pagination";

import { Grid } from "@material-ui/core";

import ShipmentCard from "./ShipmentCard";

export default class AllShipments extends Component {
  constructor() {
    super();

    this.state = {
      shipments: [],
      totalShipments: 0,
      page: 1,
      totalPages: 1,
    };

    this.goToShipment = this.goToShipment.bind(this)
  }

  async componentDidMount() {
    //get first page shipments when mounting
    //get total number of shipments and calculates number of pages
    const res = await getShipmentsByPage(1);

    this.setState({
      shipments: res.data,
      totalShipments: res.headers[`x-total-count`],
      totalPages: totalPages(res.headers[`x-total-count`]),
    });
  }

  goToShipment(id) {
    this.props.history.push(`/${id}`)
  }

  render() {
    return (
      <div>
        <h1>{this.state.totalShipments}</h1>
        <Grid container spacing={2}>
          {this.state.shipments.map((shipment) => {
            return (
              <Grid item md={4} sm={12}>
                <ShipmentCard item data={shipment} goToShipment={this.goToShipment}/>
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}
