import React, { Component } from 'react'
import PetModel from '../models/pet'
import "../SignUp.css"

class SignUp extends Component {
    state = {
        username: '',
        password: '',
        password2: '', 
        bio: '',
        pictureUrl: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()

        //confirm created password matches
        if (this.state.password !== this.state.password2) return false
        PetModel.create(this.state)
        .then(data => {
            // clear state in order to clear form fields
            this.setState({
                username: '',
                password: '',
                password2: '',
                bio: '',
                pictureUrl: ''
            })
            // store the pet in the session
            this.props.storePet(data.pet)
            // direct to home page
            this.props.history.push('/')
        })
    }

    render() {
        return (
            <div className="signup">
                <h3>Sign Up</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="signup">
                        <label className="signup" htmlFor="username">Username</label>
                        <input className="input-field"
                        onChange={this.handleChange}
                        type="text"
                        id="username"
                        name="username"
                        value={this.state.username}
                        />
                    </div>
                    <div className="signup">
                    <label className="signup" htmlFor="password">Password</label>
                    <input className="input-field"
                        onChange={this.handleChange}
                        type="password"
                        id="password"
                        name="password"
                        value={this.state.password} />
                </div>
                <div className="signup">
                    <label className="signup" htmlFor="password2">Confirm Password</label>
                    <input className="input-field"
                        onChange={this.handleChange}
                        type="password"
                        id="password2"
                        name="password2"
                        value={this.state.password2} />
                </div>
                <div className="signup">
                        <label className="signup" htmlFor="text-area">About Me</label>
                        <input className="input-field"
                        onChange={this.handleChange}
                        type="text-area"
                        id="bio"
                        name="bio"
                        value={this.state.bio}
                        />
                    </div>
                    <div className="signup">
                        <label className="signup" htmlFor="img">Picture</label>
                        <input className="input-field"
                        onChange={this.handleChange}
                        type="img"
                        id="pictureUrl"
                        name="pictureUrl"
                        value={this.state.pictureUrl}
                        />
                    </div>
                    <button className="submit-btn" type="submit">Sign Up</button>
                </form>
            </div>
        )
    }
}

export default SignUp