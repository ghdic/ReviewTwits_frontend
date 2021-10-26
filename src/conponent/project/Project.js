import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import {useHistory} from "react-router-dom";
import {defaultHeaders} from "../../config/clientConfig";

const ProjectStlyed = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #3f3752;
  
  .container {
    position: relative;
    width: 1200px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    
    
    
    
  }
`

function Project() {

    const history = useHistory()
    const [project, setProject] = useState([])
    const some_icon = {
        'shopping':'bag-handle-outline',
        'movie':'videocam-outline',
        'search':'search-outline',
        'stock':'bar-chart-outline',
        'credit':'card-outline',
        'game':'game-controller-outline',
        'art':'color-palette-outline'
    }

    useEffect(() => {

        const requestOptions = {
            method: "GET",
            headers: defaultHeaders,
        }
        fetch(`http://localhost:8080/project`, requestOptions)
            .then(response => response.json())
            .then(data => {
                if(data.length !== 0) {
                    setProject(data)
                }
            })

    }, [])
  return (
    <ProjectStlyed>
        <div className="container">
           <ProjectCard onClick={() => history.push('/project/create')} color='#afafaf' icon='add-circle-outline' project_name='Add Project' summary='새로운 프로젝트를 생성해보세요!'/>
            {
                project.map((item, index) => (
                    <ProjectCard key={index} color={item.color} icon={some_icon[item.category]} project_name={item.projectName} project_id={item.projectId} summary={item.summary} onClick={() => history.push('/projects/' + item.projectId)}/>
                ))
            }

        </div>

    </ProjectStlyed>
  );
}

export default Project;