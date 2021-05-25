import React from 'react'
import '../styles/SideBarOption.css'

const SideBarOption = ({ name, url }) => {
    return (
        <>
            <div className="sidebar-option">
                <img src={url} alt="" />
                <p>{name}</p>
            </div>
        </>
    )
}

export default SideBarOption
