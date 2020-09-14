import React from 'react'
import "../Header.css"
import PetsIcon from '@material-ui/icons/Pets';
import ChatIcon from '@material-ui/icons/Chat';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import IconButton from "@material-ui/core/IconButton";

function Header() {
    return (
        <div className="header">
            <IconButton>
            <PetsIcon className="icon" fontSize="large"/>
            </IconButton>
            <div className="logo">
            <LoyaltyIcon className="icon" fontSize="large" />
            </div>
            <IconButton>
            <ChatIcon className="icon" fontSize="large"/>
            </IconButton>
        </div>
    )
}

export default Header