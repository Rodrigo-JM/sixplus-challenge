import { combineReducers } from "redux";

import allShipmentsReducer from "./allShipments";
import singleShipmentReducer from "./singleShipment";

const appReducer = combineReducers({
  allShipments: allShipmentsReducer,
  singleShipment: singleShipmentReducer,
});

export default appReducer;
