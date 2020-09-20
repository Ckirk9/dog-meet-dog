import React, {  useState, useEffect } from "react"
import { Link } from "react-router-dom";
import PetModel from "../models/pet"
import TinderCard from "react-tinder-card"
import EditIcon from '@material-ui/icons/Edit';
import IconButton from "@material-ui/core/IconButton";

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
            <Link to="/editprofile">
                <IconButton>
                <EditIcon className="icon" fontSize="large"/>
                </IconButton>
            </Link>
            </div>
    )
}

export default MyProfile
