import React from 'react'
import '../styles/StoriesContainer.css'
import StoryCard from './StoryCard'
import data from '../data'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const StoriesContainer = () => {
    return (
        <>
            <div class="stories-container">
                {
                    data.map((e) => {
                        return (
                            <StoryCard userName={e.userName} userIcon={e.profile} img={e.imageURL} />
                        )
                    })
                }
                <div class="all-story-btn">
                    <ChevronRightIcon />
                </div>
            </div>
        </>
    )
}

export default StoriesContainer
