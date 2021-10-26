import React, { useContext, useEffect, useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import uploadImage from "../../images/upload.png";
import {UserContext} from "../AuthProvider";
import {storage} from "../../auth/firebaseAuth";
import ReviewStar from "./ReviewStar";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {defaultHeaders} from "../../config/clientConfig";


function ReviewModal({open, handleClose, handleReviewData, review = null, certification = null, deleteReportData}) {
  let [formData, setFormData] = useState({
      imagePath: "",
    content: ""
  })

    let [star, setStar] = useState(1)

  const {user} = useContext(UserContext);

  useEffect(() => {
    if(review === null)
      return;
    setFormData({imagePath: review.imagePath ?? "", content: review.content ?? ""})
  }, [])

  let upload_image = (e) => {
      let image = e.target.files[0];
      if(image === null || image === undefined)
          return;
      let uploadTask = ref(storage ,"profile/" + image.name);

      uploadBytes(uploadTask, image).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
              setFormData({...formData, imagePath: url})
          })
      })
  }

  let upload_post = () => {
    if(formData.imagePath === "" || formData.content === "") {
      alert("컨텐츠를 작성하고 제출해주세요!");
      return;
    }

    if(certification == null) {
        let payload = {
            "uid": user.uid,
            "imagePath": formData.imagePath,
            "content": formData.content,
            "score": star
        }

        const requestOptions = {
            method: "POST",
            headers: defaultHeaders,
            body: JSON.stringify(payload)
        }
        let requestUrl = review === null ? "http://localhost:8080/review" : `http://localhost:8080/review/${review.reviewId}`
        fetch(requestUrl, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                handleReviewData(data);
                handleClose();
            })
            .catch(error => {

            })
    } else {
        console.log(certification.projectId)
        let payload = {
            "reviewType": 1,
            "projectId": certification.projectId,
            "path": certification.domainUrl,
            "uid": user.uid,
            "imagePath": formData.imagePath,
            "content": formData.content,
            "score": star
        }

        const requestOptions = {
            method: "POST",
            headers: defaultHeaders,
            body: JSON.stringify(payload)
        }
        fetch("http://localhost:8080/review", requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                handleReviewData(data);
                handleClose();
            })

        const requestOptions2 = {
            method: "POST",
            headers: defaultHeaders,
            body: "{}"
        }
        fetch(`http://localhost:8080/order/complete/${certification.orderId}`, requestOptions2)
            .then(response => response.json())
            .then(data => {
                deleteReportData(certification.orderId)
            })
    }
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Post Upload</DialogTitle>
        <DialogContent>
          <DialogContentText>
            함께 공유하고 애기하고 싶은 리뷰에 대해서 올려보세요!
          </DialogContentText>
          <div className="fileupload" style={{textAlign:"center"}}>
            <label htmlFor="file-upload">
              <img src={formData.imagePath === "" ? uploadImage: formData.imagePath} style={{width:"500px", cursor:"pointer"}} alt=""/>
            </label>
            <input id="file-upload" onChange={upload_image} type="file" style={{display:"none"}} />
          </div>
            <ReviewStar star={star} setStar={setStar} />
          <TextField
            autoFocus
            multiline
            rows={4}
            label="Content"
            type="text"
            fullWidth
            variant="standard"
            value={formData.content}
            onChange={(e) => {setFormData({...formData, content: e.currentTarget.value})}}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={upload_post}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ReviewModal;