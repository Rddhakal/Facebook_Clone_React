import React from 'react'
import '../styles/StoryCard.css'

const StoryCard = ({ userName, userIcon, img }) => {
    return (
        <>
            <div className="story-card">
                <img src={img} alt="" className="story-img" />
                <img src={userIcon} alt="" className="user-icon" />
                <p className="user-name">{userName}</p>
            </div>

        </>
    )
}

export default StoryCard
