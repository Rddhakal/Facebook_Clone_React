import React from 'react'
import '../styles/CreateRoomUsers.css'

const CreateRoomUsers = ({ userIcon }) => {
	return (
		<>
			<div class="users">
				<img src={userIcon} alt="" class="user-icon" />
			</div>
		</>
	)
}

export default CreateRoomUsers