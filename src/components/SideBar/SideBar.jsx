import React from 'react'
import "./SideBar.scss"
import MenuIcon from '../../svg/MenuIcon'
import PlusIcon from '../../svg/PlusIcon'
import HomeIcon from '../../svg/HomeIcon'
import CloudStorage from '../../svg/CloudStorage'
import GridIcon from '../../svg/GridIcon'
import TwoArrow from '../../svg/TwoArrow'
import SearchList from '../../svg/SearchList'
import CodeBase from '../../svg/CodeBase'
import CopyIcon from '../../svg/CopyIcon'
import TeamIcon from '../../svg/TeamIcon'
import PartitionLine from '../../svg/PartitionLine'
import WindowIcon from '../../svg/WindowIcon'
import HelpIcon from '../../svg/HelpIcon'
import FeedBack from '../../svg/FeedBack'

const SideBar = () => {
    return (
        <div className='side-bar'>
            <MenuIcon />
            <PlusIcon />
            <div className='side-bar-child-icons'>
                <HomeIcon />
                <CloudStorage />
                <GridIcon />
                <TwoArrow />
                <SearchList />
                <CodeBase />
                <CopyIcon />
                <TeamIcon />
                <PartitionLine />
                <WindowIcon />
                <HelpIcon />
                <FeedBack />
            </div>
        </div>
    )
}

export default SideBar;
