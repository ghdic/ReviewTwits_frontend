import React, {useState, useEffect} from 'react';
import {Avatar} from "@material-ui/core";
import defaultProfile from '../../images/default_userprofile.jpg'
import styled from "styled-components";
import all_image from '../../images/all.jpg'

const StatusBarStyled = styled.div`
  .statusbar_container {
    height: 120px;
    width: 650px;
    background-color: white;
    border: 1px solid #dbdbdb;
    margin-top: 25px;
    display: flex;
    overflow-x: scroll;
    padding: 0px 20px;
  }

  .statusbar_container::-webkit-scrollbar {
    display: none;
  }

  .statusbar_status {
    min-width: 55px;
    min-height: 55px;
    border: 1px solid #D2D2D2;
    cursor: pointer;
  }

  .status {
    margin: 25px 10px;
  }

  .statusbar_text {
    font-size: 12px;
    max-width: 50px;
    text-align: center;
    overflow-x: hidden;
    text-overflow: ellipsis;
  }

  .statusbar_upload {
    margin: 30px 20px 30px 30px;
  }
`

function StatusBar({setReviewData}) {
    let [statusList, setStatusList] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8080/user`)
            .then(response => response.json())
            .then(data => {
                setStatusList(data);
            })
    }, [])

  const selectAllReview = () => {
    fetch(`http://localhost:8080/review`)
      .then(response => response.json())
      .then(data => {
          setReviewData(data);
      })
  }

    const selectUserReview = (uid) => {
      fetch(`http://localhost:8080/review/user/${uid}`)
        .then(response => response.json())
        .then(data => {
            setReviewData(data);
        })
    }

  return (
    <StatusBarStyled>
        <div className="statusbar_container">
          <div className="status">
            <Avatar className="statusbar_status" onClick={selectAllReview} src={all_image} />
            <div className="statusbar_text">
            </div>
          </div>
            {
                statusList.map((item, index)=> (
                    <div className="status" key={index}>
                        <Avatar className="statusbar_status" onClick={() => selectUserReview(item.uid)} src={item.profileImage === "" ? defaultProfile:item.profileImage} />
                        <div className="statusbar_text">
                            {item.nickName}
                        </div>
                    </div>
                ))
            }

        </div>
    </StatusBarStyled>
  );
}

export default StatusBar;