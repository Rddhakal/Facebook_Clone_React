import React from 'react'
import '../styles/ContactOption.css'

const ContactOption = ({ userName, userIcon }) => {
    return (
        <>
            <div className="contact-option">
                <img src={userIcon} alt="" className="user-icon" />
                <p className="user-name">{userName}</p>
            </div>
        </>
    )
}

export default ContactOption
