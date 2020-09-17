import React from 'react'
import Header from "./components/Header"
import { Link } from 'react-router-dom'

const Landing = (props) => {
    return (
        <div>
           <ul className="landing">
                    { props.currentUser ? 
                    // when the user is logged in 
                    <>
                    < Header />
                    </>
                    :
                    // when the user is not logged in 
                    <>
                    <Link to={'/signUp'}>Sign Up</Link> {' | '}
                    <Link to={'/login'}>Login</Link>    
                    </>
                }
                </ul>
        </div>
    )
}

export default Landing