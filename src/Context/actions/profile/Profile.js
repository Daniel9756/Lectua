import axios from 'axios'
import {
    PROFILE_LOADING,
    PROFILE_SUCCESS,
    PROFILE_ERROR,
    AWARD_LOADING, AWARD_SUCCESS, AWARD_ERROR,
    STUDENT_LOADING, STUDENT_SUCCESS, STUDENT_ERROR,
    EDIT_LOADING, EDIT_SUCCESS, EDIT_ERROR,
    EDITAWARD_LOADING, EDITAWARD_SUCCESS, EDITAWARD_ERROR,
    EDITSTUDENTBIO_LOADING, EDITSTUDENTBIO_SUCCESS, EDITSTUDENTBIO_ERROR
} from "../ActionTypes";

const baseUrl = "http://localhost:5500/profile/";



export const addProfile = (values) => (dispatch) => {
    const token = localStorage.getItem("token");
    const { biography: { orgName,
        phone,
        city,
        orgAddress,
        orgCountry,
        orgState,
        bio,
        ourPolicy }, plan, userId, selectedFile } = values
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
    formData.append("userId", userId);
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
    const { values: { certifications, specialty, subjects }, awardFile, userId } = data
    console.log(certifications, specialty, subjects, awardFile, "values from profile")
    const formData = new FormData();
    formData.append("userId", userId);
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
        .post(baseUrl + 'awards/', formData, {
            headers: {
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
    const { values: { specialty, studentCountry, studentState }, selectedFile, userId } = data
    const formData = new FormData();
    formData.append("userId", userId)
    formData.append("specialty", specialty);
    formData.append('studentCountry', studentCountry)
    formData.append('studentState', studentState)
    formData.append('selectedFile', selectedFile)
    dispatch({
        type: STUDENT_LOADING,
    });
    axios
        .post(baseUrl + 'students/', formData, {
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


export const editProfile = (data) => (dispatch) => {
    const token = localStorage.getItem("token");
    const { values: { orgName,
        phone,
        city,
        orgAddress,
        orgCountry,
        orgState,
        bio,
    }, userId: id, selectedFile } = data
    const formData = new FormData();
    formData.append("orgName", orgName);
    formData.append("phone", phone);
    formData.append("city", city);
    formData.append("orgAddress", orgAddress);
    formData.append("orgCountry", orgCountry);
    formData.append("orgState", orgState);
    formData.append("bio", bio);
    formData.append("pics", selectedFile);

    dispatch({
        type: EDIT_LOADING,
    });
    axios
        .put(baseUrl + `${id}`, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
            },
        })
        .then((res) =>
            dispatch({
                type: EDIT_SUCCESS,
                payload: res.data
            }))
        .catch((err) => dispatch({
            type: EDIT_ERROR,
            error: err,
        }))
}


export const editAwards = (data) => (dispatch) => {
    const token = localStorage.getItem("token");
    const { values: { certifications, specialty, subjects }, awardFile, userId } = data
    // console.log(certifications, specialty, subject, awardFile, "values from profile")
    console.log(data, "values from awardFile")
    const formData = new FormData();
    formData.append("specialty", specialty);
    formData.append('certifications', JSON.stringify(certifications))
    formData.append('subjects', JSON.stringify(subjects))
    for (let i = 0; i < awardFile.length; i++) {
        formData.append("awardFile", awardFile[i])
    }
    dispatch({
        type: EDITAWARD_LOADING,
    });
    axios
        .put(baseUrl + `awards/${userId}`, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
            },
        })
        .then((res) =>
            dispatch({
                type: EDITAWARD_SUCCESS,
                payload: res.data
            }))
        .catch((err) => dispatch({
            type: EDITAWARD_ERROR,
            error: err,
        }))
}


export const editStudentBio = (data) => (dispatch) => {
    const token = localStorage.getItem("token");
    console.log(data, token, "values from editStudentBio")
    const { values: { specialty, studentCountry, studentState }, selectedFile, userId} = data
    const formData = new FormData();

    formData.append("specialty", specialty);
    formData.append('studentCountry', studentCountry)
    formData.append('studentState', studentState)
    formData.append('selectedFile', selectedFile)
    dispatch({
        type: EDITSTUDENTBIO_LOADING,
    });
    axios
        .put(baseUrl + `students/${userId}`, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
            },
        })
        .then((res) =>
            dispatch({
                type: EDITSTUDENTBIO_SUCCESS,
                payload: res.data
            }))
        .catch((err) => dispatch({
            type: EDITSTUDENTBIO_ERROR,
            error: err.payload,
        }))
}