import axios from 'axios'

const GOT_SHIPMENT = "GOT_SHIPMENT"
const CLEAR_SHIPMENT = "CLEAR_SHIPMENT"

const initialState = {}

const gotShipment = (shipment) => {
    return {
        type: GOT_SHIPMENT,
        shipment
    }
}

export const getShipmentById = (id) => {
    return async dispatch => {
        const {data} = await axios.get(`/shipments/${id}`)

        dispatch(gotShipment(data))
    }
}

const singleShipmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case GOT_SHIPMENT:
            return action.shipment
        case CLEAR_SHIPMENT:
            return {}    
        default: 
            return state
    }


}

export default singleShipmentReducer