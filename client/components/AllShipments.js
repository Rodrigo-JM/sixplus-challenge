import { connect } from "react-redux";
import React, { Component } from "react";
import Bouncer from "react-data-bouncer";

import { Grid } from "@material-ui/core";

import ShipmentCard from "./ShipmentCard";
import { getShipments } from "../redux/allShipments";
import {clearShipment} from '../redux/singleShipment'


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

    //making sure that no singleShipment is in state while in this page
    this.props.clearShipment();
    //Transitions work by keeping track of variables/statements
    //I am using this 'animation' variable to spark the animations whenever it changes
    //When the component is mounted, I give it just a brief moment before the animation variable is changed and the animation is triggered
    setTimeout(this.finishAnimation, 100);
  }

  goToShipment(id) {
    //I like using the history prop from React Router to change views
    //It is passed down from the Route component whenever it is actively rendering a component 
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
              {this.props.shipments.length ? 
              <Grid container spacing={2}>
                {this.props.shipments.map((shipment) => {
                  return (
                    <Grid key={shipment.id} item md={4} sm={12}>
                      <ShipmentCard
                        item
                        data={shipment}
                        goToShipment={this.goToShipment}
                      />
                    </Grid>
                  );
                })}
              </Grid> : (
                <h3 className="not-found-message">Sorry, no shipments were found</h3>
              )
              }
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
          {/* I am using this empty transition component so that we have something to transition from-to */}
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
    clearShipment: () => dispatch(clearShipment())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllShipments);
