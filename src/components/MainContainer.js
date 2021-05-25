import React from 'react'
import '../styles/MainContainer.css'
import SideBarContainer from './SideBarContainer'
import MainCenterContainer from './MainCenterContainer'
import ContactContainer from './ContactContainer'

const MainContainer = () => {
    return (
        <>
            <main>
                <SideBarContainer />
                <MainCenterContainer />
                <ContactContainer />
            </main>
        </>
    )
}

export default MainContainer
