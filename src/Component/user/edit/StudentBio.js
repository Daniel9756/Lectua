
import React, { useState, useContext, useEffect } from "react";
import { CustomButton } from "../../../controls/Button";
import * as lecturerData from "../../../utils/LecturerData";
import { CustomeFileInput } from "../../../controls/FileInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Container, Grid, makeStyles, CircularProgress, } from "@material-ui/core";
import {

    LabelText,
    Title,

} from "../../../controls/Input";
import { CustomSelect } from "../../../controls/Select";
import ErrorMessage from "../../../utils/Error/ErrorMessage";
import { GlobalContext } from "../../../Context/Provider";
import { editStudentBio } from "../../../Context/actions/profile/Profile";
import MessageBox from "../../../utils/Alert";
const useStyles = makeStyles({
    location: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 12,
    },
    loc: {
        width: "50%", marginRight: 4
    },
    btn: {
        width: "100%",
        background: "#376e6f",
        height: 40,
        color: "#DA7B93",
        borderRadius: 10,
        float: "center",
        marginTop: 21,
        marginBottom: 21
    },
    "@media (max-width: 960px)": {

    },
    "@media (max-width: 440px)": {
        locs: {
            width: "100%", marginRight: 2
        },
        loc: {
            width: "100%", marginRight: 2
    
        },
        grid: {
            display: "none",
        }
    },
});

function StudentBio({ setIsOpen }) {

    const [selectedFile, setSelectedFile] = useState("");
    const userId = localStorage.getItem("userId");
    const classes = useStyles();
    const handleFile = (avater) => {
        setSelectedFile(avater);
    };

    const {
        editStudentDispatch,
        editStudentState: {
            editstudent: { isEditingStudent, editscholar, isEditEnrolled, error, isError },
        },

    } = useContext(GlobalContext);


    console.log(isEditingStudent, editscholar, isEditEnrolled, error, isError)
    useEffect(() => {
        if (isEditEnrolled) {
            setIsOpen(false)
        }
    }, [setIsOpen]);


    const formik = useFormik({
        initialValues: {
            specialty: "",
            studentCountry: "",
            studentState: ""
        },
        validationSchema: Yup.object({
            specialty: Yup.string()
                .required("This field is reqiured"),
            studentCountry: Yup.string()
                .required("This field is reqiured"),
            studentState: Yup.string()
                .required("This field is reqiured"),

        }),
        onSubmit: (values, action) => {
            const data = {
                values, selectedFile, userId
            }
            editStudentBio(data)(editStudentDispatch);
            action.resetForm()
        },
    });


    return (
        <Box>
            <Container>

                <Grid container className={classes.location}>
                    <Grid item md="2" className={classes.grid}></Grid>
                    <Grid item md="8">
                        <form onSubmit={formik.handleSubmit}>
                            <Box style={{ textAlign: "center", marginBottom: 22, marginTop: 22 }}>
                                {" "}
                                <Title>Biography</Title>

                            </Box>

                            <Box>
                                <LabelText>Specialization</LabelText>
                                <CustomSelect
                                    type="text"
                                    name="specialty"
                                    options={lecturerData.lecturerSpecialty()}
                                    value={formik.values.specialty}
                                    onChange={formik.handleChange}
                                ></CustomSelect>
                                <div style={{ marginLeft: 4 }}>
                                    {formik.touched && formik.errors && (
                                        <ErrorMessage errorValue={formik.errors.specialty} />
                                    )}
                                </div>



                            </Box>

                            <Box className={classes.locs}>
                                <LabelText for="studentCountry">Country</LabelText>
                                <CustomSelect
                                    placeholder="Your Country"
                                    label="studentCountry"
                                    type="text"
                                    name="studentCountry"
                                    options={lecturerData.lecturerCountry()}
                                    onChange={formik.handleChange}
                                    value={formik.values.orgCountry}
                                />
                                <div style={{ marginLeft: 4 }}>
                                    {formik.touched && formik.errors && (
                                        <ErrorMessage errorValue={formik.errors.studentCountry} />
                                    )}
                                </div>
                            </Box>
                            <Box className={classes.loc}>
                                <LabelText for="studentState">State</LabelText>
                                <CustomSelect
                                    placeholder="Your State"
                                    label="studentState"
                                    type="text"
                                    name="studentState"
                                    options={lecturerData.lecturerState()}
                                    onChange={formik.handleChange}
                                    value={formik.values.orgState}
                                />
                                <div style={{ marginLeft: 4 }}>
                                    {formik.touched && formik.errors && (
                                        <ErrorMessage errorValue={formik.errors.studentState} />
                                    )}
                                </div>
                            </Box>

                            <Box className={classes.inputbx}>
                                <LabelText for="file">
                                    Profile picture(40MB max.)
                                    <small
                                        style={{
                                            color: "#DA7B93",
                                        }}
                                    >
                                        {" "}
                                        {selectedFile ? selectedFile.name : ""}
                                    </small>
                                </LabelText>
                                <CustomeFileInput
                                    type="file"
                                    onFileSelectSuccess={handleFile}
                                    onFileSelectError={({ error }) => alert(error)}
                                />
                            </Box>
                            <CustomButton
                                type="Submit"
                                className={classes.btn}
                            >
                                {isEditingStudent ? (
                                    <CircularProgress
                                        style={{ fontSize: 25, color: "#DA7B93" }}
                                    />
                                ) : (
                                    "Update"
                                )}
                            </CustomButton>
                        </form>
                    </Grid>
                    <Grid item md="2" className={classes.grid}></Grid>
                </Grid>
                {isEditEnrolled && (<MessageBox message={editscholar?.message} severity="success" />)}
                {error && (<MessageBox message="User was not created" severity="error" />)}
            </Container>

        </Box>
    );
}

export default StudentBio;
