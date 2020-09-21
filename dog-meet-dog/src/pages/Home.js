import React, {useState, useEffect} from "react"
import PetCards from "../components/PetCards"
import PetModel from "../models/pet";

const Home = () => {
    const [pets, setPets] = useState([]);
    const [currentPet] = useState(localStorage.getItem('uid'))

    // Nesting async function after receiving a propmt from the hooks warning to do so
    useEffect(() => {
        const fetchPets = async () => {
            //when does useEffect get triggered?
            const petsResponse = await PetModel.all(currentPet);
            setPets(petsResponse.pets);
        }
        fetchPets();
    }, [currentPet])
    return(
        <>
            <PetCards pets={pets}/>
        </>
    )
}

export default Home