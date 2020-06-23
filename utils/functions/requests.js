import axios from 'axios'

//API REQUESTS
export const getShipmentsByPage = (page) => {//gets all shipments, returns promise
    return axios.get(`/shipments?_page=${page}&limit_20`)
}

export const getShipmentById = (id) => {
    return axios.get(`/shipments/${id}`)
}