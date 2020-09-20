import React, {useState, useEffect} from "react"
import TinderCard from "react-tinder-card"
import PetModel from "../models/pet"
import "../PetCards.css"

const PetCards = () => {
    const [pets, setPets] = useState([]);
    const [currentPet] = useState(localStorage.getItem('uid'))

    // Nesting async function after receiving a propmt from the hooks warning to do so
    useEffect(() => {
        const fetchPets = async () => {
            //when does useEffect get triggered?
            const petsResponse = await PetModel.all(currentPet);
            setPets(petsResponse);
        }
        fetchPets();
    }, [currentPet])

    return(
        <div className="pet-card">
            {/* conditional here so that you don't match with yourself */}
            { pets.pets ? pets.pets.map(pet => (
                // courtesy of react-tinder-card already includes swipe functionality
                <TinderCard
                    className="swipe"
                    key={pet.username}
                    preventSwipe={['up', 'down']}
                >
                    <div 
                        style={{ backgroundImage: `url(${pet.pictureUrl})`}}
                        className="card">
                        <h4 className="name">{pet.username}</h4>
                        <p>{pet.bio}</p>
                    </div>
                </TinderCard>
            )) : null}
        </div>
    )
}

export default PetCards 