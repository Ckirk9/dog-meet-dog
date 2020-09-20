import React from "react";
import "../Likes.css";
import TinderCard from 'react-tinder-card';
import { Link } from 'react-router-dom';

const Likes = ({pets, size}) => {
    return(
        <div className="like-cards">
            {/* conditional here so that you don't match with yourself */}
            { pets ? pets.map(pet => (
                <Link key={pet.username} to={`/profile/${pet.username}`}>
                    <TinderCard className="like-card" preventSwipe={['up', 'down', 'left', 'right']}>
                        <div className="like-img" style={{ backgroundImage: `url(${pet.pictureUrl})`}}></div>
                    </TinderCard>
                </Link>
            )) : null}
        </div>
    )
}

export default Likes;