import React, { useReducer, useState, useContext, useEffect } from "react";

import { CustomButton, GroupButton } from "../../../controls/Button";
import * as lecturerData from "../../../utils/LecturerData";
import { MultiFileInput } from "../../../controls/FileInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
    Box, Container, Grid, makeStyles, CircularProgress
} from "@material-ui/core";

import {
    CustomInput,
    LabelText,

    Info,
} from "../../../controls/Input";
import { CustomSelect } from "../../../controls/Select";
import MessageBox from "../../../utils/Alert";

import { GlobalContext } from "../../../Context/Provider";
import { editAwards } from "../../../Context/actions/profile/Profile";
const useStyles = makeStyles({
    inputbx: {},
    upload: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        top: 10
    },
});

const dynamicCertificateInitialState = [1];
const dynamicCertificateReducer = (state, action) => {
    switch (action.type) {
        case "REMOVE":
            return state.filter((_, index, arr) => index !== arr.length - 1);
        case "ADD":
            return [...state, 1];
        default:
            return dynamicCertificateInitialState;
    }
};
function Certificates(props) {
    const classes = useStyles();

    const [awardFile, setAwardFile] = useState([]);
    const { setOpenPopUp } = props
    const {
        editAwardDispatch,
        editAwardState: {
            editAward: { isEditingAwards, error, isAwardEdited, editedCertificates, isError },
        },
    } = useContext(GlobalContext);
    const userID = localStorage.getItem("userID");
    console.log(isEditingAwards, error, isAwardEdited, editedCertificates, isError)

    useEffect(() => {
        if (isAwardEdited) {
            setOpenPopUp(false)
        }
    }, [isAwardEdited]);


    const [dynamicCertificate, dynamicCertificateDispatch] = useReducer(
        dynamicCertificateReducer,
        dynamicCertificateInitialState
    );
    const handleAwardFile = (award) => {
        console.log(award);
        setAwardFile(award);
    };

    const formik = useFormik({
        initialValues: {
            specialty: "",
            subjects: "",
            certifications: 
                {
                    awardTitle: "",
                    awardOrg: "",
                }
            
        },
        validationSchema: Yup.object({
            specialty: Yup.string()
                .required("This field is reqiured"),
        }),
        onSubmit: (values, action) => {
            const data = {
                values, awardFile, userID,
            }
            editAwards(data)(editAwardDispatch);
            action.resetForm()
        },
    });
    return (
        <Box>

            <Container>

                <Grid container style={{ textAlign: "center", marginBottom: 22 }}>
                    <Grid item md={2}></Grid>
                    <Grid item md={8}>
                        <form onSubmit={formik.handleSubmit}>

                            <Box style={{ width: "100%", marginRight: 4 }}>
                                <LabelText>Specialty</LabelText>
                                <CustomSelect
                                    type="text"
                                    name="specialty"
                                    options={lecturerData.lecturerSpecialty()}
                                    value={formik.values.specialty}
                                    onChange={formik.handleChange}
                                ></CustomSelect>
                            </Box>
                            <Box
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginTop: 20,
                                }}
                            >

                                <Box style={{ width: "100%", marginLeft: 4 }}>
                                    <LabelText>
                                        Subjects(<em>You can add maximum of 5 subjects</em>)(<em>Press Ctrl key to select</em>)
                                    </LabelText>
                                    <CustomSelect
                                        multiple="multiple"
                                        size={10}
                                        type="text"
                                        name="subjects"
                                        options={lecturerData.lecturerSubject()}
                                        value={formik.values.subjects}
                                        onChange={formik.handleChange}
                                    ></CustomSelect>
                                </Box>
                            </Box>
                            <Box
                                style={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    marginTop: 20,
                                }}
                            >
                                <Box>
                                    {" "}
                                    <Info>Certifications</Info>
                                </Box>
                                <Box
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginLeft: 15,
                                        marginRight: 40,

                                    }}
                                >
                                    <GroupButton
                                        type="button"
                                        style={{
                                            borderBottomLeftRadius: 4,
                                            borderTopLeftRadius: 4,
                                            borderRadius: 4,
                                            fontSize: 15,
                                            fontWeight: "bold",
                                            background: "#376e6f",
                                            color: "#fff",
                                            width: 30,
                                        }}
                                        onClick={() => dynamicCertificateDispatch({ type: "REMOVE" })}
                                    >
                                        -
                                    </GroupButton>
                                    <LabelText style={{ width: 30, textAlign: "center" }}>
                                        {dynamicCertificate.length}
                                    </LabelText>
                                    <GroupButton
                                        type="button"
                                        style={{
                                            borderBottomLeftRadius: 4,
                                            borderTopLeftRadius: 4,
                                            borderRadius: 4,
                                            fontSize: 15,
                                            fontWeight: "bold",
                                            background: "#376e6f",
                                            color: "#fff",
                                            width: 30,
                                        }}
                                        onClick={() => dynamicCertificateDispatch({ type: "ADD" })}
                                    >
                                        +
                                    </GroupButton>
                                </Box>
                            </Box>
                            {dynamicCertificate.length > 0 && dynamicCertificate.map((item, index) => {
                                return (
                                    <Box
                                        style={{
                                            background: "#2f4454",
                                            borderRadius: 8,
                                            padding: 25,
                                            marginTop: 10,
                                        }}
                                        key={index}
                                    >
                                        <Box style={{ width: "100%" }}
                                            key={`awardTitle ${item}`}
                                        >
                                            <CustomInput
                                                placeholder="Certificate title"
                                                text={`${item}`}
                                                name={`certifications[${index}].awardTitle`}
                                                value={formik.values.awardTitle}
                                                onChange={formik.handleChange}
                                            ></CustomInput>
                                        </Box>

                                        <Box style={{ width: "100%" }}
                                            key={`awardOrg ${item}`}
                                        >
                                            <CustomInput
                                                placeholder="Name of the Organisation"
                                                text={`${item}`}
                                                name={`certifications[${index}].awardOrg`}
                                                value={formik.values.awardOrg}
                                                onChange={formik.handleChange}
                                            ></CustomInput>
                                        </Box>
                                    </Box>
                                );
                            })}
                            <Box className={classes.upload}>
                                <Box>

                                    <LabelText for="file">
                                        Upload certificates
                                        <small
                                            style={{
                                                color: "#DA7B93",
                                            }}
                                        >
                                            {" "}

                                        </small>
                                    </LabelText>
                                    <MultiFileInput
                                        onFileSelectSuccess={handleAwardFile}
                                        onFileSelectError={({ error }) => alert(error)}
                                    />
                                </Box>
                                <CustomButton
                                    type="Submit"
                                    style={{
                                        width: 120,
                                        background: "#376e6f",
                                        height: 40,
                                        color: "#DA7B93",
                                        borderRadius: 10,
                                        float: "right"
                                    }}
                                >
                                    {isEditingAwards ? (
                                        <CircularProgress
                                            style={{ fontSize: 15, color: "#DA7B93" }}
                                        />
                                    ) : (
                                        "UPdate"
                                    )}
                                </CustomButton>
                            </Box>

                        </form>
                        {isError && (<MessageBox message="Your account Update has error" severity="error" />)}
                        {isAwardEdited && (<MessageBox message={editedCertificates?.message} severity="success" />)}
                    </Grid>
                    <Grid item md={2}></Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Certificates;
