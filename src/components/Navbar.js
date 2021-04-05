import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <Link className="link" to="/">Take Me Home</Link>
            </ul>
        </div>
    )
}

export default Navbar
