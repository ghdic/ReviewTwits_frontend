import React, {useContext, useState} from 'react';
import styled from "styled-components";
import default_user_image from '../../images/default_user_image.jpg'
import {useHistory} from "react-router-dom";
import {UserContext} from "../AuthProvider";
import {defaultHeaders} from "../../config/clientConfig";

const ProjectCreatorStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #3F3752;
  padding-top: 15px;
  

  .layout {
    padding: 0 15px;
    width: 800px;

    & .content_wrap {
      
      border: 1px solid #e0e3e9;
      border-radius: 3px;
      background: #fff;
      color: #353a3d;
      margin-bottom: 30px;

      & .settings_header {
        border-bottom: 1px solid #ebeef2;
        padding: 22.5px;

        & h2 {
          margin-bottom: 5px;
          font-size: 22px;
          line-height: 1.1em;
          font-weight: 600;
        }

        & p {
          color: #687a86;

        }
      }

      & .settings_content {
        padding: 50px 22.5px 30px;

        & > div {
          margin-bottom: 30px;
        }

        & .fieldset {
          display: flex;
          align-items: flex-start;
          flex-direction: row;
          margin-top: 15px;
          opacity: 1;
          height: 100%;

          & .fieldset_label {
            color: #687a86;
            text-align: right;
            width: 25%;
            flex-shrink: 0;
            font-weight: 500;
            padding: 6px 4px 6px 0;
            margin-right: 12px;
          }

          & .fieldset_block {
            display: flex;
            flex-direction: column;
            margin-left: 3px;
            font-size: 15px;
            flex-grow: 1;
            margin-top: 0;

            & .align_mid {
              display: flex;
              flex-direction: row;
              align-items: center;

              & > a {
                margin-right: 10px;

                & > img {
                  border-radius: 2px;
                  width: 32px;
                  height: 32px;
                  border: 0;
                }
              }

              & h4 {
                font-weight: 500;
              }
            }

            & .explain {
              margin-top: 5px;
              color: #687a86;
              font-size: 13px;
              line-height: 1.3em;

              & a {
                text-decoration: none;
                transition: all 250ms ease-in-out;
                color: #2e9fff;
              }
            }
          }
        }

        .spacing_bottom_double {
          margin-bottom: 30px;
        }

        .input_textbox {
          font-size: 15px;
          border: 1px solid #c2c9d4;
          border-radius: 3px;
          transition: all 200ms ease-in-out;
          background-color: #fff;
          padding: 7.5px;
          width: 400px;
        }

        .text_gray_light {
          color: #c2c9d4;
        }

        .category {
          padding: 8px 10px;
          overflow: hidden;
          width: 400px;
          height: 40px;
          line-height: 1.3em;
          font-size: 15px;
          border: 1px solid #c2c9d4;
        }
      }

      & .setting_footer {
        border-top: 1px solid #ebeef2;

        & .footer_wrap {
          padding: 30px 20px;

          & .left_margin {
            margin-left: 100px;
          }
        }

        & .submit_btn {
          border-color: #2e9fff;
          background-color: #2e9fff;
          color: #fff;
          padding: 10px 24px;
          font-size: 15px;
          border-radius: 3px;
          line-height: 1.3em;
          text-align: center;
          font-weight: 500;

          &:hover {
            background-color: #356ea1;
            border-color: #356ea1;
            color: #fff;
          }
        }
      }
    }
  }
