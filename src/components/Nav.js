import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return(
        <>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/Projects">Projects</Link>
        </>
    )
}

export default Nav
