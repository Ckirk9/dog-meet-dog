import React from "react"
import Avatar from "@material-ui/core/Avatar"

function Message({ name, message, timestamp, picture }) {
    return(
        <div className="message">
            <Avatar className="message-image" alt={name} src={picture} />
            <div>
                <h3>{ name }</h3>
                <p>{ message }</p>
            </div>
            <p>{ timestamp }</p>
        </div>
    )
}

export default Message