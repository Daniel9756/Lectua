import React, { useContext,  } from "react";
import { useFormik } from "formik";
import { CustomInput, LabelText,  } from "../../../controls/Input";
import { CustomButton } from "../../../controls/Button";
import { editASubject } from "../../../Context/actions/lesson/lesson";
import { GlobalContext } from "../../../Context/Provider";
import * as lecturerData from "../../../utils/LecturerData";
import { CustomSelect } from "../../../controls/Select";

import { CircularProgress,  Box,  } from "@material-ui/core";


function Subject(props) {
    // const history = useHistory();
    const { setOpenPopUp, item } = props
    const id = item.id
    const {
        editSubjectDispatch,
        editSubjectState: {
            editsubject: { isEditingSubject, error, isEdited, edited, isError },
        },
      
    } = useContext(GlobalContext);
    console.log(isEditingSubject, error, edited, isError)



    const formik = useFormik({
        initialValues: {
            subject: item.subject,
            target: item.target,
            price: item.price,
            per: item.per,
        },

        onSubmit: (values) => {
            const data = {
                values, id
            }
            editASubject(data)(editSubjectDispatch)
            if (isEdited) {
                setOpenPopUp(false)
            }
        },
    });
    return (
        <Box>
            <form onSubmit={formik.handleSubmit}>
                <LabelText>Enter Your Subject</LabelText>
                <div
                    style={{
                        marginTop: 8,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <CustomInput
                        name="subject"
                        type="text"
                        placeholder="Your Course"
                        label="label"
                        onChange={formik.handleChange}
                        value={formik.values.subject}
                    />
                </div>

                <LabelText>Target Student</LabelText>
                <div
                    style={{
                        marginTop: 8,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <CustomSelect
                        type="text"
                        name="target"
                        options={lecturerData.lecturerTarget()}
                        value={formik.values.target}
                        onChange={formik.handleChange}
                    />
                </div>

                <div class="row">
                    <div class="col-md-6 col-sm-12">
                        <div style={{ marginTop: 8 }}>
                            <LabelText>Price</LabelText>
                            <CustomInput
                                placeholder="eg. Free or #1000"
                                name="price"
                                label="label"
                                onChange={formik.handleChange}
                                value={formik.values.price}
                                type="text"
                            />
                        </div>{" "}

                    </div>
                    <div class="col-md-6 col-sm-12">
                        <div style={{ marginTop: 8 }}>
                            <LabelText>Per</LabelText>
                            <CustomSelect
                                name="per"
                                type="text"
                                options={lecturerData.duration()}
                                onChange={formik.handleChange}
                                value={formik.values.per}
                            />
                        </div>{" "}

                    </div>
                </div>
                <CustomButton
                    text="Submit"
                    type="submit"
                    style={{
                        cursor: "pointer",
                        width: "100%",
                        borderRadius: 12,
                        color: "#DA7B93",
                        marginTop: 16,
                    }}
                >

                    {isEditingSubject ? (
                        <CircularProgress style={{ fontSize: 40, color: "#DA7B93" }} />
                    ) : (
                        "Update"
                    )}
                </CustomButton>
            </form>
        </Box>

    );
}

export default Subject;
