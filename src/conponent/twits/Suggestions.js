import React, {useContext, useEffect, useState} from 'react';
import {Avatar} from "@material-ui/core";
import defaultProfile from '../../images/default_userprofile.jpg'
import styled from "styled-components";
import {defaultHeaders, normalHeaders} from "../../config/clientConfig";
import {UserContext} from "../AuthProvider";
import classnames from "classnames";

const SuggestionsStyled = styled.div`
  .suggestions_container {
    width: 325px;
    height: 290px;
    margin-top: 25px;
  }

  .suggestions_header {
    font-weight: bold;
    color: #8e8e8e;
  }

  .suggestions_body {
    height: 256px;
    width: 290px;
    margin-top: 10px;
  }

  .suggestions_friends {
    display: flex;
  }

  .suggestions_image {
    max-width: 35px;
    max-height: 35px;
  }

  .suggestions_username {
    font-weight: bold;
    margin: 10px
  }

  .follow_btn {
    position: relative;
    padding: 3px 5px;
    color: var(--white);
    background: var(--blue);
    border-radius: 6px;
    border: none;
    margin-left: 5px;
    
    &.active {
      color: var(--gray);
      background: rgba(0, 0, 0, 0.05);
    }
  }
`

function Suggestions() {

    let [suggestionList, setSuggestionList] = useState([])
    let [follower, setFollower] = useState([])
    const {user} = useContext(UserContext);

    useEffect(() => {
        fetch(`http://localhost:8080/user/suggestions`)
            .then(response => response.json())
            .then(data => {
                setSuggestionList(data);
            })
        const requestOptions = {
            method: "GET",
            headers: defaultHeaders
        }

        fetch('http://localhost:8080/follower', requestOptions)
            .then(response => response.json())
            .then(data => {
                setFollower(data)
            })

    }, [])

    const onClickFollow = (targetUid, check) => {
        if (check) {
            let payload = {
            }

            const requestOptions = {
                method: "DELETE",
                headers: defaultHeaders,
                body: JSON.stringify(payload)
            }
            fetch(`http://localhost:8080/follower/${targetUid}`, requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    if(data == 0) {
                        let items = [...follower];
                        items.splice(items.findIndex(el => el.targetUid === targetUid), 1);
                        setFollower(items)
                    }
                })
        } else {
            let payload = {
                "uid": user.uid,
                "targetUid": targetUid
            }

            const requestOptions = {
                method: "POST",
                headers: defaultHeaders,
                body: JSON.stringify(payload)
            }
            fetch(`http://localhost:8080/follower`, requestOptions)
                .then(response => response.json())
                .then(data => {
                    setFollower([...follower, data]);
                })
        }
    }

  return (
    <SuggestionsStyled>
        <div className="suggestions_container">
            <div className="suggestions_header">
                <div>Suggestions For You</div>
            </div>
            <div className="suggestions_body">
                {
                    suggestionList.map((item, index) => (
                        <div className="suggestions_friends" key={index}>
                            <Avatar className="suggestions_image" src={item.profileImage === "" ? defaultProfile:item.profileImage} />
                            <div className="suggestions_username">{item.nickname}<button onClick={() => onClickFollow(item.uid, follower.map(a=>a.targetUid).includes(item.uid))} className={classnames('follow_btn', {'active': follower.map(a=>a.targetUid).includes(item.uid)})}>{follower.map(a=>a.targetUid).includes(item.uid) ? 'Followed':'Follow'}</button></div>
                        </div>
                    ))
                }
            </div>
        </div>
    </SuggestionsStyled>
  );
}

export default Suggestions;