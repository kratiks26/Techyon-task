import React from 'react'

import "./Dashboard.scss"


import Header from '../header/Header'
import SideBar from '../SideBar/SideBar'
import ProjectOverview from '../ProjectOverview/ProjectOverview';


const Dashboard = () => {
    return (
        <div className='dashboard-main-container'>
            <Header/>
            <SideBar/>
            <ProjectOverview/>
        </div>
    )
}

export default Dashboard;
 