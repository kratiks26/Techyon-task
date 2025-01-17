import React, { useState } from 'react'
import "./ProjectOverview.scss"

import Filters from '../Filters/Filters';
import AllProjectKanban from '../AllProjectKanban/AllProjectKanban';
import AllTaskKanban from '../AllTaskKanban/AllTaskKanban';

const ProjectOverview = () => {
  const [toggleSectionIsActive, setToggleSectionIsActive] = useState(1);
  const projectName = ["All Project", "Project1", "Project2"];
  const taskName = ["All Task", "Task1"]
  const projectData = [
    {
      Owner: "Techyon",
      Tasks: 40,
      Status: "Not Started",
      StartDate: "29/10/2024",
      EndDate: "29/10/2025",
      Department: "Finance",
      ProjectLead: "Krishna",
      DevCategory: "Web Application",
      ProjectClassification: "Project Classification",
      Client: "Project Classification",
      Filescount: 20,
      IssuesTracking: "Issues Tracking"
    },
    {
      Owner: "Techyon",
      Tasks: 70,
      Status: "In Progress",
      StartDate: "29/10/2024",
      EndDate: "29/10/2025",
      Department: "Finance",
      ProjectLead: "Krishna",
      DevCategory: "Web Application",
      ProjectClassification: "Project Classification",
      Client: "Project Classification",
      Filescount: 20,
      IssuesTracking: "Issues Tracking"
    },
    {
      Owner: "Techyon",
      Tasks: 85,
      Status: "Completed",
      StartDate: "29/10/2024",
      EndDate: "29/10/2025",
      Department: "Finance",
      ProjectLead: "Krishna",
      DevCategory: "Web Application",
      ProjectClassification: "Project Classification",
      Client: "Project Classification",
      Filescount: 20,
      IssuesTracking: "Issues Tracking"
    },
    {
      Owner: "Techyon",
      Tasks: 50,
      Status: "Not Started",
      StartDate: "29/10/2024",
      EndDate: "29/10/2025",
      Department: "Finance",
      ProjectLead: "Krishna",
      DevCategory: "Web Application",
      ProjectClassification: "Project Classification",
      Client: "Project Classification",
      Filescount: 20,
      IssuesTracking: "Issues Tracking"
    },
    {
      Owner: "Techyon",
      Tasks: 20,
      Status: "Archive",
      StartDate: "29/10/2024",
      EndDate: "29/10/2025",
      Department: "Finance",
      ProjectLead: "Krishna",
      DevCategory: "Web Application",
      ProjectClassification: "Project Classification",
      Client: "Project Classification",
      Filescount: 20,
      IssuesTracking: "Issues Tracking"
    },
    {
      Owner: "Techyon",
      Tasks: 60,
      Status: "In Progress",
      StartDate: "29/10/2024",
      EndDate: "29/10/2025",
      Department: "Finance",
      ProjectLead: "Krishna",
      DevCategory: "Web Application",
      ProjectClassification: "Project Classification",
      Client: "Project Classification",
      Filescount: 20,
      IssuesTracking: "Issues Tracking"
    },
    {
      Owner: "Techyon",
      Tasks: 95,
      Status: "Completed",
      StartDate: "29/10/2024",
      EndDate: "29/10/2025",
      Department: "Finance",
      ProjectLead: "Krishna",
      DevCategory: "Web Application",
      ProjectClassification: "Project Classification",
      Client: "Project Classification",
      Filescount: 20,
      IssuesTracking: "Issues Tracking"
    },
    {
      Owner: "Techyon",
      Tasks: 10,
      Status: "Not Started",
      StartDate: "29/10/2024",
      EndDate: "29/10/2025",
      Department: "Finance",
      ProjectLead: "Krishna",
      DevCategory: "Web Application",
      ProjectClassification: "Project Classification",
      Client: "Project Classification",
      Filescount: 20,
      IssuesTracking: "Issues Tracking"
    },
    {
      Owner: "Techyon",
      Tasks: 30,
      Status: "Archive",
      StartDate: "29/10/2024",
      EndDate: "29/10/2025",
      Department: "Finance",
      ProjectLead: "Krishna",
      DevCategory: "Web Application",
      ProjectClassification: "Project Classification",
      Client: "Project Classification",
      Filescount: 20,
      IssuesTracking: "Issues Tracking"
    },
    {
      Owner: "Techyon",
      Tasks: 45,
      Status: "In Progress",
      StartDate: "29/10/2024",
      EndDate: "29/10/2025",
      Department: "Finance",
      ProjectLead: "Krishna",
      DevCategory: "Web Application",
      ProjectClassification: "Project Classification",
      Client: "Project Classification",
      Filescount: 20,
      IssuesTracking: "Issues Tracking"
    },
    {
      Owner: "Techyon",
      Tasks: 80,
      Status: "Completed",
      StartDate: "29/10/2024",
      EndDate: "29/10/2025",
      Department: "Finance",
      ProjectLead: "Krishna",
      DevCategory: "Web Application",
      ProjectClassification: "Project Classification",
      Client: "Project Classification",
      Filescount: 20,
      IssuesTracking: "Issues Tracking"
    },
    {
      Owner: "Techyon",
      Tasks: 55,
      Status: "Not Started",
      StartDate: "29/10/2024",
      EndDate: "29/10/2025",
      Department: "Finance",
      ProjectLead: "Krishna",
      DevCategory: "Web Application",
      ProjectClassification: "Project Classification",
      Client: "Project Classification",
      Filescount: 20,
      IssuesTracking: "Issues Tracking"
    }
  ];

  return (
    <div className='project-overview'>
      <div className='project-header-container'>
        <div className='Project-header'>
          <div className='project-title-button'>
            Projects
            <div className='add-project'>
              + Projects
            </div>
          </div>
          <div className='right-toggle-section'>
            <span className={`toggle-section ${(toggleSectionIsActive === 0) && 'toggle-section-isActive'}`} onClick={() => (toggleSectionIsActive === 1 ? setToggleSectionIsActive(0) : "")} >
              Dashboarad
            </span>
            /
            <span className={`toggle-section ${(toggleSectionIsActive === 1) && 'toggle-section-isActive'}`} onClick={() => (toggleSectionIsActive === 0 ? setToggleSectionIsActive(1) : "")} >
              Project Overview
            </span>
          </div>
        </div>
        <div className='all-project'>
          <Filters projectName={projectName} />
          <br />
          <AllProjectKanban projectData={projectData} />
        </div>


      </div>
      <div className='all-Task'>
        <Filters projectName={taskName} />
        <br />
        <AllTaskKanban projectData={projectData} />
      </div>
    </div>
  )
}

export default ProjectOverview;



