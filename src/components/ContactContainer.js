import React from 'react'
import '../styles/ContactContainer.css'
import ContactOption from './ContactOption'
import data from '../data'
import VideoCallOutlinedIcon from '@material-ui/icons/VideoCallOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';

const ContactContainer = () => {
    return (
        <>
            <div className="contact-container">
                <div className="contact-header">
                    <p>Contacts</p>
                    <div className="contact-header-right">
                        <VideoCallOutlinedIcon />
                        <SearchOutlinedIcon />
                        <MoreHorizOutlinedIcon />
                    </div>
                </div>
                {
                    data.map((e) => {
                        return (
                            <ContactOption userName={e.userName} userIcon={e.profile} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default ContactContainer