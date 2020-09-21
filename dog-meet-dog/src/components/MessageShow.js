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

    const handleSend = (e, pet, match) => {
        e.preventDefault()
        PetModel.message(pet, match, input);
        setInput("")
    }
    const history = useHistory();
    const matchedPet = history.location.pathname.split('/')[2];
    const matchedPetData = pets.find(p => p.username === matchedPet);
    console.log('Pet: ', pet);
    return(
        <div className="message-show">
            <div className="title">Your conversation with {matchedPet} 
                <Avatar className="pet-image"
                    alt={ pet ? pet.username : '' }
                    src={ pet ? pet.pictureUrl : '' }
                />
                <Avatar className="pet-image"
                    alt={ matchedPetData ? matchedPetData.username : '' }
                    src={ matchedPetData ? matchedPetData.pictureUrl : '' }
                />
            </div>
            { pet.username && pet.conversations[matchedPet] && matchedPetData ? pet.conversations[matchedPet].map((msg, i) => (
                <div  key={i} className="message">
                <Avatar className="pet-image"
                    alt={ msg.sender }
                    src={ matchedPetData.username === msg.sender ? matchedPetData.pictureUrl : pet.pictureUrl }
                />
                    <p className="message-text">{ msg.message }</p>
                </div>
                )
            ) : null}
            <form onSubmit={(e) => handleSend(e, currentPet, matchedPetData)} className="input" type="text">
                <input 
                value={ input }
                onChange={ (e) => setInput(e.target.value)}
                className="input-field" 
                placeholder=" Type a message..."
                type="text"/>
                <button 
                className="input-button"
                type="submit"
                >Send</button>
            </form>
        </div>
    )
}

export default MessageShow