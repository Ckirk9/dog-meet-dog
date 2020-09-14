import React, {useState, useEffect} from "react"
import TinderCard from "react-tinder-card"
import db from "../firebase"
import "../PetCards.css"

const PetCards= () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        db
            .collection("pets")
            .onSnapShot((snapshot) =>
              setPets(snapshot.docs.map((doc) => doc.data()))
            )
    }, [])

    return(
        <div className="pet-card">
            <h1>Pet Cards</h1>
            {pets.map(pet => (
                // courtesy of react-tinder-card already includes swipe functionality
                <TinderCard
                    className="swipe"
                    key={pet.name}
                    preventSwipe={['up', 'down']}
                >
                    <div 
                        style={{ backgroundImage: `url(${pet.url})`}}
                        className="card">
                        <h4>{pet.name}</h4>
                    </div>
                </TinderCard>
            ))}
        </div>
    )
}

export default PetCards 