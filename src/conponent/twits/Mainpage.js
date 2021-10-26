import React, {useState, useEffect} from 'react';
import Review from "./Review";
import uploadImage from '../../images/upload.png';
import styled from "styled-components";
import ReviewModal from "./ReviewModal";
import AuthenticReview from "./AuthenticReview";
import {defaultHeaders} from "../../config/clientConfig";

const MainpageStyled = styled.div`
  .mainpage_uploadicon {
    margin: 20px 20px;
    cursor: pointer;
  }

  .fileupload > input {
    display: none;
  }
  
  .post_upload {
    text-align: center;
    margin: 30px 15px 10px 15px;
    width: 650px;
    background-color: beige;
    border-radius: 20px;
  }
`

function Mainpage({reviewData, setReviewData}) {

    const [open, setOpen] = useState(false);
    const [reportList, setReportList] = useState([])
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    const handleReviewData = (data) => {
        setReviewData([data, ...reviewData]);
  }

    const updateReviewData = (data) => {
      let items = [...reviewData];
      items[items.findIndex(el => el.postId === data.postId)] = data;
      setReviewData(items);
    }

    const deleteReviewData = (data) => {
      let items = [...reviewData];
      items.splice(items.findIndex(el => el.postId === data.postId), 1);
        setReviewData(items);
    }

    const deleteReportData = (orderId) => {
        let items = [...reportList];
        items.splice(items.findIndex(el => el.orderId === orderId), 1);
        setReportList(items);
    }

    useEffect(() => {
        const requestOptions = {
            method: "GET",
            headers: defaultHeaders
        }
        fetch("http://localhost:8080/order/user/pending", requestOptions)
            .then(response => response.json())
            .then(data => {
                setReportList(data);
            })
            .catch(error => {

            })
    }, [])


  return (
    <MainpageStyled>
        <div className="post_upload">
            <img src={uploadImage} className="mainpage_uploadicon" onClick={handleOpen} alt=""/>
            <ReviewModal open={open} handleClose={handleClose} handleReviewData={handleReviewData} />
        </div>
        {
            reportList.map((item, index) => (
                <AuthenticReview key={index} handleReviewData={handleReviewData} report={item} deleteReportData={deleteReportData} />
            ))
        }

        {
            reviewData.map((item, index) => (
                <Review review={item} key={item.postId} updateReviewData={updateReviewData} deleteReviewData={deleteReviewData} />
            ))
        }
    </MainpageStyled>
  );
}

export default Mainpage;