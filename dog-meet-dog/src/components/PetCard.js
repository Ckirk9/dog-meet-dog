import React from 'react';
import PetModel from '../models/pet';
import TinderCard from "react-tinder-card"

const PetCard = ({ pet, size }) => {
    const currentPet = localStorage.getItem('uid');
    const handleSwipe = (direction, swipedPet) => {
        if (direction === 'left') {
            // Dislike the given pet
            console.log(`${currentPet} dislikes ${swipedPet.username}`)
            // PetModel.dislike(currentPet, swipedPet)
        } else if (direction === 'right') {
            // Like the given pet
            console.log(`${currentPet} likes ${swipedPet.username}`);
            PetModel.like(currentPet, swipedPet)
        }
    }

    return (
    // courtesy of react-tinder-card already includes swipe functionality
    <TinderCard
        onSwipe={(direction) => handleSwipe(direction, pet)}
        className="swipe"
        preventSwipe={['up', 'down']}
    >
        <div 
            style={{ backgroundImage: `url(${pet.pictureUrl})`}}
            className={ size === 'small' ? "card small" : "card" }>
            <h4 className="name">{pet.username}</h4>
            <p className="bio">{pet.bio}</p>
        </div>
    </TinderCard>
    )               
}

export default PetCard;