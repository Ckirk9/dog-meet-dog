import React from 'react'
import { Switch, Route } from 'react-router-dom'


import PetProfile from "../components/PetProfile"
import PetCards from "../components/PetCards"
import LikeButtons from "../components/LikeButtons"
import Messages from "../components/Messages"
import MessageShow from "../components/MessageShow"

// import Profile from '../containers/Profile'
 import Login from '../pages/Login'
import SignUp from '../pages/SignUp'


export default (props) => {
    return (
    <Switch>
        <Route path="/message/:petName">
            <MessageShow />
        </Route>
        <Route path="/message">
            <Messages />
        </Route>
        <Route exact path='/'> 
            <PetCards />
            <LikeButtons />
        </Route>
        <Route path="/profile">
            <PetProfile />
        </Route>
        <Route path='/SignUp' component={ SignUp } />

        <Route path='/login' render={ (routeProps) => {
            return <Login
            {...routeProps}
            storePet={ props.storePet }
            />
        }} />
    </Switch>)
}