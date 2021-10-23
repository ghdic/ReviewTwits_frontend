import React from 'react';
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import {useHistory} from "react-router-dom";

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

  return (
    <ProjectStlyed>
        <div className="container">
           <ProjectCard onClick={() => history.push('/project/create')} color='#afafaf' icon='add-circle-outline' project_name='Add Project' summary='새로운 프로젝트를 생성해보세요!'/>
           <ProjectCard color='#4eb7ff' icon='search-outline' project_name='Search' project_id='342341fabd11' summary='검색엔진 리뷰 전용'/>
           <ProjectCard color='#fd6494' icon='bar-chart-outline' project_name='BarChart' project_id='df124kzd12' summary='주식 앱 리뷰 하기 위해'/>
           <ProjectCard color='#43f390' icon='card-outline' project_name='Card' project_id='jf2341dd' summary='쇼핑몰 결제 관리 리뷰'/>
           <ProjectCard color='#ffb508' icon='videocam-outline' project_name='VideoCam' project_id='dff1123a' summary='줌 리뷰 관리' />
           <ProjectCard color='#37ba82' icon='game-controller-outline' project_name='Game' project_id='4324dfdad' summary='게임 리뷰 조사'/>
           <ProjectCard color='#cd57ff' icon='color-palette-outline' project_name='Art' project_id='422fkfk44' summary='미술의 영적 감각을 담아서 리뷰를 하는것 아무튼 길게 써보고 싶은걸?'/>
        </div>

    </ProjectStlyed>
  );
}

export default Project;