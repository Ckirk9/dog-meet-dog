import React from "react"
// import PetModel from "../models/pet"
// import Login from '../pages/Login'
// import SignUp from '../pages/SignUp'
import "../Footer.css"

const Footer = (props) => {

    return (
        <div className="footer">
            <a href="/logout" onClick={ props.logout}>Log Out </a>
        </div>
    )
}

export default Footer