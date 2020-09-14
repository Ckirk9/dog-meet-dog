import React from 'react'
import "../Header.css"
import PetsIcon from '@material-ui/icons/Pets';
import ChatIcon from '@material-ui/icons/Chat';
import LoyaltyIcon from '@material-ui/icons/Loyalty';

function Header() {
    return (
        <div className="header">
            <PetsIcon fontSize="large"/>
            <div className="logo">
            <LoyaltyIcon fontSize="large" />
            </div>
            <ChatIcon fontSize="large"/>
        </div>
    )
}

export default Header