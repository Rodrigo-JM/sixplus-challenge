import React from 'react'
import RoomSharpIcon from '@material-ui/icons/RoomSharp';
import RedoSharpIcon from '@material-ui/icons/RedoSharp';
export default function ShipmentCard(props) {

    return (
        <div onClick={() => props.goToShipment(props.data.id)} className="card">
            <div className="basic-info">
                <h3>{props.data.name}</h3>
                <h3><RoomSharpIcon fontSize="default"/>   {props.data.origin}</h3>
                <h3><RedoSharpIcon fontSize="default"/>   {props.data.destination}</h3>
                <h3>ID: {props.data.id}</h3>
            </div>
            <div className={`status-color-tag-${props.data.status.toLowerCase()}`}>
            </div>
        </div>
    )
}
