import React from "react";
import PetCard from "./PetCard";
import "../PetCards.css";

const PetCards = ({pets, size}) => {
    return(
        <div className="pet-card">
            {/* conditional here so that you don't match with yourself */}
            { pets ? pets.map(pet => (
                <PetCard key={pet.username} pet={pet} size={size} />
            )) : null}
        </div>
    )
}

export default PetCards 