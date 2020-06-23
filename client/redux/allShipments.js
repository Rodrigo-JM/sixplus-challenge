import axios from "axios";

const initialState = {
  shipments: [],
  totalShipments: 0,
  page: 1,
  totalPages: 1,
};

const GOT_SHIPMENTS = 'GOT_SHIPMENTS'

const gotShipments = ({shipments, totalShipments, totalPages, page}) => {
    return {
        type: GOT_SHIPMENTS,
        shipments,
        totalShipments,
        totalPages,
        page
    }
}

export const getShipments = (page) => {
  return async (dispatch) => {
    const res = await axios.get(`/shipments?_page=${page}&_limit=20`);

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
    default:
      return state;
  }
};

export default allShipmentsReducer