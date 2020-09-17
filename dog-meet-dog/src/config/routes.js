import React from 'react'
import { Switch, Route } from 'react-router-dom'


import PetProfile from "../components/PetProfile"
import PetCards from "../components/PetCards"
import LikeButtons from "../components/LikeButtons"
import Messages from "../components/Messages"
import MessageShow from "../components/MessageShow"
import PrivateRoute from "./PrivateRoute";

// import Profile from '../containers/Profile'
 import Login from '../pages/Login'
import SignUp from '../pages/SignUp'


export default (props) => {
    return (
    <Switch>
        <PrivateRoute path="/message/:petName">
            <MessageShow />
        </PrivateRoute>
        <PrivateRoute path="/message">
            <Messages />
        </PrivateRoute>
        <PrivateRoute exact path='/'> 
            <PetCards />
            <LikeButtons />
        </PrivateRoute>
        <PrivateRoute path="/profile">
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