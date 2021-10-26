import React, {useContext} from 'react';
import styled from "styled-components";
import idea_img from '../../images/idea_icon.png'
import api_img from '../../images/api_icon.png'
import help_img from '../../images/help_icon.png'
import {Link} from "react-router-dom";
import HelpCard from "./HelpCard";
import {UserContext} from "../AuthProvider";

const ProjectHelpStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background: #3F3752;
  padding-top: 15px;
  
  h2 {
    color: #fff;
    margin: 30px;
  }
  
  .info {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1200px;
    flex-wrap: wrap;
  }
`

const card_info = [
    {
        icon:idea_img,
        title: 'ReviewTwits 적용하기',
        content: 'ReviewTwits는 간편하게 리뷰 시스템을 웹사이트에 추가하는 시스템 입니다. 프로젝트 설정에서 제공하는 임베디드 자바스크립트 소스를 본인의 웹사이트에 추가하시면 손쉽게 리뷰가 추가되시는 것을 확인 할 수 있습니다. 그리고 다양한 카테고리와 스타일의 리뷰를 제공합니다. 또한 댓글 스팸 필터링, 감정 분석 등의 AI 전문 기능도 지원합니다',
        link: '/project',
        link_content: '프로젝트 바로가기'
    },
    {
        icon:api_img,
        title: 'API 사용법 보러가기',
        content: 'API사용이 필요하신가요? 커스텀UI를 Reviewtwits와 연동하고 싶으시다면 API 사용법을 알아보세요. 쉽고 간단하게 기능을 붙일 수 있습니다. 또한 따로 제공되지 않는 댓글 분석이나 상품 선호도에 대한 정보도 API로 접근하여 받아 올 수 있습니다. 준비물은 오직 project setting에서 볼 수 있는 public key 뿐 입니다.',
        link: '/api',
        link_content: 'API Docs 바로가기'
    },
    {
        icon:help_img,
        title: 'Q & A',
        content: '궁금하신점이 있다면 지금 바로 문의주세요. 저희 Reviewtwits 고객센터는 24시간 운영합니다. 커스텀 Price나 협업을 원하시는 분께서는 홈페이지 Contact Us에 문의를 남겨주시면 감사드리겠습니다. Q & A페이지에 있는 답변으로도 해결 할 수 없는 문제인 경우 고객센터 070-1234-5678으로 연락주시면 친절하게 답변 드리겠습니다.',
        link: '/home',
        link_content: 'Q & A 바로가기'
    }
]

function ProjectHelp() {
    const {user} = useContext(UserContext);
    console.log(user)
  return (
    <ProjectHelpStyled>
        <h2>프로젝트 생성이 완료되었습니다!</h2>
        <div className="info">
            {
                card_info.map((item, index) => (
                    <HelpCard key={index} icon={item.icon} title={item.title} content={item.content} link={item.link} link_content={item.link_content} />
                ))
            }
        </div>
    </ProjectHelpStyled>
  );
}

export default ProjectHelp;