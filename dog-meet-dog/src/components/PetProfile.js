import React, { Component } from "react"
//import TinderCard from "react-tinder-card"
import "../Profile.css"
//import PetCards from "./PetCards"

class PetProfile extends Component {
    state = {
        pet: localStorage.getItem('uid'),
    }
    componentDidMount() {
        this.fetchdata()
    }
    render() {
    return (
        <div>
            <h3>Profile Page </h3>
            <h3>{ this.state.pet.name }</h3>
            <p>{ this.state.pet.bio }</p>
            <img src="url" alt=""/>
        </div>
    )
    }
}

export default PetProfile
