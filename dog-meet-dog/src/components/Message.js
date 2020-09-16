import React from "react"
import "../Message.css"
import Avatar from "@material-ui/core/Avatar"
import { Link } from "react-router-dom"

const Message = ({ name, message, timestamp, picture }) => {
    return(
        <Link to={`/message/${ name }`}>
        <div className="message">
            <Avatar className="message-image" alt={name} src={picture} />
            <div className="message-details">
                <h3>{ name }</h3>
                <p>{ message }</p>
            </div>
            <p className="timestamp">{ timestamp }</p>
        </div>
        </Link>
    )
}

export default Message