import React, {useState, useEffect} from "react"
import PetCards from "../components/PetCards"
import PetModel from "../models/pet";

const Home = () => {
    const [pets, setPets] = useState([]);
    const [currentPet] = useState(localStorage.getItem('uid'))
    const [pet, setPet] = useState({});

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
    let filteredPets = [];
    if (pets.length > 0 && pet.username) {
        filteredPets = pets.filter(p => !pet.petsLiked.includes(p.username));
    }
    return(
        <>
            <PetCards pets={filteredPets}/>
        </>
    )
}

export default Home