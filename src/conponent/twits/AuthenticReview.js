import React, {useState} from 'react';
import styled from "styled-components";
import ReviewModal from "./ReviewModal";

const AuthenticReviewStyled = styled.div`
  width: 650px;
  height: 250px;
  background: #ffff00;
  font-size: 60px;
  margin: 20px 20px;
  border-radius: 20px;
  cursor: pointer;
`

function AuthenticReview({handleReviewData, report, deleteReportData}) {

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

  return (
    <AuthenticReviewStyled onClick={handleOpen}>
        구매하신 제품의 리뷰를 작성해보세요
        <ReviewModal open={open} handleClose={handleClose} handleReviewData={handleReviewData} certification={report} deleteReportData={deleteReportData} />
    </AuthenticReviewStyled>
  );
}

export default AuthenticReview;