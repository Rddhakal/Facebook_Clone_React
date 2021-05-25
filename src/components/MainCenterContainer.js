import React from 'react'
import '../styles/MainCenterContainer.css'
import StoriesContainer from './StoriesContainer'
import PostInputContainer from './PostInputContainer'
import CreateRoomContainer from './CreateRoomContainer'
import AllPostContainer from './AllPostContainer'

const MainCenterContainer = () => {
	return (
		<>
			<div className="main-container">
				<StoriesContainer />
				<PostInputContainer />
				<CreateRoomContainer />
				<AllPostContainer />
			</div>
		</>
	)
}

export default MainCenterContainer