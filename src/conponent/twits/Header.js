import React, { useContext } from "react";
import {Grid, Avatar, Link} from "@material-ui/core";
import home from '../../images/home.svg'
import message from '../../images/message.svg'
import find from '../../images/find.svg'
import react from '../../images/love.svg'
import styled from "styled-components";
import LogoutIcon from '@mui/icons-material/Logout';
import {useHistory} from "react-router-dom";

const NavbarStyled = styled.div`
  .logo {
    color: #2f2f2f;
    position: relative;
    display: block;
    padding: 0 10px;
    height: 60px;
    line-height: 60px;
    text-align: start;
    white-space: nowrap;
    cursor: pointer;

  }
  
  .navbar_barContent {
    height: 54px;
    background-color: white;
    border-bottom: 1px solid #dbdbdb;
  }

  .navbar_logo {
    margin-top: 10px;
  }

  .navbar_img {
    margin:15px 10px;
  }

  .nav_searBar {
    height: 30px;
    width: 215px;
    margin-top: 10px;
    border: 1px solid #dbdbdb;
    text-align: center;
    background-color: #fafafa;
    border-radius: 5px;
  }
`

function Header() {
    const history = useHistory()

  return (
    <NavbarStyled>
        <div className={"navbar_barContent"}>
            <Grid container>
                <Grid item xs={2}></Grid>
                <Grid item xs={3}>
                    <h2 className='logo' onClick={() => history.push('/home')}>ReviewTwits</h2>
                </Grid>
                <Grid item xs={3}>
                    <input type="text" className={"nav_searBar"} placeholder={"Search"}/>
                </Grid>
                <Grid item xs={3} style={{'display':'flex'}}>
                    <img className={"navbar_img"} style={{cursor: "pointer"}} onClick={() => history.push('/home')} src={home} width={"25px"} alt=""/>
                    <img className={"navbar_img"} src={message} width={"25px"} alt=""/>
                    <img className={"navbar_img"} src={find} width={"25px"} alt=""/>
                    <img className={"navbar_img"} src={react} width={"25px"} alt=""/>
                    <LogoutIcon className={"navbar_img"} style={{cursor: "pointer"}} onClick={() => history.push('/logout')} />
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </div>

    </NavbarStyled>
  );
}

export default Header;