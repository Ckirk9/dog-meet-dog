import React, { Component } from "react"
import PetModel from "../models/pet"
import PetCards from "../components/PetCards"

class Show extends Component { 
        state = {
            pet: {},
            id: this.props.match.params.id
        }
        
        componentDidMount() {
            this.fetchData()
        }
        
        fetchData() {
            PetModel.show(this.state.id).then(data => {
                console.log(data)
                this.setState({ pet: data.pet})
            })
        }
        
        render() {
            return (
                <div>
                <PetCard {...this.state.pet }/>
            </div>
        )
    }
}

export default Show
