import React, {  useState, useEffect } from "react"
import { Link } from "react-router-dom";
import PetModel from "../models/pet"
import TinderCard from "react-tinder-card"
import EditIcon from '@material-ui/icons/Edit';
import IconButton from "@material-ui/core/IconButton";
import Likes from './Likes';

const MyProfile = () => {
    const [pet, setPet] = useState({});
    const [currentPet] = useState(localStorage.getItem('uid'))
    const [pets, setPets] = useState([]);

    // Nesting async function after receiving a propmt from the hooks warning to do so
    useEffect(() => {
        const fetchPets = async () => {
            //when does useEffect get triggered?
            const petsResponse = await PetModel.all(currentPet);
            setPets(petsResponse.pets);
        }
        fetchPets();
    }, [currentPet])
    // Nesting async function after receiving a propmt from the hooks warning to do so
    useEffect(() => {
        const fetchPet = async () => {
            //when does useEffect get triggered?
            const petResponse = await PetModel.show(currentPet);
            setPet(petResponse.pet);
        }
        fetchPet();
    }, [currentPet])

    let filteredPets = [];
    if (pets.length > 0 && pet.username) {
        filteredPets = pets.filter(p => pet.petsLiked.includes(p.username));
    }
    return(
        <div className="profile">
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
            <Link to="/editprofile">
                <IconButton>
                <EditIcon className="icon" fontSize="large"/>
                </IconButton>
            </Link>
            <Likes pets={filteredPets} size='small'/>
            </div>
    )
}

export default MyProfile
