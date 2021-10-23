import React from 'react';
import styled from "styled-components";
import WeirdCard from "./WeirdCard";

const PriceStyled = styled.section`
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #3c2846;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 40px;
  }
  
  .wrapper {
    padding: 30px 100px;
    background-color: #f5f5f5;
  }
`

function Price() {
  return (
    <PriceStyled>
        <div className="bg"></div>
        <div className="container">
            <WeirdCard icon_name="school-outline" title="Free Plan" price="$0 per month" color="linear-gradient(to bottom,#f2a0ff,#14fbf6)" content={['하루 최대 10,000페이지 뷰', 'Ad-Supported', '2개 프로젝트 생성가능']} />
            <WeirdCard icon_name="earth-outline" title="Plus Plan" price="$11 per month" color="linear-gradient(to bottom,#2200ff,#14fbf6)" content={['하루 최대 50,000페이지 뷰', 'Ad-Free', '5개 프로젝트 생성가능']} />
            <WeirdCard icon_name="rocket-outline" title="Pro Plan" price="$110 per month" color="linear-gradient(to bottom, #ffec61, #f321d7)" content={['하루 최대 250,000페이지 뷰', 'Ad-Free', '10개 프로젝트 생성가능', 'API 지원', '분석툴 지원']} />
            <WeirdCard icon_name="diamond-outline" title="Business Plan" price="Custom pricing" color="linear-gradient(to bottom, #24ff72, #9a4eff)" content={['SSO 통합', '프로젝트 생성 제한 없음', '페이지뷰 제한 없음', '통계 전문상담 서비스', '직접 댓글 관리 서비스']} />
        </div>
    </PriceStyled>
  );
}

export default Price;