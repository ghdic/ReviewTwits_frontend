import React, { useEffect, useState } from "react";
import {Grid} from "@material-ui/core";
import StatusBar from "./StatusBar";
import Mainpage from "./Mainpage";
import InfoSection from "./InfoSection";
import Suggestions from "./Suggestions";
import styled from "styled-components";


const MainContentStlyed = styled.div`
  body {
    background-color: #fafafa;
  }
`

function MainContent() {

  let [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/review")
      .then(response => response.json())
      .then(data => {
          setReviewData(data);
      })

  }, [])

  return (
    <MainContentStlyed>
        <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={6} style={{minWidth:"650px"}}>
                <StatusBar setReviewData={setReviewData} />
                <Mainpage reviewData={reviewData} setReviewData={setReviewData} />
            </Grid>
            <Grid item xs={2} style={{"marginLeft":"50px", minWidth:"300px"}}>
                <InfoSection />
                <Suggestions />
            </Grid>
            <Grid item xs={2}></Grid>
        </Grid>
    </MainContentStlyed>
  );
}

export default MainContent;