import { connect } from "react-redux";
import React, { Component, Fragment, useState } from "react";
import { getShipmentById, changeShipmentName } from "../redux/singleShipment";
import { CSSTransition } from "react-transition-group";
import { Grid, TextField, IconButton } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import DoneIcon from "@material-ui/icons/Done";
import CancelIcon from "@material-ui/icons/Cancel";
import EditIcon from "@material-ui/icons/Edit";

class SingleShipment extends Component {
  constructor() {
    super();

    this.state = {
      animation: false,
    };

    this.finishAnimation = this.finishAnimation.bind(this);
  }

  finishAnimation() {
    this.setState({ animation: true });
  }

  componentDidMount() {
    this.props.getShipmentById(this.props.match.params.id);

    setTimeout(this.finishAnimation, 100);
  }

  render() {
    return (
      <Fragment>
        <CSSTransition
          in={this.state.animation}
          timeout={500}
          classNames="menu-primary"
          unmountOnExit
        >
          <div></div>
        </CSSTransition>

        <CSSTransition
          in={this.state.animation}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
        >
          <div>
            {this.props.shipment.id ? (
              <Grid container justify="center">
                <ShipmentName
                  data={this.props.shipment}
                  changeName={this.props.changeShipmentName}
                />
                <ShipmentInfo data={this.props.shipment} />
                <Grid item container md={5} sm={12}>
                  <ShipmentCargo data={this.props.shipment} />
                  <ShipmentServices data={this.props.shipment} />
                </Grid>
              </Grid>
            ) : (
              <h1>Loading...</h1>
            )}
          </div>
        </CSSTransition>
      </Fragment>
    );
  }
}

const ShipmentInfo = (props) => {
  const infoArray = Object.keys(props.data).filter(
    (info) => info !== "cargo" && info !== "services" && info !== "name"
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
            {service.value && <h4>Value: {service.value}</h4>}
          </div>
        );
      })}
    </Grid>
  );
};

const ShipmentName = (props) => {
  const [editName, toggleForm] = useState(false);
  const [formName, changeFormName] = useState(props.data.name);

  const useStyles = makeStyles(() => ({
    nameTitle: {
      "& > *": {
        fontSize: "2rem",
        fontWeight: "bolder",
        marginRight: "1rem",
      },
    },
  }));

  const classes = useStyles();

  return !editName ? (
    <Grid item xs={10}>
      <h1>
        {props.data.name}
        <IconButton onClick={() => toggleForm(!editName)}>
          <EditIcon />
        </IconButton>
      </h1>
    </Grid>
  ) : (
    <Grid item xs={10}>
      <TextField
        value={formName}
        onChange={(e) => changeFormName(e.target.value)}
        className={classes.nameTitle}
      />
      <IconButton
        onClick={() => {
          props.changeName(formName, props.data);
          toggleForm(!editName);
        }}
      >
        <DoneIcon />
      </IconButton>
      <IconButton onClick={() => toggleForm(!editName)}>
        <CancelIcon />
      </IconButton>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  shipment: state.singleShipment,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getShipmentById: (id) => dispatch(getShipmentById(id)),
    changeShipmentName: (newName, shipment) =>
      dispatch(changeShipmentName(newName, shipment)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleShipment);
