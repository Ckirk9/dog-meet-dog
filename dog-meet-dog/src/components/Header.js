import React from 'react'
import "../Header.css"
import { Link, useHistory } from "react-router-dom"
import PetsIcon from '@material-ui/icons/Pets';
import ChatIcon from '@material-ui/icons/Chat';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Header = ({ backButton }) => {
    const history = useHistory()
    return (
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => history.replace('/')}>
                <ArrowBackIcon fontSize="large" className="icon"/>
                </IconButton>
            ) : (
                <Link to="/myprofile">
                <IconButton>
                <PetsIcon className="icon" fontSize="large"/>
                </IconButton>
                </Link>
            )}
            <Link to="/">
                <div className="logo">
                <LoyaltyIcon className="icon" fontSize="large" />
                </div>
            </Link>
            <Link to="/message">
                <IconButton>
                <ChatIcon className="icon" fontSize="large"/>
                </IconButton>
            </Link>
        </div>
    )
}

export default Header