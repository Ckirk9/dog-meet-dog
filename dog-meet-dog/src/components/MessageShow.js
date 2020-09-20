import React, { useState } from "react"
import Avatar from "@material-ui/core/Avatar"
import "../MessageShow.css"

function MessageShow() {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([
        { 
            name: "Leo",
            picture: "https://i.imgur.com/UuiThYG.jpg",
            message: "HI! I'd like some treats please!"
        },
        { 
            message: "Only if you're a very good boy!"
        }
    ])
    const handleSend = e => {
        e.preventDefault()
        setMessages([...messages, { message: input }])
        setInput("")
    }
    return(
        <div className="message-show">
            <p className="title">You matched with name  </p>
            {messages.map((message, i) => 
                message.name ? (
                <div  key={i} className="message">
                    <Avatar 
                        className="pet-image"
                        alt={ message.name }
                        src={ message.picture }
                        />
                    <p className="message-text">{ message.message }</p>
                </div>
                ) : ( 
                    <div className="message">
                        <p className="text-user">{ message.message }</p>
                    </div>    
                )
            )}
            <form className="input" type="text">
                <input 
                value={ input }
                onChange={ (e) => setInput(e.target.value)}
                className="input-field" 
                placeholder=" Type a message..."
                type="text"/>
                <button 
                className="input-button"
                type="submit"
                onClick={handleSend}>Send</button>
            </form>
        </div>
    )
}

export default MessageShow