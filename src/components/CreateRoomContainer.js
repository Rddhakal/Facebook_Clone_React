import React from 'react'
import '../styles/CreateRoomContainer.css'
import CreateRoomUsers from './CreateRoomUsers'
import data from '../data'

const CreateRoomContainer = () => {
	return (
		<>
			<div class="create-room-container">
				<button class="btn">Create Room</button>

				{
					data.map((e) => {
						return (
							<CreateRoomUsers userIcon={e.profile} />
						)
					})
				}
			</div>
		</>
	)
}

export default CreateRoomContainer