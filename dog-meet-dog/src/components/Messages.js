import React, { useState, useEffect } from "react"
import Avatar from "@material-ui/core/Avatar"
import "../Messages.css"
import PetModel from '../models/pet';
import { Link } from 'react-router-dom';

function Messages() {
    const [input, setInput] = useState('')
    const [currentPet] = useState(localStorage.getItem('uid'))
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
    const [pet, setPet] = useState({});
    const [pets, setPets] = useState([]);

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
    let filteredPets = [];
    if (pets.length > 0 && pet.username) {
        filteredPets = pets.filter(p => pet.petsLiked.includes(p.username));
    }
    return(
        <div className="message-show">
            <p className="title">Your matches</p>
            { pet.username ? filteredPets.map((p, i) => (
                <Link key={i} to={`/message/${p.username}`}>
                    <div className="message">
                        <div>{p.username}</div>
                        <Avatar 
                            className="pet-image"
                            alt={ p.username }
                            src={ p.pictureUrl }
                            />
                        {/* <p className="message-text">{ message.message }</p> */}
                    </div>
                </Link>
                ) 
            ) : null}
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

export default Messages