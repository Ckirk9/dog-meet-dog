import React, { Component } from 'react'
import PetModel from '../models/pet'
import "../Login.css"

class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        PetModel.login(this.state)
        .then(data => {
            if (!data.pet) {
                // set up alert about invalid 
                return false
            }
            this.props.storePet(data.pet)
            this.props.history.push('/')
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <form onSubmit={ this.handleSubmit }>
                <label htmlFor="username">Username</label>
                <input 
                    onChange={ this.handleChange }
                    type="username"
                    id="username"
                    name="username"
                    value={ this.state.username } />
                <label htmlFor="password">Password</label>
                <input 
                    onChange={this.handleChange} 
                    className="form-control form-control-lg" 
                    type="password" 
                    id="password" 
                    name="password" 
                    value={this.state.password} />
                <button className="submit-btn" type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Login 