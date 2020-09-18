import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PetProfile from "../components/PetProfile"
import Messages from "../components/Messages"
import MessageShow from "../components/MessageShow"
import PrivateRoute from "./PrivateRoute";

// import Profile from '../containers/Profile'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Home from '../pages/Home'


export default (props) => {
    const { currentPet } = props;
    return (
    <Switch>
        <PrivateRoute currentPet={currentPet} path="/message/:petName">
            <MessageShow />
        </PrivateRoute>
        <PrivateRoute currentPet={currentPet} path="/message">
            <Messages />
        </PrivateRoute>
        <PrivateRoute currentPet={currentPet} exact path='/'> 
            <Home />
        </PrivateRoute>
        <PrivateRoute currentPet={currentPet} path="/profile">
            <PetProfile />
        </PrivateRoute>
        <Route path='/SignUp' render={ (routeProps) => {
            return <SignUp
            {...routeProps}
            storePet={ props.storePet }/>}}
        />
        <Route path='/login' render={ (routeProps) => {
            return <Login
            {...routeProps}
            storePet={ props.storePet }
            />
        }} />
    </Switch>)
}