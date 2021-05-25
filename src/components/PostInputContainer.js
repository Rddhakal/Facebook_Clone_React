import React from 'react'
import '../styles/PostInputContainer.css'
import logo from '../logo.png'
import VideoCallOutlinedIcon from '@material-ui/icons/VideoCallOutlined';
import PhotoLibraryOutlinedIcon from '@material-ui/icons/PhotoLibraryOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';

const PostInputContainer = () => {
    return (
        <>
            <div className="post-input-container">
                <div className="post-input-section">
                    <img src={logo} alt="" className="user-icon" />
                    <div className="input-container">
                        <input type="text" placeholder="What's on your mind, Rupesh?" />
                    </div>
                </div>
                <hr />
                <div className="option-btn">
                    <div className="option">
                        <VideoCallOutlinedIcon />
                        <p>Live Video</p>
                    </div>
                    <div className="option">
                        <PhotoLibraryOutlinedIcon />
                        <p>Photo/Video</p>
                    </div>
                    <div className="option">
                        <SentimentSatisfiedOutlinedIcon />
                        <p>Feeling/Activity</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostInputContainer