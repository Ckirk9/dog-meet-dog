import React from "react"
import "../Messages.css"
import Message from "./Message"

function Messages() {
    return(
        <div>
            <Message 
                name="Leo"
                message="I like bellyrubs"
                timestamp="40 seconds ago"
                picture="https://i.imgur.com/UuiThYG.jpg"
            />
            <Message 
                name="Banjo"
                message="Down to play?!"
                timestamp="5 minutes ago"
                picture="https://i.imgur.com/tcFaaU0.jpg"
            />
        </div>
    )
}

export default Messages