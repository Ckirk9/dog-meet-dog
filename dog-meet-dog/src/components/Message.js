import React from "react"
import "../Messages.css"
import Avatar from "@material-ui/core/Avatar"

function Message({ name, message, timestamp, picture }) {
    return(
        <div className="message">
            <Avatar className="message-image" alt={name} src={picture} />
            <div className="message-details">
                <h3>{ name }</h3>
                <p>{ message }</p>
            </div>
            <p className="timestamp">{ timestamp }</p>
        </div>
    )
}

export default Message