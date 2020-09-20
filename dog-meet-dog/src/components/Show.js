import React, { useState, useEffect } from "react"
import PetModel from "../models/pet"
import { useHistory } from 'react-router';
import TinderCard from 'react-tinder-card';

const Show = () => { 
    const [pet, setPet] = useState({});
    const history = useHistory();

    useEffect(() => {
        const petName = history.location.pathname.split('/')[2]; // ['', 'profile', 'Psycho Kitty'
        const fetchPet = async () => {
            //when does useEffect get triggered?
            const petResponse = await PetModel.show(petName);
            setPet(petResponse.pet);
        }
        fetchPet();
    }, [history.location.pathname])

    return (
    <div className="profile">
        { pet ?
        <TinderCard
            className="swipe"
            key={pet.username}
            preventSwipe={['up', 'down', 'left', 'right']}
        >
            <div 
                style={{ backgroundImage: `url(${pet.pictureUrl})`}}
                className="card">
                <h4 className="name">{pet.username}</h4>
                <p>{pet.bio}</p>
            </div>
        </TinderCard> 
        : null} 
    </div>)
}

export default Show