`

function ProjectCreator() {

    const some_color = ['#4eb7ff', '#fd6494', '#43f390', '#ffb508', '#37ba82', '#cd57ff']
    let value = Math.floor(Math.random() * 6)

    const [projectInput, setProjectInput] = useState({
        'projectName':'',
        'summary':'',
        'category':'movie',
        'color':some_color[value],
        'domain':'',
    })
    const {user} = useContext(UserContext);
    const history = useHistory()
    console.log(user)

    const submitProject = () => {
        let payload = {
            "uid": user.uid,
            "projectName": projectInput.projectName,
            "summary": projectInput.summary,
            "category": projectInput.category,
            "color": projectInput.color,
            "domain": projectInput.domain
        }

        const requestOptions = {
            method: "POST",
            headers: defaultHeaders,
            body: JSON.stringify(payload)
        }
        fetch(`http://localhost:8080/project`, requestOptions)
            .then(response => response.json())
            .then(data => {
                history.push('/project/help')
            })


    }

  return (

    <ProjectCreatorStyled>
        {user === null ? null:
            <div className="layout">
                <div>
                    <div className="content_wrap">
                        <header className="settings_header">
                            <h2>
                                프로젝트 생성
                            </h2>
                            <p>
                                All fields are required.
                            </p>
                        </header>
                        <section className="settings_content">
                            <div className="spacing_bottom_double">
                                <div className="fieldset">
                                    <label htmlFor="#" className="fieldset_label">소유자</label>
                                    <div className="fieldset_block">
                                        <div>
                                            <div className="align_mid">
                                                <a href="#">
                                                    <img className="profile_img" src={user.profileImage} alt=""/>
                                                </a>
                                                <div>
                                                    <h4>{user.nickname}</h4>
                                                </div>
                                            </div>
                                            <p className="explain">다른 계정으로 소유자를 바꾸고 싶으시면,<br/>
                                                <a href="#">로그인 하여 계정을 바꾸세요</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="spacing-bottom-double">
                                <div className="fieldset ">
                                    <label htmlFor="project_name"
                                           className="fieldset_label">프로젝트 이름</label>
                                    <div className="fieldset_block">
                                        <input  id="project_name" className="input_textbox" type="text"
                                                autoComplete="off" placeholder="프로젝트 이름을 입력하세요" maxLength="64" value={projectInput.projectName}
                                                onChange={(e) => setProjectInput({...projectInput, projectName: e.currentTarget.value})}/>
                                    </div>
                                </div>
                            </div>
                            <div className="spacing-bottom-double">
                                <div className="fieldset ">
                                    <label htmlFor="project_name"
                                           className="fieldset_label">프로젝트 설명</label>
                                    <div className="fieldset_block">
                                        <input  id="project_name" className="input_textbox" type="text"
                                                autoComplete="off" placeholder="프로젝트 설명을 입력하세요" maxLength="64" value={projectInput.summary}
                                                onChange={(e) => setProjectInput({...projectInput, summary: e.currentTarget.value})}/>
                                    </div>
                                </div>
                            </div>
                            <div className="spacing-bottom-double">
                                <div className="fieldset ">
                                    <label htmlFor="project_name"
                                           className="fieldset_label">도메인 이름</label>
                                    <div className="fieldset_block">
                                        <input  id="project_name" className="input_textbox" type="text"
                                                autoComplete="off" placeholder="도메인을 입력하세요" maxLength="64" value={projectInput.domain}
                                                onChange={(e) => setProjectInput({...projectInput, domain: e.currentTarget.value})}/>
                                    </div>
                                </div>
                            </div>
                            <div className="spacing_bottom_double">
                                <div className="fieldset">
                                    <label htmlFor="category" className="fieldset_label">카테고리</label>
                                    <div className="fieldset_block">
                                        <select name="category" id="category" className="category" onChange={(e) => setProjectInput({...projectInput, category: e.currentTarget.value})}>
                                            <option value="movie">영화</option>
                                            <option value="shopping">쇼핑</option>
                                            <option value="search">검색</option>
                                            <option value="stock">주식</option>
                                            <option value="credit">결제</option>
                                            <option value="game">게임</option>
                                            <option value="art">미술</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <footer className="setting_footer">
                            <div className="footer_wrap">
                                <div className="left_margin">
                                    <button className="submit_btn" onClick={submitProject}>프로젝트 생성</button>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>}

    </ProjectCreatorStyled>
  );
}

export default ProjectCreator;