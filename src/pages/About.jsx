import React from 'react'
import { Navbar } from '../components'
import { NavLink } from "react-router-dom";

function About() {
    return (
        <>
            <Navbar />
            <NavLink
                to="/"
            >
                about
            </NavLink>
        </>
    )
}

export default About;