import React from 'react';
import styled from "styled-components";

const ProjectCardStyled = styled.div`

    position: relative;
    width: 350px;
    height: 280px;
    background-color: #51446e;
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
    
    & .icon {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${props => props.color || '#4eb7ff'};
      transition: 0.5s;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2;
      transition-delay: 0.25s;
      
      & ion-icon {
        font-size: 5em;
        color: #fff;
        transition: 0.5s;
        transition-delay: 0.25s;
      }

      &:hover .icon {
        top: 30px;
        left: calc(50% - 40px);
        width: 80px;
        height: 80px;
        border-radius: 50%;

        & ion-icon {
          font-size: 2em;
        }
      }
    }

  &:hover .icon {
    top: 30px;
    left: calc(50% - 40px);
    width: 80px;
    height: 80px;
    border-radius: 50%;
    transition-delay: 0s;

    & ion-icon {
      font-size: 2em;
      transition-delay: 0s;
    }
  }

    .content {
      position: relative;
      padding: 20px;
      color: #fff;
      text-align: center;
      margin-top: 100px;
      z-index: 1;
      transform: scale(0);
      transition: 0.5s;
      transition-display: 0s;
      
      & h2 {
        margin-top: 10px;
        margin-bottom: 5px;
      }
      
      & p {
        width: 250px;
        margin: 0 auto;
        font-weight: 300;
        line-height: 1.5em;
        word-break: break-word;
      }
    }
  
    &:hover .content {
      transform: scale(1);
      transition-delay: 0.25s;
    }
`

function ProjectCard({color, icon, project_name, project_id, summary, onClick}) {

  return (
      <ProjectCardStyled color={color} onClick={onClick}>
          <div className="icon">
              <ion-icon name={icon}></ion-icon>
          </div>
          <div className="content">
              <h2>{project_name}</h2>
              {!project_id ? null:<p>Project ID: {project_id}</p>}
              <p>{summary}</p>
          </div>
      </ProjectCardStyled>
  );
}

export default ProjectCard;