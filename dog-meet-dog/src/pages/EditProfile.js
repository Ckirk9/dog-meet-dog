import React, { useState, useEffect } from 'react'
import PetModel from '../models/pet'
import { useHistory } from 'react-router';
import "../EditProfile.css"

const EditProfile = () => { 
    const [pet, setPet] = useState({});
    const [currentPet] = useState(localStorage.getItem('uid'))
    const history = useHistory();

    useEffect(() => {
        const fetchPet = async () => {
            //when does useEffect get triggered?
            const petResponse = await PetModel.show(currentPet);
            setPet(petResponse.pet);
        }
        fetchPet();
    }, [currentPet])

    const handleSubmit = (event) => {
        event.preventDefault()
        PetModel.edit(pet)
        .then(data => {
            history.push('/myprofile')
        })
    }

    const handleChange = (event) => {
        setPet({
            ...pet,
            [event.target.name]: event.target.value
        })
    }

    return pet ? (<div>
                <h2>Edit Profile</h2>
                <form onSubmit={handleSubmit}>
                <div>
                    <textarea 
                    className="edit-field"
                    name="bio" 
                    placeholder="Update about me here..."
                    onChange={handleChange}
                    value={pet.bio} >
                    </textarea>
                    <textarea 
                    className="edit-field"
                    name="pictureUrl" 
                    placeholder="Add new image link here..."
                    onChange={handleChange}
                    value={pet.pictureUrl} >
                    </textarea>
                    <input className="submit-btn" type="submit" value="Save!"/>
                </div>
                </form>
            </div>
        ) : null
}



export default EditProfile