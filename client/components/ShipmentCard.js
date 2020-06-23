import React from 'react'

export default function ShipmentCard(props) {
    return (
        <div className="card">
            <div className="basic-info">
                <h3>ID: {props.data.id}</h3>
                <h3>Name: {props.data.name}</h3>
                <h3>Origin: {props.data.origin}</h3>
                <h3>Destination: {props.data.destination}</h3>
            </div>
            <div className={`status-color-tag-${props.data.status.toLowerCase()}`}>
            </div>
        </div>
    )
}
