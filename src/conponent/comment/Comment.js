import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Avatar} from "@material-ui/core";
import {defaultHeaders} from "../../config/clientConfig";
import qs from 'qs';


const CommentStyle = styled.div`
  position: relative;
  display: flex;
  align-content: space-around;

  .card {
    width: 578px;
    background: #222033;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 60px 0px 180px 0;

    .title {
      color: #ffffff;
      font-size: 22px;
      margin-left: 35px;
    }

    .search-wrapper {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 23px;
        height: 23px;
        position: absolute;
        left: 80px;
        color: #8c8aa7;
      }

      input[type="text"] {
        width: 450px;
        height: 70px;
        background: #262538;
        border: 1px solid #49485d;
        border-radius: 10px;
        margin: 18px 0px;
        box-sizing: border-box;
        padding-left: 55px;
        font-size: 18px;
        color: #8c8aa7;
        cursor: text;

        &:focus {
          outline: none !important;
        }
      }
    }

    .tags-wrapper {
      max-height: 130px;
      margin: 35px;

      .tags-header {
        color: #ffffff;
        font-size: 22px;
        margin-bottom: 14px;
      }

      .tags-container {
        .tag {
          display: inline-flex;
          background: #1d1c2d;
          color: #8c8aa7;
          border-radius: 5px;
          padding: 12px;
          margin: 10px 3px;
          cursor: pointer;
        }

        .selected {
          background: #8780f8;
          color: #ffffff;
        }
      }
    }

    .reviews-list {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .review-card {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 450px;
        background: #2c2b3f;
        border-radius: 10px;
        margin: 20px 0px;
        padding: 20px;

        .review-header {
          display: flex;
          align-items: center;
          justify-content: space-around;
          color: #ffffff;
          font-weight: bold;

          .name-group {
            display: flex;
            align-items: center;

            .initials {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 48px;
              height: 48px;
              margin-right: 12px;
              border-radius: 50%;
            }
          }

          .rating {
            i {
              color: #f3d779;
            }
          }
        }
        
        .review_image {
          img {
            width:300px;
          }
        }

        .review-description {
          color: #ffffff;
          font-weight: 400;
          margin: 0px 45px;
        }

        .review-details {
          display: flex;
          justify-content: space-between;
          margin: 0px 45px;
          align-items: center;
          color: #8c8aa7;

          .share-group {
            display: flex;
            padding: 8px;
            border: 1px solid #1f1e2d;
            border-radius: 5px;
            cursor: pointer;

            i {
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
`

function Comment({ location }) {

    const judgeEmotion = (emotion) => {
        if (emotion >= 0.5) {
            return "[" + (emotion * 100.0).toFixed(2) + "% 확률로 긍정적인 리뷰입니다😀" + "]"
        } else {
            return "[" + ((1.0 - emotion) * 100).toFixed(2) + "% 확률로 부정적인 리뷰입니다😠" + "]"
        }
    }

    const [reviewList, setReviewList] = useState([])

    useEffect(() => {
        document.body.style.width = 'auto'
        document.body.style.height = 'auto'
        document.body.style.minHeight = 'auto'
        document.querySelector("#root").style.width = 'auto'
        document.querySelector("#root").style.height = 'auto'

        const script = document.createElement('script')
        script.src = '/js/comment.js';
        script.async = true;
        document.body.appendChild(script)

        const query = qs.parse(location.search, {
            ignoreQueryPrefix: true
        })
        let payload = {
            "path":query.path
        }

        const requestOptions = {
            method: "POST",
            headers: defaultHeaders,
            body: JSON.stringify(payload)
        }
        fetch(`http://localhost:8080/review/path`, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setReviewList(data)
            })
    }, [])

  return (
      <CommentStyle>
          <div className="card">
              <div className="title">Reviews</div>
              <div className="search-wrapper">
                  <img id="search-icon" src="https://assets.codepen.io/1839803/search-icon.svg"/>
                  <input id="search-field" type="text" placeholder="Search reviews"/>
              </div>
              <div className="tags-wrapper">
                  <div className="tags-header">Tags</div>
                  <div className="tags-container">
                      <div className="tag">Experience</div>
                      <div className="tag">Quality</div>
                      <div className="tag selected">Design</div>
                      <div className="tag">Size</div>
                      <div className="tag">Features</div>
                      <div className="tag">Value</div>
                      <div className="tag">Replacement</div>
                  </div>
              </div>
              <div className="reviews-list">
                  {
                      reviewList.map((item, index) => (
                          <div key={index} className="review-card">
                              <div className="review-header">
                                  <div className="name-group">
                                      <Avatar src={item.user.imagePath} className="initials" />
                                      <p>{item.user.nickname}</p>
                                  </div>
                                  <div className="rating">
                                      {
                                          Array.from(Array(item.score), (e, i) => (
                                              <i id='one' className="fas fa-star"></i>
                                          ))
                                      }
                                  </div>
                              </div>

                              <div className="review-description">
                                  <div className="review_image">
                                      <img src={item.imagePath} alt=""/>
                                  </div>
                                  {item.content}
                                  <p>{judgeEmotion(item.emotion)}</p>
                              </div>
                              <div className="review-details">
                                  <div className="review-date">{item.createDate}</div>
                                  <div className="share-group">
                                      <i className="fas fa-share-alt"></i>
                                      <p>Share</p>
                                  </div>
                              </div>
                          </div>
                      ))
                  }
              </div>
          </div>
      </CommentStyle>
  );
}

export default Comment;