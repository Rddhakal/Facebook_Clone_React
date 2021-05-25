import React from 'react'
import '../styles/SideBarContainer.css'
import SideBarOption from './SideBarOption'
import userLogo from '../logo.png'

const SideBarContainer = () => {
    return (
        <>
            <div className="sidebar">
                <SideBarOption name="Rupesh Dhakal RD" url={userLogo} />
                <SideBarOption name="COVID-19 Information Center" url="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/5rR6LRpNc5u.png" />
                <SideBarOption name="Firends" url="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png" />
                <SideBarOption name="Group" url="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png" />
                <SideBarOption name="Marketplace" url="https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png" />
                <SideBarOption name="Watch" url="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png" />
                <SideBarOption name="Event" url="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/8wTx0Eu2vRq.png" />
                <SideBarOption name="Memoeries" url="https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/VPndBxotRgH.png" />
                <SideBarOption name="Saved" url="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png" />
                <SideBarOption name="Pages" url="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png" />
            </div>
        </>
    )
}

export default SideBarContainer
