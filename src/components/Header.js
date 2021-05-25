import React from 'react'
import '../styles/Header.css'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import logo from '../logo.svg'
import homeIcon from '../homeIcon.svg'
import videoIcon from '../videoIcon.svg'
import marketplaceIcon from '../marketplaceIcon.svg'
import groupIcon from '../groupIcon.svg'
import gameIcon from '../gameIcon.svg'
import userLogo from '../logo.png'
import bellIcon from '../bellIcon.svg'
import messengerIcon from '../messengerIcon.svg'

const Header = () => {
    return (
        <>
            <header>
                <div className="header-left">
                    <img src={logo} alt="" className="logo" />
                    <div className="search-container">
                        <SearchOutlinedIcon />
                        <input type="text" placeholder="Search Facebook" />
                    </div>
                </div>
                <div className="header-center">
                    <div class="header-center-option">
                        <img src={homeIcon} alt="" />
                    </div>
                    <div class="header-center-option">
                        <img src={videoIcon} alt="" />
                    </div>
                    <div class="header-center-option">
                        <img src={marketplaceIcon} alt="" />
                    </div>
                    <div class="header-center-option">
                        <img src={groupIcon} alt="" />
                    </div>
                    <div class="header-center-option">
                        <img src={gameIcon} alt="" />
                    </div>
                </div>
                <div className="header-right">
                    <div className="user-container">
                        <img src={userLogo} alt="" className="user-icon" />
                        <p className="user-name">Rupesh</p>
                    </div>
                    <div className="icons-btn">
                        <div className="icon-container">
                            <AddOutlinedIcon />
                        </div>
                        <div className="icon-container">
                            <img src={messengerIcon} alt="" />
                        </div>
                        <div className="icon-container">
                            <img src={bellIcon} alt="" />
                        </div>
                        <div className="icon-container">
                            <ArrowDropDownOutlinedIcon />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
