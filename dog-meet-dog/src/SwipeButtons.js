import React from "react"
import CancelIcon from '@material-ui/icons/Cancel';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import "./SwipeButtons.css"
import { IconButton } from "@material-ui/core";

function SwipeButtons() {
    return (
        <div className="swipe-buttons">
            <IconButton className="swipe-left">
            <CancelIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipe-right">
            <FavoriteBorderIcon fontSize="large" />
            </IconButton>
        </div>
    )
}

export default SwipeButtons