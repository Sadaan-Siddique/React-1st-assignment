import React from 'react'
import style from './style.css'
import Nav_ul from './Nav_ul'
import IMG from './imges/Logo.jpg'
function Nav() {
    return (
        <React.Fragment>
            <nav>
                <img src={IMG} alt="" />        
                <p className="para"> STATE AGENCY</p>
                <Nav_ul />
            </nav>
        </React.Fragment>
    )
}

export default Nav