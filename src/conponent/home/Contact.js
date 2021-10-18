import React from 'react';
import styled from "styled-components";

const ContactStyled = styled.section`
  .contact_section {
    padding: 50px;
  }

  .contact_wrapper {
    width: 100%;
    display: block;
    position: relative;

    margin-bottom: 50px;
  }

  .contact {
    margin: 0 auto;
    width: 66.66%;
    text-align: center;

    & h2 {
      font-weight: 800;
      font-size: 60px;
    }

    & p {
      padding: 20px 0;
      font-size: 17px;
      font-weight: bolder;
      color: #555;
    }
  }

  .line {
    border: 1px solid #e73131;
    width: 15%;
    margin: 0 auto;
  }

  .contact_info {

  }

  .contact_form {
    padding: 0;
    position: relative;
    top: 20px;
    margin-top: 0;
    margin-bottom: 10px;
    text-align: left;
    color: #333;
    font-size: 14px;
    line-height: 1.4em;

    & a {
      text-decoration: none;
      color: #666;
    }

    & li {
      display: block;
      padding-bottom: 30px;

      & svg {
        color: #666;
        float: left;
        margin-rgiht: 10px;
      }

      & h6 {
        font-size: 14px;
        color: #666;
        margin: 0 0 0 20px;
      }
    }
  }

  .contact_grid {
    display: grid;
    grid-template-columns: 1fr 1.3fr;
    column-gap: 30px;
  }

  .col_50 {
    width: 50%;
    float: left;
    padding: 0 15px;
  }

  .form_group {
    margin-bottom: 30px;
  }

  .form_control {
    display: block;
    width: 100%;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.43;
    color: #555;
    background: #fff;
    border: 1px solid #ccc;
    height: 35px;
    border-radius: 0;
    box-shadow: none;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  }

  textarea.form_control {
    min-height: 120px;
    resize: none;
    height: auto;
  }

  .btn_send {
    color: #e73131;
    border: 2px solid #e73131;
    padding: 2% 0%;
    font-size: 15px;
    display: block;
    width: 100%;
    position: relative;
    text-decoration: none;
    text-align: center;
  }
`

function Contact() {
  return (
      <ContactStyled className="contact_section">
          <div>
              <div className="contact_wrapper">
                  <div className="contact">
                      <h2>CONTATCT <span style={{color:'#e73131'}}>US</span></h2>
                      <div className="line"></div>
                      <p>문의나 협의가 필요하시다면 지금 바로 연락주세요. 연락에 사용하신 개인정보는 1개월 후 자동으로 파기 됩니다. </p>
                  </div>
              </div>
              <div className="contact_grid">
                  <div className="contact_info">
                      <h4>CONTACT IN<span style={{color:'#e73131'}}>FO</span></h4>
                      <ul className="contact_form">
                          <li>
                              <i className="fa fa-map-marker"></i>
                              <h6><strong>Address:</strong> 충청남도 아산시 배방읍 호서로79길 20</h6>
                          </li>
                          <li>
                              <i className="fa fa-envelope"></i>
                              <h6><strong>Mail Us:</strong> <a href="#">ghdic77@gmail.com</a></h6>
                          </li>
                          <li>
                              <i className="fa fa-phone"></i>
                              <h6><strong>Phone:</strong> 010-5163-0298</h6>
                          </li>
                          <li>
                              <i className="far fa-comments"></i>
                              <h6><strong>Website:</strong> <a href="#">www.reviewtwits.com</a></h6>
                          </li>
                      </ul>
                  </div>
                  <div className="contact_input">
                      <form method="post" action="#">
                          <div style={{marginRight:'-15px', marginLeft:'-15px'}}>
                              <div className="col_50">
                                  <div className="form_group">
                                      <input type="text" className="form_control" name="name" placeholder="Name"/>
                                  </div>
                              </div>
                              <div className="col_50">
                                  <div className="form_group">
                                      <input type="email" className="form_control" name="email" placeholder="Email Address"/>
                                  </div>
                              </div>
                          </div>
                          <div className="form_group">
                              <input type="text" className="form_control" name="subject" placeholder="Subject"/>
                          </div>
                          <div className="form_group">
                            <textarea name="message" rows="4" className="form_control"
                                      placeholder="Enter your message"></textarea>
                          </div>
                          <a className="btn_send" href="#">Send Now</a>
                      </form>
                  </div>
              </div>
          </div>
      </ContactStyled>
  );
}

export default Contact;