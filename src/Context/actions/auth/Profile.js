import axios from 'axios'
import {
    PROFILE_LOADING,
    PROFILE_SUCCESS,
    PROFILE_ERROR,
    AWARD_LOADING, AWARD_SUCCESS, AWARD_ERROR,
    STUDENT_LOADING, STUDENT_SUCCESS, STUDENT_ERROR
} from "../ActionTypes";


const baseUrl = "http://localhost:5500/profile";
const awardUrl = "http://localhost:5500/profile/awards";
const studentUrl = "http://localhost:5500/profile/students";



export const addProfile = (values) => (dispatch) => {
    const token = localStorage.getItem("token");
    const { biography: { orgName,
        phone,
        city,
        orgAddress,
        orgCountry,
        orgState,
        bio,      
        ourPolicy }, plan, userID, selectedFile } = values
    const formData = new FormData();
    formData.append("orgName", orgName);
    formData.append("phone", phone);
    formData.append("city", city);
    formData.append("orgAddress", orgAddress);
    formData.append("orgCountry", orgCountry);
    formData.append("orgState", orgState);
    formData.append("bio", bio);   
    formData.append("ourPolicy", ourPolicy);
    formData.append("plan", plan);
    formData.append("userID", userID);
    formData.append("pics", selectedFile);

    dispatch({
        type: PROFILE_LOADING,
    });
    axios
        .post(baseUrl, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
            },
        })
        .then((res) =>
            dispatch({
                type: PROFILE_SUCCESS,
                payload: res.data
            }))
        .catch((err) => dispatch({
            type: PROFILE_ERROR,
            error: err,
        }))
}



export const addAwards = (data) => (dispatch) => {
    const token = localStorage.getItem("token");
    const { values: { certifications, specialty, subjects }, awardFile, userID } = data
    // console.log(certifications, specialty, subject, awardFile, "values from profile")
    console.log(awardFile, "values from awardFile")
    const formData = new FormData();
    formData.append("userID", userID);
    formData.append("specialty", specialty);
    formData.append('certifications', JSON.stringify(certifications))
    formData.append('subjects', JSON.stringify(subjects))
    for (let i = 0; i < awardFile.length; i++) {
        formData.append("awardFile", awardFile[i])
    }
    dispatch({
        type: AWARD_LOADING,
    });
    axios
        .post(awardUrl, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
            },
        })
        .then((res) =>
            // localStorage.setItem("token", response.data.token);
            dispatch({
                type: AWARD_SUCCESS,
                payload: res.data
            }))
        .catch((err) => dispatch({
            type: AWARD_ERROR,
            error: err,
        }))
}


export const studentBio = (data) => (dispatch) => {
    const token = localStorage.getItem("token");

    console.log(data, token, "values from studentBio")
    const { values: { specialty, studentCountry, studentState }, selectedFile, userID } = data
    const formData = new FormData();
    formData.append("userID", userID)
    formData.append("specialty", specialty);
    formData.append('studentCountry', studentCountry)
    formData.append('studentState', studentState)
    formData.append('selectedFile', selectedFile)


    dispatch({
        type: STUDENT_LOADING,
    });
    axios
        .post(studentUrl, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
            },
        })
        .then((res) =>
            dispatch({
                type: STUDENT_SUCCESS,
                payload: res.data
            }))
        .catch((err) => dispatch({
            type: STUDENT_ERROR,
            error: err.payload,
        }))
}
