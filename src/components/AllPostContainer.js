import React from 'react'
import '../styles/AllPostContainer.css'
import PostCard from './PostCard'
import data from '../data'

const AllPostContainer = () => {
	return (
		<>
			<div class="all-post-container">

				{
					data.map((e) => {
						return (
							<PostCard userName={e.userName} userIcon={e.profile} uploadTime={e.uploadTime} imgURL={e.imageURL} likes={e.likes} comments={e.comments} />
						)
					})
				}
			</div>
		</>
	)
}

export default AllPostContainer