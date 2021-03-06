import axios from "axios";
import queryString from 'query-string'
const initialState = {
  shipments: [],
  totalShipments: 0,
  page: 1,
  totalPages: 1,
};

const GOT_SHIPMENTS = 'GOT_SHIPMENTS'
const UPDATED_SHIPMENT = "UPDATED_SHIPMENT"

const gotShipments = ({shipments, totalShipments, totalPages, page}) => {
    return {
        type: GOT_SHIPMENTS,
        shipments,
        totalShipments,
        totalPages,
        page
    }
}

export const getShipments = (page, view) => {
  return async (dispatch) => {
    let query = "";

    if (view) {//Just checking to see if the view (sharedQuery) object came along with the function call, if it did, we extract the properties and build a query string if them
      view = {...view.search, ...view.order, ...view.statusSearch}  
      query = `&${queryString.stringify(view)}`;
    }

    const res = await axios.get(`/shipments?_page=${page}&_limit=20${query}`);

    dispatch(
      gotShipments({
        shipments: res.data,
        totalShipments: res.headers[`x-total-count`],
        totalPages: totalPages(res.headers[`x-total-count`]),
        page
      })
    );
  };
};

const totalPages = (totalCount) => {
  if (totalCount % 20 === 0) {
    return totalCount / 20;
  } else {
    return Math.trunc(totalCount / 20) + 1;
  }
};

const allShipmentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_SHIPMENTS:
      return {
        ...state,
        shipments: action.shipments,
        totalShipments: action.totalShipments,
        page: action.page, 
        totalPages: action.totalPages 
      };

    case UPDATED_SHIPMENT: 
      return {
        ...state,
        shipments: state.shipments.map(shipment => {
          if (shipment.id === action.shipment.id) {
            return action.shipment
          } else {
            return shipment
          }
        })
      }
    default:
      return state;
  }
};

export default allShipmentsReducer