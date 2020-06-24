import React, {useState} from 'react'
import Pagination from './Pagination'
import SearchShipments from './SearchShipments'
import OrderShipments from './OrderShipments'
import StatusLegend from './StatusLegend'

export default function MiniBar() {
    const [sharedQuery, addToSharedQuery] = useState({search: {}, order: {}, statusSearch: {}}) 


    return (
        <div className="mini-bar">
            <SearchShipments sharedQuery={sharedQuery} addToSharedQuery={addToSharedQuery}/>
            <OrderShipments sharedQuery={sharedQuery} addToSharedQuery={addToSharedQuery}/>
            <StatusLegend sharedQuery={sharedQuery} addToSharedQuery={addToSharedQuery}/>
            <Pagination />
        </div>
    )
}
