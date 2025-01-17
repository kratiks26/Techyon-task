import React from 'react'
import "./Header.scss"
import CompanyLOGO from '../../svg/CompanyLOGO'
import SearchIcon from '../../svg/SearchIcon'
import SettingsIcon from '../../svg/SettingsIcon'
import Announcement from '../../svg/Announcement'
import Notification from '../../svg/Notification'
import IconImage from '../../Images/unsplash_OhKElOkQ3RE.png'
import DownArrow from '../../svg/DownArrow'


const Header = () => {
    return (
        <div className='page-header'>
            <div className='header-title'>
                <CompanyLOGO />
            </div>
            <div className='header-content'>
                <div><SearchIcon /></div>
                <div><SettingsIcon /></div>
                <div><Announcement /></div>
                <div><Notification /></div>
                <div className='user-options'><img className='icon-image' src={IconImage} alt="Descriptive text" /> <DownArrow /> </div>
            </div>
        </div>
    )
}

export default Header;
