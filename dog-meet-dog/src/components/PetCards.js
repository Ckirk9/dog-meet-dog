import React, {useState, useEffect} from "react"
import TinderCard from "react-tinder-card"
import database from "../firebase"
import "../PetCards.css"

const PetCards= () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        // runs through the pets collection in the DB and anytime a new pet is added compent will re-render
        //when does useEffect get triggered?
        database.collection("pets").onSnapshot((snapshot) =>
              setPets(snapshot.docs.map((doc) => doc.data())
            ))
    }, [])

    return(
        <div className="pet-card">
            {/* conditional here so that you don't match with yourself */}
            {pets.map(pet => (
                // courtesy of react-tinder-card already includes swipe functionality
                <TinderCard
                    className="swipe"
                    key={pet.username}
                    preventSwipe={['up', 'down']}
                >
                    <div 
                        style={{ backgroundImage: `url(${pet.url})`}}
                        className="card">
                        <h4>{pet.username}</h4>
                    </div>
                </TinderCard>
            ))}
        </div>
    )
}

export default PetCards 