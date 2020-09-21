import React, { useState, useEffect } from "react"
import Avatar from "@material-ui/core/Avatar"
import "../MessageShow.css"
import PetModel from '../models/pet';
import { useHistory } from 'react-router'

function MessageShow() {
    const [input, setInput] = useState('')
    const [currentPet] = useState(localStorage.getItem('uid'))
    const [pet, setPet] = useState({});
    const [pets, setPets] = useState([]);
            // const [messages, setMessages] = useState([
            //     { 
            //         name: "Leo",
            //         picture: "https://i.imgur.com/UuiThYG.jpg",
            //         message: "HI! I'd like some treats please!"
            //     },
            //     { 
            //         message: "Only if you're a very good boy!"
            //     }
            // ])

    // Nesting async function after receiving a propmt from the hooks warning to do so
    useEffect(() => {
        const fetchPet = async () => {
            //when does useEffect get triggered?
            const petResponse = await PetModel.show(currentPet);
            setPet(petResponse.pet);
        }
        fetchPet();
    }, [currentPet])

    // Nesting async function after receiving a propmt from the hooks warning to do so
    useEffect(() => {
        const fetchPets = async () => {
            //when does useEffect get triggered?
            const petsResponse = await PetModel.all(currentPet);
            setPets(petsResponse.pets);
        }
        fetchPets();
    }, [currentPet])

    // const handleSend = e => {
    //     e.preventDefault()
    //     setMessages([...messages, { message: input }])
    //     setInput("")
    // }
    const history = useHistory();
    const matchedPet = history.location.pathname.split('/')[2];
    return(
        <div className="message-show">
            <p className="title">You matched with name  </p>
            {pet.conversations[matchedPet].map((p, i) => 
                p.username ? (
                <div  key={i} className="message">
                    <Avatar 
                        className="pet-image"
                        alt={ p.username.name }
                        src={ p.pictureUrl }
                        />
                    {/* <p className="message-text">{ message.message }</p> */}
                </div>
                ) : null
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
                onClick={x => x}>Send</button>
            </form>
        </div>
    )
}

export default MessageShow