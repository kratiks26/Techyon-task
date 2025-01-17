import React, { useState } from 'react'
import './Filters.scss'
import DropDownIcon from '../../svg/DropDownIcon';
import ListView from '../../svg/ListView';
import GridView from '../../svg/GridView';
import FilterIcon from '../../svg/FilterIcon';
import ThreeDotsForOptions from '../../svg/ThreeDotsForOptions';

const Filters = ({projectName}) => {
    // const { ProjectName } = props
    const [projectOverview, setProjectOverview] = useState("kanban");
    const [selectedProject, setSelectedProject] = useState(0);
    const [isDropDownActive, setIsDropDownActive] = useState(false)
    return (
        <div className='filters-container'>
            <div className='project-drop-down'>
                <div className='project-container'>{projectName[selectedProject]}
                    <div className={`project-box ${ isDropDownActive && "project-box-active"}`}>
                        {
                            projectName.map((value, index) => {
                                return (
                                    <div className='project-options' onClick={()=>setSelectedProject(index)}>
                                        {value}
                                    </div>
                                )
                            })
                        }

                    </div></div> <div onClick = {()=> setIsDropDownActive(!isDropDownActive)}> <DropDownIcon /></div> 

            </div>
            <div className='right-side-options'>
                <div className='overview-options'>
                    <div className={`list-Kanban-button ${projectOverview == "list" && "isActive"}`} onClick={() => (projectOverview == "kanban" ? setProjectOverview("list") : "")}>
                        <ListView />
                    </div>
                    <div className={`list-Kanban-button ${projectOverview == "kanban" && "isActive"}`} onClick={() => (projectOverview == "list" ? setProjectOverview("kanban") : "")}>
                        <GridView />
                    </div>
                </div>
                <div className='other-two'>
                    <div className={`filter-option ${projectOverview == "kanban" ? " filter-disable" : ""} `}>
                        <FilterIcon />
                    </div>
                    <div className='three-dots'> <ThreeDotsForOptions /> </div>
                </div>
            </div>
        </div>
    )
}

export default Filters
