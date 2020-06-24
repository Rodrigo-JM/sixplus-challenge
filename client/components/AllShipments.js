import { connect } from "react-redux";
import React, { Component } from "react";
import Bouncer from "react-data-bouncer";

import { Grid } from "@material-ui/core";

import ShipmentCard from "./ShipmentCard";
import { getShipments } from "../redux/allShipments";

import { CSSTransition } from "react-transition-group";

class AllShipments extends Component {
  constructor() {
    super();

    this.state = {
      animation: false
    }
    this.goToShipment = this.goToShipment.bind(this);
    this.finishAnimation = this.finishAnimation.bind(this)
  }

  finishAnimation() {
    this.setState({animation: true})
  }

  componentDidMount() {
    //get first page shipments when mounting
    this.props.getShipments(1);

    setTimeout(this.finishAnimation, 100);
  }

  goToShipment(id) {
    this.props.history.push(`/${id}`);
  }

  render() {
    return (
      <div>
        <CSSTransition
          in={this.state.animation}
          timeout={500}
          classNames="menu-primary"
          unmountOnExit
        >
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
        </CSSTransition>

        <CSSTransition
          in={!this.state.animation}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
        >
          <div>

          </div>
        </CSSTransition>
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
