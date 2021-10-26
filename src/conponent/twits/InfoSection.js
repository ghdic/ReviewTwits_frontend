import React, { useContext } from "react";
import {Avatar} from "@material-ui/core";
import styled from 'styled-components';
import default_profile from '../../images/default_userprofile.jpg'
import {UserContext} from "../AuthProvider";
import {storage} from "../../auth/firebaseAuth";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {defaultHeaders} from "../../config/clientConfig";

const InfoSectionStyled = styled.div`
  .info_container {
    width: 300px;
    height: 56px;
    margin-top: 50px;
    display: flex;
  }

  .info_image {
    min-width: 60px;
    min-height: 60px;
    cursor: pointer;
  }

  .info_content {
    margin-left: 15px;
  }

  .info_username {
    margin: 5px;
    font-weight: bold;
  }

  .info_description {
    margin: 5px;
  }
`

function InfoSection() {
    const {user, setUser} = useContext(UserContext);

  let userProfileImageUpdate = (e) => {
      let image = e.target.files[0];
      if(image === null || image === undefined)
          return;
      let uploadTask = ref(storage ,"profile/" + image.name);

      uploadBytes(uploadTask, image).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
              let payload = {
                  "nickname": user.userName,
                  "profileImage": url,
                  "birthday": user.birthday,
                  "age": user.age,
                  "gender": user.gender,
                  "reviewReveal": user.reviewReveal
              }

              const requestOptions = {
                  method: "POST",
                  headers: defaultHeaders,
                  body: JSON.stringify(payload)
              }
              fetch(`http://localhost:8080/user/${user.uid}`, requestOptions)
                  .then(response => response.json())
                  .then(data => {
                      setUser(data);
                  })
          })
      })



  }

  return (
    <InfoSectionStyled>
        <div className="info_container">
          <input id="profile_image_upload" onChange={userProfileImageUpdate} type="file" style={{display:"none"}} />
          <label htmlFor="profile_image_upload">
            <Avatar src={user.profileImage === "" ? default_profile:user.profileImage} className="info_image" />
          </label>
            <div className="info_content">
                <div className="info_username">{user.nickname}</div>
                <div className="info_description">{user.content}</div>
            </div>
        </div>
    </InfoSectionStyled>
  );
}

export default InfoSection;