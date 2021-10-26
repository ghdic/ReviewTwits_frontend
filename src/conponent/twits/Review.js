import React, { useContext, useEffect, useRef, useState } from "react";
import {Avatar} from "@material-ui/core";
import love from '../../images/love.svg'
import comment from '../../images/comment.svg'
import share from '../../images/share.svg'
import styled from "styled-components";
import default_profile from '../../images/default_userprofile.jpg'
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import ReviewModal from "./ReviewModal";
import {UserContext} from "../AuthProvider";
import {defaultHeaders} from "../../config/clientConfig";
import medal_img from '../../images/medal.png'

const PostStyled = styled.div`

  border: 1px solid #dbdbdb;
  width: 650px;
  margin: 60px 15px;
  
  .post_container {
    width: 650px;
    border: 1px solid #dbdbdb;
    background-color: white;
    margin-top: 25px;
  }

  .post_header {
    height: 60px;
    border-bottom: 1px solid #dbdbdb;
    display: flex;
  }

  .post_image {
    min-width: 30px;
    min-height: 30px;
    margin: 10px;
  }
  
  .post_content {
    margin: 10px 10px 10px 20px;
    font-size: 20px;
    font-weight: 500;
  }

  .post_username {
    font-weight: bold;
    margin-top: 20px;
  }

  .post_reactimage {
    width: 25px;
    height: 25px;
    margin: 5px;
  }

  .post_comment {
    margin: 10px;
  }

  .post_commentbox {
    height: 56px;
    width: 98%;
    border: 1px solid #dbdbdb;
    font-size: 18px;
    padding-left: 10px;
  }
  
  .post_icon {
    width: 25px;
    height: 25px;
    margin: 20px 5px;
    color: cornflowerblue;
    cursor: pointer;
  }

  .comment_icon_wrap {
    display: inline-block;
    margin-left: 8px;
  }
  
  .comment_icon {
    position: relative;
    top: 8px;
    cursor: pointer;
  }
  
  .certification {
    width: 30px;
    height: 30px;
    margin: 20px 5px;
  }

  .tooltips {
    position: relative;
    display: block;
  }

  .tooltips .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;

    /* Position the tooltip */
    position: absolute;
    z-index: 1;
  }

  .tooltips:hover .tooltiptext {
    visibility: visible;
  }
`

function Review({review, updateReviewData, deleteReviewData}) {

    const [commentList, setCommentList] = useState([]);
    const [fixComment, setFixComment] = useState(0);
    const {user} = useContext(UserContext);
    const commentInput = useRef();
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen(true);
    }
    const handleClose = () => {
      setOpen(false);
    }

    useEffect(() => {
        fetch(`http://localhost:8080/comment/${review.reviewId}`)
            .then(response => response.json())
            .then(data => {
                setCommentList(data);
            })
    }, [review.reviewId])

    const submitComments = (event) => {
        if(event.key === "Enter") {
            let comment = event.currentTarget.value;
            if(comment !== null && comment !== undefined) {
                let payload = fixComment === 0 ? {
                    "reviewId": review.reviewId,
                    "uid": user.uid,
                    "content": comment
                } : {
                  "content": comment
                }

                const requestOptions = {
                    method: "POST",
                    headers: defaultHeaders,
                    body: JSON.stringify(payload)
                }
                let requestUrl = fixComment === 0 ? "http://localhost:8080/comment":`http://localhost:8080/comment/${fixComment}`;
                fetch(requestUrl, requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        if(fixComment === 0)
                          setCommentList([...commentList, data])
                        else {
                          let items = [...commentList];
                          items[items.findIndex(el => el.commentId === data.commentId)] = data;
                          setCommentList(items)
                        }
                        event.target.value = ""
                        setFixComment(0)
                    })
                    .catch(error => {

                    })
            }
        }
    }

    const onClickLike = () => {

      const requestOptions = {
        method: "POST",
        headers: defaultHeaders,
        body: "{}"
      }
      fetch(`http://localhost:8080/review/like/${review.reviewId}`, requestOptions)
        .then(response => response.json())
        .then(data => {
          updateReviewData(data);
        })
        .catch(error => {

        })
    }

    const onClickDeletePost = () => {
      if(!confirm("정말 삭제하시겠습니까?"))
        return
      let payload = {}
      const requestOptions = {
        method: "DELETE",
        headers: defaultHeaders,
        body: JSON.stringify(payload)
      }
      fetch(`http://localhost:8080/review/${review.reviewId}`, requestOptions)
        .then(response => response.json())
        .then(data => {
          deleteReviewData(review);
        })
        .catch(error => {

        })
    }

    const onClickUpdateComment = (item) => {
      console.log(commentInput.current);
      commentInput.current.value = item.content;
      setFixComment(item.commentId)
    }

    const onClickDeleteComment = (commentId) => {
      if(!confirm("정말 삭제하시겠습니까?"))
        return
      let payload = {}
      const requestOptions = {
        method: "DELETE",
        headers: defaultHeaders,
        body: JSON.stringify(payload)
      }
      fetch(`http://localhost:8080/comment/${commentId}`, requestOptions)
        .then(response => response.json())
        .then(data => {
          let items = [...commentList];
          items.splice(items.findIndex(el => el.commentId === commentId), 1);
          setCommentList(items);
        })
        .catch(error => {

        })
    }

  return (
    <PostStyled className="post_container">
        {user === null ? null:
        <div>
            <div className="post_header">
                <Avatar className="post_image" src={review.user.profileImage === "" ? default_profile:review.user.profileImage } />
                <div className="post_username">{review.user.nickname}</div>
                {review.reviewType == 1 ? (<div className="tooltips">
                    <img src={medal_img} className="certification" alt=""/>
                    <span className="tooltiptext">이 마크는 실제로 구매한 제품인것을 인증합니다!</span>
                </div>):null}
                {
                    review.user.uid === user.uid ? (<div><UpdateIcon className="post_icon" onClick={handleOpen} />
                        <DeleteIcon className="post_icon" onClick={onClickDeletePost} /></div>):null
                }

            </div>
            <div>
                <img src={review.imagePath} width="650px" alt=""/>
                <div className="post_content">{review.content}</div>
            </div>
            <div>
                <div style={{"marginLeft":"10px"}}>
                    <img src={love} className="post_reactimage" onClick={onClickLike} style={{cursor:"pointer"}} alt=""/>
                    <img src={comment} className="post_reactimage" alt=""/>
                    <img src={share} className="post_reactimage" alt=""/>
                </div>
                <div style={{"fontWeight":"bold", "marginLeft":"20px"}}>
                    {review.likeCount} likes
                </div>
            </div>
            <div>
                {
                    commentList.map((item, index) => (
                        <div className="post_comment"
                             key={item.commentId}>{item.user.nickname}: {item.content}
                            {item.user.uid === user.uid ?
                                (<div className="comment_icon_wrap"><UpdateIcon className="comment_icon" onClick={()=>onClickUpdateComment(item)} />
                                    <DeleteIcon className="comment_icon" onClick={()=>onClickDeleteComment(item.commentId)} /></div>):null
                            }</div>
                    ))
                }
                <input className="post_commentbox" ref={commentInput} onKeyPress={submitComments} type="text" placeholder="Add a commnet..." />
            </div>
            <ReviewModal open={open} handleClose={handleClose} handlePostData={updateReviewData} review={review} />
        </div>
        }
    </PostStyled>

  );
}

export default Review;