import React from 'react'

export default function NavBar(props) {
    return (
        <div className="nav-bar">
            <div className="icon" onClick={() => props.history.push('/')}>

            </div>
        </div>
    )
}
