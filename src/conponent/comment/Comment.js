import React, { useEffect, useState } from "react";
import ReplyIcon from "@material-ui/icons/Reply";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import styled from "styled-components";

const CommentStyled = styled.div`
  
  .comment_view {
  }

  .comment_view strong {
    display: block;
    padding: 10px 3px;
    margin-left: 70px;
  }

  .comment_table {
    border-spacing: 0px;
    border-collapse: separate;
    border: 1px solid #c2c2c2;
    width: 1000px;
    margin: 0 auto;
    word-break: break-word;
  }

  .comment_table td {
    border-top-style: dotted;
    border-top-color: #c2c2c2;
    border-top-width: 1px;
  }

  .username {
    background-color: #f8f8f8;
    padding: 20px 30px;
    width: 20%;
  }

  .nickname {
    display: inline-block;
    width: 80%;
  }

  .comment {
    background-color: #fafafa;
    padding: 20px 30px;
    width: 80%;
  }

  .reply {
    display: inline-block;
    width: 20%;
    float: left;
  }

  .reply_manage {
    display: inline-block;
    transform: translate(0, 2px);
  }

  .btn-reply {
    background: none;
    border: 0;
    color: #90b4e6;
    font-size: 11px;
    cursor: pointer;
  }

  .btn-delete {
    background: none;
    border: 0;
    color: rgb(49, 59, 59);
    font-size: 11px;
    cursor: pointer;
  }

  .btn-edit {
    background: none;
    border: 0;
    color: #79cd8c;
    font-size: 11px;
    cursor: pointer;
  }

  .comment-input {
    margin: 10px 0px;
  }

  .comment-input textarea {
    width: 85%;
    height: 150px;
    float: left;
    padding: 10px;
    font-size: 20px;
    resize: none;
  }

  .comment-input a {
    display: inline-block;
    background-color: #2d69b8;
    width: 15%;
    height: 150px;
    text-decoration: none;
    color: white;
    font-size: 20px;
    text-align: center;
    line-height: 150px;
  }

  .comment-edit {
    margin: 10px;
  }

  .comment-edit textarea {
    width: 400px;
    height: 300px;
    float: left;
    padding: 10px;
    font-size: 20px;
    resize: none;
  }

  .comment-edit input[type="submit"] {
    width: 75px;
    background-color: #2d69b8;
    color: white;
    font-size: 20px;
    text-align: center;
    line-height: 300px;
    cursor: pointer;
  }

  .disable {
    display: none;
  }

  .rotate-180 {
    transform: rotate(-180deg);
  }

  .reply_icon {
    transform: rotate(-180deg) translate(0, -5px);
  }

  .icon {
    transform: translate(0, 5px);
  }
`;

function Comment() {
    let [commentList, setCommentList] = useState([]);
    useEffect(() => {
        const data = [
            {
                author: "인생마린",
                userName: "ghdic",
                parentId: "0",
                commentId: "1",
                postId: "1",
                comment: "안녕하세요 ㅎㅎ",
                date: "08-12 14:23:48",
            },
            {
                author: "인생마린",
                userName: "ghdic",
                parentId: "0",
                commentId: "2",
                postId: "1",
                comment: "안녕하세요 ㅎㅎ",
                date: "08-12 14:23:48",
            },
            {
                author: "인생마린",
                userName: "ghdic",
                parentId: "0",
                commentId: "3",
                postId: "1",
                comment: "안녕하세요 ㅎㅎ",
                date: "08-12 14:23:48",
            },
            {
                author: "인생마린",
                userName: "ghdic",
                parentId: "1",
                commentId: "4",
                postId: "1",
                comment: "안녕하세요 ㅎㅎ",
                date: "08-12 14:23:48",
            },
            {
                author: "인생마린",
                userName: "ghdic",
                parentId: "0",
                commentId: "5",
                postId: "1",
                comment: "안녕하세요 ㅎㅎ",
                date: "08-12 14:23:48",
            },
            {
                author: "인생마린",
                userName: "ghdic",
                parentId: "3",
                commentId: "6",
                postId: "1",
                comment: "안녕하세요 ㅎㅎ",
                date: "08-12 14:23:48",
            },
            {
                author: "인생마린",
                userName: "ghdic",
                parentId: "0",
                commentId: "7",
                postId: "1",
                comment: "안녕하세요 ㅎㅎ",
                date: "08-12 14:23:48",
            },
        ];

        document.body.style.width = 'auto'
        document.body.style.height = 'auto'
        document.body.style.minHeight = 'auto'

        data.map((item, index) => (data[index] = { ...item, commentState: 0 }));

        let comment = data.filter((item) => item.parentId === "0");
        let reply_comment = data.filter((item) => item.parentId !== "0");
        reply_comment.map((item, index) =>
            comment.splice(
                comment.findIndex((i) => i.commentId === item.parentId) + 1,
                0,
                item
            )
        );
        setCommentList(comment);
    }, []);

    const clickReply = (num, index) => {
        let newCommentList = [...commentList];
        if (newCommentList[index].commentState === num)
            newCommentList[index].commentState = 0;
        else newCommentList[index].commentState = num;
        console.log(newCommentList);
        setCommentList(newCommentList);
    };

    return (
        <CommentStyled>
            <div className="comment_view">
                <strong>[댓글: 총 {commentList.length}개]</strong>
                <table className="comment_table">
                    <tbody>
                    {commentList.map((item, index) => (
                        <tr key={item.commentId}>
                            <td className="username">
                                {item.parentId !== "0" && (
                                    <div className="reply">
                                        <ReplyIcon className="rotate-180" />
                                    </div>
                                )}

                                <div className="nickname">
                                    {item.author}
                                    <br />({item.userName})
                                </div>
                            </td>
                            <td className="comment">
                                <div className="text_wrapper" commentId={item.commentId}>
                                    <span>{item.comment}</span>
                                    <div className="reply_manage">
                                        <button
                                            className="btn-reply"
                                            onClick={() => clickReply(1, index)}
                                        >
                                            <ReplyIcon className="reply_icon" />
                                            답글
                                        </button>
                                        <button
                                            className="btn-edit"
                                            onClick={() => clickReply(2, index)}
                                        >
                                            <EditIcon className="icon" />
                                            수정
                                        </button>
                                        <button
                                            className="btn-delete"
                                            onClick="delete_comment(this)"
                                        >
                                            <DeleteIcon className="icon" />
                                            삭제
                                        </button>
                                    </div>
                                    {item.commentState === 1 && (
                                        <div className="comment-input">
                                            <textarea name="comment_input"></textarea>
                                            <a
                                                href="javascript:void(0)"
                                                onClick="create_comment(this)"
                                                className="comment-btn"
                                            >
                                                등록
                                            </a>
                                        </div>
                                    )}
                                    {item.commentState === 2 && (
                                        <div className="comment-input">
                                            <textarea name="comment_input">{item.comment}</textarea>
                                            <a
                                                href="javascript:void(0)"
                                                onClick="create_comment(this)"
                                                className="comment-btn"
                                            >
                                                등록
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </td>
                        </tr>
                    ))}

                    <tr>
                        <td className="comment-input" colSpan="2" parentID="0">
                            <textarea name="comment_input"></textarea>
                            <a
                                href="javascript:void(0)"
                                onClick="create_comment(this)"
                                className="comment-btn"
                            >
                                등록
                            </a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </CommentStyled>
    );
}

export default Comment;
