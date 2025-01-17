import React from 'react'

import "./AllProjectKanban.scss"
import CardSvg from '../../svg/CardSvg'
import ProgressMeter from '../ProgressMeter/ProgressMeter'
import Calander from '../../svg/Calander'

const AllProjectKanban = ({ projectData }) => {

    return (
        <div className='project-section-kanban-container'>
            <div className='project-kanban-container'>
                <div className='status-bar '>
                    <div className='Status not-started'><span>In Progress</span> <span>2</span> </div>
                </div>
                <div className='project-ticket-container'>
                    {
                        projectData.filter((value) => value.Status == "Not Started").map((item, index) => {
                            return (
                                <div className='project-ticket' >
                                <div className='project-name-div'>
                                    <CardSvg /> <span className='title'>Project Name</span>
                                    </div>
                                    <ProgressMeter value = {item.Tasks} min ={0} max ={100}/>

                                    <div className='Date'><Calander/> {item.StartDate} - {item.EndDate}</div>

                                    

                            </div>


                            )
                        })
                    }
                </div>

                <div className='view-more'>
                    view more
                </div>
                <br />

            </div>
            <div className='project-kanban-container'>
                <div className='status-bar '>
                    <div className='Status in-progress'><span> In Progress</span> <span>2</span> </div>
                    <div>
                    </div>
                </div>
                <div className='project-ticket-container'>
                    {
                        projectData.filter((value) => value.Status == "In Progress").map((item, index) => {
                            return (
                                <div className='project-ticket' >
                                    <div className='project-name-div'>
                                        <CardSvg /> <span className='title'>Project Name</span>
                                        </div>
                                        <ProgressMeter value = {item.Tasks} min ={0} max ={100}/>

                                        <div className='Date'><Calander/> {item.StartDate} - {item.EndDate}</div>

                                        

                                </div>

                            )
                        })
                    }
                </div>

                <div className='view-more'>
                    view more
                </div>
                <br />

            </div>
            <div className='project-kanban-container'>
                <div className='status-bar '  >
                    <div className='Status archived'><span>Archived</span> <span>2</span> </div>
                </div>
                <div className='project-ticket-container'>
                    {
                        projectData.filter((value) => value.Status == "Archive").map((item, index) => {
                            return (
                                <div className='project-ticket' >
                                    <div className='project-name-div'>
                                        <CardSvg /> <span className='title'>Project Name</span>
                                        </div>
                                        <ProgressMeter value = {item.Tasks} min ={0} max ={100}/>

                                        <div className='Date'><Calander/> {item.StartDate} - {item.EndDate}</div>

                                        

                                </div>


                            )
                        })
                    }
                </div>

                <div className='view-more'>
                    view more
                </div>
                <br />

            </div>
            <div className='project-kanban-container'>
                <div className='status-bar '  >
                    <div className='Status completed'><span>Completed</span> <span>2</span> </div>
                </div>
                <div className='project-ticket-container'>
                    {
                        projectData.filter((value) => value.Status == "Completed").map((item, index) => {
                            return (
                                <div className='project-ticket' >
                                    <div className='project-name-div'>
                                        <CardSvg /> <span className='title'>Project Name</span>
                                        </div>
                                        <ProgressMeter value = {item.Tasks} min ={0} max ={100}/>

                                        <div className='Date'><Calander/> {item.StartDate} - {item.EndDate}</div>

                                        

                                </div>

                            )
                        })
                    }
                </div>

                <div className='view-more'>
                    view more
                </div>
                <br />
            </div>

        </div>
    )
}

export default AllProjectKanban
