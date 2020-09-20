import React, {  useState, useEffect } from "react"
import PetModel from "../models/pet"
import TinderCard from "react-tinder-card"
import "../MyProfile.css"
//import PetCards from "./PetCards"

const MyProfile = () => {
    const [pet, setPet] = useState({});
    const [currentPet] = useState(localStorage.getItem('uid'))

    // Nesting async function after receiving a propmt from the hooks warning to do so
    useEffect(() => {
        const fetchPet = async () => {
            //when does useEffect get triggered?
            const petResponse = await PetModel.show(currentPet);
            setPet(petResponse.pet);
        }
        fetchPet();
    }, [currentPet])
    console.log('Pet from state: ', pet.pictureUrl);
    return(
        <div>
        { pet ?<TinderCard
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
        : null }
            </div>
    )
}

export default MyProfile
